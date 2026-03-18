import { GroupHierarchyNode, IGroupRepository } from "../../interfaces/group-interfaces";

export class MockGroupRepository implements IGroupRepository {
  private orgChart: GroupHierarchyNode[] = [
    {
      id: "church-1",
      name: "Global Vision Church",
      type: "CHURCH",
      leaderName: "John Doe",
      memberCount: 150,
      children: [
        {
          id: "gt-1",
          name: "Young Adults Ministry",
          type: "GROUP_TYPE",
          leaderName: "Robert Wilson",
          memberCount: 45,
          children: [
            {
              id: "g-1",
              name: "Vision Group A",
              type: "GROUP",
              leaderName: "James Kim",
              memberCount: 12,
              children: [
                {
                  id: "sg-1",
                  name: "Small Group 1",
                  type: "SUBGROUP",
                  leaderName: "Sarah Lee",
                  memberCount: 6,
                  children: []
                },
                {
                  id: "sg-2",
                  name: "Small Group 2",
                  type: "SUBGROUP",
                  leaderName: "Emily Chen",
                  memberCount: 6,
                  children: []
                }
              ]
            },
            {
              id: "g-2",
              name: "Vision Group B",
              type: "GROUP",
              leaderName: "David Park",
              memberCount: 15,
              children: [
                {
                  id: "sg-3",
                  name: "Small Group 3",
                  type: "SUBGROUP",
                  leaderName: "Alex Gonzalez",
                  memberCount: 8,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: "gt-2",
          name: "Families Ministry",
          type: "GROUP_TYPE",
          leaderName: "Elder Mary",
          memberCount: 80,
          children: [
             {
              id: "g-3",
              name: "Pioneer Group",
              type: "GROUP",
              leaderName: "Anna Schmidt",
              memberCount: 20,
              children: [
                {
                  id: "sg-4",
                  name: "Family Small Group Alpha",
                  type: "SUBGROUP",
                  leaderName: "Michael Brown",
                  memberCount: 10,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: "gt-3",
          name: "Multicultural Ministry",
          type: "GROUP_TYPE",
          leaderName: "Pastor Sam",
          memberCount: 25,
          children: []
        }
      ]
    }
  ];

  async getOrgChartData(): Promise<GroupHierarchyNode[]> {
    return this.orgChart;
  }

  async getGroupsWithHierarchy(): Promise<unknown[]> {
    return this.orgChart;
  }

  async createSubGroup(data: { name: string; parentId?: string; groupId: string; leaderId?: string }): Promise<void> {
    const newNode: GroupHierarchyNode = {
      id: `sg-${Math.random().toString(36).substr(2, 9)}`,
      name: data.name,
      type: "SUBGROUP",
      leaderName: data.leaderId ? "New Leader" : undefined, // In mock, we just placeholder
      memberCount: 0,
      children: []
    };

    const addNodeRecursive = (nodes: GroupHierarchyNode[]): boolean => {
      for (const node of nodes) {
        if (node.id === data.parentId || node.id === data.groupId) {
          node.children.push(newNode);
          return true;
        }
        if (node.children && addNodeRecursive(node.children)) {
          return true;
        }
      }
      return false;
    };

    addNodeRecursive(this.orgChart);
  }

  async updateSubGroup(id: string, data: { name?: string; leaderId?: string }): Promise<void> {
    const updateNodeRecursive = (nodes: GroupHierarchyNode[]): boolean => {
      for (const node of nodes) {
        if (node.id === id) {
          if (data.name) node.name = data.name;
          if (data.leaderId) node.leaderName = "Updated Leader";
          return true;
        }
        if (node.children && updateNodeRecursive(node.children)) {
          return true;
        }
      }
      return false;
    };

    updateNodeRecursive(this.orgChart);
  }

  async deleteSubGroup(id: string): Promise<void> {
    const deleteNodeRecursive = (nodes: GroupHierarchyNode[]): boolean => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) {
          nodes.splice(i, 1);
          return true;
        }
        if (nodes[i].children && deleteNodeRecursive(nodes[i].children)) {
          return true;
        }
      }
      return false;
    };

    deleteNodeRecursive(this.orgChart);
  }
}
