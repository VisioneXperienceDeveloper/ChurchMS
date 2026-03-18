import { prisma } from "@server/infrastructure/prisma";
import { IGroupRepository, GroupHierarchyNode } from "@server/interfaces/group-interfaces";

export class PrismaGroupRepository implements IGroupRepository {
  async getOrgChartData(): Promise<GroupHierarchyNode[]> {
    // Top levels (Churches)
    const churches = await prisma.church.findMany({
      include: {
        group: {
          include: {
            subGroups: {
              where: { parentId: null },
              include: {
                group: true,
                leader: {
                  include: {
                    person: true
                  }
                }
              }
            }
          }
        },
        groupTypes: {
          include: {
            groups: {
              include: {
                subGroups: {
                  include: {
                    group: true,
                    leader: {
                      include: {
                        person: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    type SubGroupWithRelations = {
      id: string;
      parentId: string | null;
      group: { name: string };
      leader: {
        person: {
          firstName: string;
          lastName: string;
          profileImgUrl: string | null;
        };
      } | null;
    };

    // Helper to recursively build nodes
    const buildNodes = async (subGroups: SubGroupWithRelations[]): Promise<GroupHierarchyNode[]> => {
      return Promise.all(subGroups.map(async (sg) => {
        const nested = await prisma.subGroup.findMany({
          where: { parentId: sg.id },
          include: {
            group: true,
            leader: { include: { person: true } }
          }
        });

        // Count members in this subgroup
        const memberCount = await prisma.person.count({
          where: { groupId: sg.id }
        });

        return {
          id: sg.id,
          name: sg.group.name,
          type: 'SUBGROUP',
          leaderName: sg.leader ? `${sg.leader.person.firstName} ${sg.leader.person.lastName}` : undefined,
          leaderAvatar: sg.leader?.person.profileImgUrl || undefined,
          memberCount,
          children: await buildNodes(nested)
        } as GroupHierarchyNode;
      }));
    };

    const result: GroupHierarchyNode[] = [];

    for (const church of churches) {
      const churchNode: GroupHierarchyNode = {
        id: church.id,
        name: church.group.name,
        type: 'CHURCH',
        memberCount: 0, // In reality, we might want a total count
        children: []
      };

      // Add GroupTypes as children
      for (const gt of church.groupTypes) {
        const typeNode: GroupHierarchyNode = {
          id: gt.id,
          name: gt.name,
          type: 'GROUP_TYPE',
          memberCount: 0,
          children: []
        };

        // Add Groups under GroupType
        for (const g of gt.groups) {
          const groupNode: GroupHierarchyNode = {
            id: g.id,
            name: g.name,
            type: 'GROUP',
            memberCount: 0,
            children: []
          };

          // Find root subGroups for this group
          const rootSubGroups = g.subGroups.filter(sg => sg.parentId === null);
          groupNode.children = await buildNodes(rootSubGroups);
          
          typeNode.children.push(groupNode);
        }
        churchNode.children.push(typeNode);
      }
      result.push(churchNode);
    }

    return result;
  }

  async getGroupsWithHierarchy(): Promise<unknown[]> {
    return prisma.subGroup.findMany({
      include: {
        group: true,
        parent: true,
        children: true,
        leader: {
          include: {
            person: true
          }
        }
      }
    });
  }

  async createSubGroup(data: { name: string; parentId?: string; groupId: string; leaderId?: string }): Promise<void> {
    await prisma.$transaction(async (tx) => {
      const group = await tx.group.create({
        data: {
          name: data.name,
          groupTypeId: data.groupId, // Assuming groupId passed is actually groupTypeId for now
        }
      });

      await tx.subGroup.create({
        data: {
          id: group.id,
          parentId: data.parentId || null,
          leaderId: data.leaderId || null,
        }
      });
    });
  }

  async updateSubGroup(id: string, data: { name?: string; leaderId?: string }): Promise<void> {
    await prisma.$transaction(async (tx) => {
      if (data.name) {
        await tx.group.update({
          where: { id },
          data: { name: data.name }
        });
      }

      if (data.leaderId !== undefined) {
        await tx.subGroup.update({
          where: { id },
          data: { leaderId: data.leaderId }
        });
      }
    });
  }

  async deleteSubGroup(id: string): Promise<void> {
    await prisma.$transaction(async (tx) => {
      // Delete children first or Prisma will complain about foreign keys
      // However, our schema might have cascade delete. 
      // Let's do it safely.
      
      // In a real app, we might want to move children to parent or something else.
      // Here we'll just delete.
      
      // We need to delete SubGroup first then Group.
      await tx.subGroup.delete({ where: { id } });
      await tx.group.delete({ where: { id } });
    });
  }
}
