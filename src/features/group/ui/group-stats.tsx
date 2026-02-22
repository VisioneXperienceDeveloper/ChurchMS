"use client";

import { Users, UserPlus, Calendar, MoveUpRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { cn } from "@/shared/lib/utils";

interface GroupStatsProps {
  totalMembers: number;
  newMembers: number;
  avgAttendance: number;
  attendanceTrend?: "up" | "down" | "neutral";
}

export function GroupStats({ 
  totalMembers = 0, 
  newMembers = 0, 
  avgAttendance = 0,
  attendanceTrend = "up"
}: GroupStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Total Members */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Members
          </CardTitle>
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
             <Users className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalMembers}</div>
          <p className="text-xs text-muted-foreground mt-1">
            + {newMembers} new this month
          </p>
        </CardContent>
      </Card>

      {/* New Members */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            New Members
          </CardTitle>
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
             <UserPlus className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{newMembers}</div>
          <p className="text-xs text-muted-foreground mt-1">
            + {newMembers} new this week
          </p>
        </CardContent>
      </Card>

      {/* Avg. Attendance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Avg. Attendance
          </CardTitle>
          <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
             <ArrowUpRight className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgAttendance}%</div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <span>Last 30 days</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
