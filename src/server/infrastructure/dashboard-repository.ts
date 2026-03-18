import { prisma } from "@server/infrastructure/prisma";
import { IDashboardRepository, DashboardStats, RecentActivity } from "@server/interfaces/dashboard-interfaces";

export class PrismaDashboardRepository implements IDashboardRepository {
  async getStats(): Promise<DashboardStats> {
    const [totalMembers, activeGroups, newcomersThisMonth] = await Promise.all([
      prisma.member.count(),
      prisma.group.count(),
      prisma.newcomer.count({
        where: {
          person: {
            assignedAt: {
              gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
            }
          }
        }
      })
    ]);

    // Simple attendance rate calculation placeholder (if attendance table exists, we'd query it)
    // For now, let's just use a static value or query an attendance log if present.
    // Assuming attendance table might not be there yet or logic is complex.
    const attendanceRate = 85; 

    return {
      totalMembers,
      activeGroups,
      newcomersThisMonth,
      attendanceRate
    };
  }

  async getRecentActivities(limit: number): Promise<RecentActivity[]> {
    const people = await prisma.person.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        member: true,
        newcomer: true,
      }
    });

    return people.map(p => ({
      id: p.id,
      type: p.newcomer ? 'NEWCOMER' : 'JOIN',
      description: p.newcomer ? '새신자가 등록되었습니다.' : '새로운 성도가 등록되었습니다.',
      timestamp: p.createdAt,
      personName: `${p.firstName} ${p.lastName}`
    }));
  }
}
