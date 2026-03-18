export interface DashboardStats {
  totalMembers: number;
  activeGroups: number;
  newcomersThisMonth: number;
  attendanceRate: number;
}

export interface RecentActivity {
  id: string;
  type: 'JOIN' | 'ATTENDANCE' | 'GROUP_CHANGE' | 'NEWCOMER';
  description: string;
  timestamp: Date;
  personName: string;
}

export interface DashboardData {
  stats: DashboardStats;
  recentActivities: RecentActivity[];
}

export interface IDashboardRepository {
  getStats(): Promise<DashboardStats>;
  getRecentActivities(limit: number): Promise<RecentActivity[]>;
}
