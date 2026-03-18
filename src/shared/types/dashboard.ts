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
  timestamp: string | Date;
  personName: string;
}

export interface DashboardData {
  stats: DashboardStats;
  recentActivities: RecentActivity[];
}
