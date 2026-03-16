
import { DashboardStats } from "@client/features/dashboard/ui/dashboard-stats";
import { QuickActions } from "@client/features/dashboard/ui/quick-actions";
import { RecentActivity } from "@client/features/dashboard/ui/recent-activity";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 h-full flex flex-col">
        <DashboardStats>
          <QuickActions />
          <RecentActivity />
        </DashboardStats>
      </div>
    </div>
  );
}
