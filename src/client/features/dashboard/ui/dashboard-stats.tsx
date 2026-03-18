"use client";

import { useEffect, useState } from "react";
import { 
  Bar, 
  BarChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip,
  CartesianGrid 
} from "recharts";

import { data, type StatType } from "@client/entities/dashboard/types";
import { stats as defaultStatsConfig } from "@client/entities/dashboard/config";
import { Card, CardContent, CardHeader, CardTitle } from "@client/shared/ui/card";
import { cn } from "@client/shared/lib/utils";
import { DashboardStats as StatsData, DashboardData } from "@shared/types/dashboard";
import { apiClient } from "@client/shared/api-client";
import { Loader2 } from "lucide-react";

interface DashboardStatsProps {
  children?: React.ReactNode;
}

export function DashboardStats({ children }: DashboardStatsProps) {
  const [activeStat, setActiveStat] = useState<StatType>("members");
  const [realStats, setRealStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await apiClient.get<DashboardData>('/api/v1/dashboard');
      if (response.success && response.data) {
        setRealStats(response.data.stats);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const getStatValue = (key: string) => {
    if (!realStats) return "...";
    switch (key) {
      case "members": return realStats.totalMembers;
      case "offerings": return "$12,450"; // Mock for now until offering logic implemented
      case "attendance": return `${realStats.attendanceRate}%`;
      case "active-groups": return realStats.activeGroups;
      default: return 0;
    }
  };

  const dashboardStatsConfig = defaultStatsConfig.map(s => ({
    ...s,
    value: getStatValue(s.key)
  }));

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 shrink-0">
        {dashboardStatsConfig.map((stat) => (
          <Card 
            key={stat.key} 
            className={cn(
              "cursor-pointer transition-all hover:shadow-md", 
              activeStat === stat.key ? "ring-2 ring-primary" : ""
            )}
            onClick={() => setActiveStat(stat.key as StatType)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? <Loader2 className="h-5 w-5 animate-spin p-0" /> : stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 flex-1 min-h-0">
        <Card className="col-span-2 lg:col-span-3 flex flex-col h-full">
          <CardHeader className="shrink-0">
            <CardTitle>Overview: {activeStat.toUpperCase()}</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data[activeStat as StatType]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-4 h-full min-h-0 overflow-hidden pr-2">
            {children}
        </div>
      </div>
    </div>
  );
}
