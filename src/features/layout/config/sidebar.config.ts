import {
  LayoutDashboard,
  Users,
  User,
  Calendar,
  HeartHandshake,
  Settings,
  LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/groups", label: "Groups", icon: Users },
  { href: "/members", label: "Members", icon: User },
  // { href: "/events", label: "Events", icon: Calendar },
  // { href: "/giving", label: "Giving", icon: HeartHandshake },
  { href: "/settings", label: "Settings", icon: Settings },
];
