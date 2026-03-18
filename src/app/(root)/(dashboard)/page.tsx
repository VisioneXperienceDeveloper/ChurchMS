"use client";

import { useEffect, useState } from "react";
import { DashboardStats } from "@client/features/dashboard/ui/dashboard-stats";
import { QuickActions } from "@client/features/dashboard/ui/quick-actions";
import { RecentActivity } from "@client/features/dashboard/ui/recent-activity";
import { apiClient } from "@client/shared/api-client";
import { RecentActivity as ActivityType, DashboardData } from "@shared/types/dashboard";

export default function DashboardPage() {
  const [activities, setActivities] = useState<ActivityType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await apiClient.get<DashboardData>('/api/v1/dashboard');
      if (response.success && response.data) {
        setActivities(response.data.recentActivities || []);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 h-full flex flex-col">
        <DashboardStats>
          <QuickActions />
          <RecentActivity activities={activities} />
        </DashboardStats>
      </div>
    </div>
  );
}
