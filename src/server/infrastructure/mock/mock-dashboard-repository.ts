import { DashboardStats, RecentActivity, IDashboardRepository } from "../../interfaces/dashboard-interfaces";

export class MockDashboardRepository implements IDashboardRepository {
  async getStats(): Promise<DashboardStats> {
    return {
      totalMembers: 150,
      activeGroups: 12,
      newcomersThisMonth: 12,
      attendanceRate: 88,
    };
  }

  async getRecentActivities(limit: number): Promise<RecentActivity[]> {
    const activities: RecentActivity[] = [
      {
        id: "a1",
        type: "JOIN",
        personName: "James Kim",
        description: "joined the church as a member",
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
      },
      {
        id: "a5",
        type: "NEWCOMER",
        personName: "Alex Gonzalez",
        description: "registered as a newcomer",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1 hour ago
      },
      {
        id: "a2",
        type: "JOIN",
        personName: "Sarah Lee",
        description: "completed newcomer process",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      },
      {
        id: "a3",
        type: "ATTENDANCE",
        personName: "Global Vision Church",
        description: "Morning service attendance recorded (124/150)",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      },
      {
        id: "a4",
        type: "GROUP_CHANGE",
        personName: "Emily Chen",
        description: "assigned as leader of Small Group 2",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      },
      {
        id: "a6",
        type: "NEWCOMER",
        personName: "David Park",
        description: "registered as a newcomer",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      },
      {
        id: "a7",
        type: "GROUP_CHANGE",
        personName: "Michael Brown",
        description: "moved to Pioneer Group",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
      },
      {
        id: "a8",
        type: "JOIN",
        personName: "Chloe Taylor",
        description: "joined Young Adults Ministry",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 1 week ago
      }
    ];
    return activities.slice(0, limit);
  }
}
