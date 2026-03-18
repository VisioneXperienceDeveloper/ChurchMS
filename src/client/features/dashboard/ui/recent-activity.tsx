import { Card, CardContent, CardHeader, CardTitle } from "@client/shared/ui/card";
import { Avatar, AvatarFallback } from "@client/shared/ui/avatar";
import { RecentActivity as ActivityType } from "@shared/types/dashboard";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface RecentActivityProps {
  activities?: ActivityType[];
}

export function RecentActivity({ activities = [] }: RecentActivityProps) {
  if (activities.length === 0) {
    return (
      <Card className="flex-1 min-h-0 flex flex-col shadow-sm">
        <CardHeader className="shrink-0">
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 min-h-0 items-center justify-center flex">
          <p className="text-muted-foreground text-sm">No recent activity.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex-1 min-h-0 flex flex-col shadow-sm">
      <CardHeader className="shrink-0">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 overflow-hidden">
        <div className="space-y-8 h-full overflow-y-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{activity.personName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.personName}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>
              <div className="ml-auto font-medium text-xs text-muted-foreground capitalize">
                {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true, locale: ko })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
