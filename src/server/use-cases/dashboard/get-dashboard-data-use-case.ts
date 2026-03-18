import { IDashboardRepository, DashboardData } from "@server/interfaces/dashboard-interfaces";

export class GetDashboardDataUseCase {
  constructor(private dashboardRepository: IDashboardRepository) {}

  async execute(): Promise<DashboardData> {
    const [stats, recentActivities] = await Promise.all([
      this.dashboardRepository.getStats(),
      this.dashboardRepository.getRecentActivities(10)
    ]);

    return { stats, recentActivities };
  }
}
