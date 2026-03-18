import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";
import { DashboardData } from "@shared/types/dashboard";

export async function GET() {
  try {
    const statsRepository = container.dashboardRepository;
    
    const [stats, recentActivities] = await Promise.all([
      statsRepository.getStats(),
      statsRepository.getRecentActivities(10),
    ]);

    const data: DashboardData = {
      stats: {
        totalMembers: stats.totalMembers,
        activeGroups: stats.activeGroups,
        newcomersThisMonth: stats.newcomersThisMonth,
        attendanceRate: stats.attendanceRate,
      },
      recentActivities: recentActivities.map(activity => ({
        ...activity,
        // Ensure timestamp is ISO string for the client
        timestamp: activity.timestamp instanceof Date ? activity.timestamp.toISOString() : activity.timestamp,
      })),
    };

    return AppResponse.success(data);
  } catch (error: unknown) {
    console.error("Dashboard API Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return AppResponse.error(message, 500);
  }
}
