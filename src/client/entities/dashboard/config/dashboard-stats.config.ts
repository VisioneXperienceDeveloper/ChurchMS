import { Users, UserPlus, Calendar, CreditCard, LucideIcon } from "lucide-react";
import { type StatType } from "../types/dashboard-stats";

export interface DashboardStatItem {
  key: StatType;
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export const stats: DashboardStatItem[] = [
  {
    key: "members",
    title: "Total Members",
    value: "245",
    change: "+20.1% from last month",
    icon: Users,
  },
  {
    key: "newcomers",
    title: "New Comers",
    value: "25",
    change: "+15% from last month",
    icon: UserPlus,
  },
  {
    key: "attendance",
    title: "Avg. Attendance",
    value: "210",
    change: "+12% from last month",
    icon: Calendar,
  },
  {
    key: "offering",
    title: "Total Offering",
    value: "$5,240",
    change: "+7% from last month",
    icon: CreditCard,
  },
];
