
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils";
import {
  LayoutDashboard,
  Users,
  User,
  Calendar,
  HeartHandshake,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/shared/ui/button";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/groups", label: "Groups", icon: Users },
  { href: "/members", label: "Member", icon: User },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/giving", label: "Giving", icon: HeartHandshake },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar({ isCollapsed, toggleCollapse }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
            <div className="flex items-center gap-2 font-bold text-xl truncate">
                <div className="h-8 w-8 rounded-full bg-red-200 shrink-0" />
                <div className="flex flex-col">
                    <span className="text-sm">City Juan Church</span>
                    <span className="text-xs font-normal text-muted-foreground">Admin Portal</span>
                </div>
            </div>
        )}
        {isCollapsed && (
             <div className="mx-auto h-8 w-8 rounded-full bg-red-200 shrink-0" />
        )}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-20 z-10 h-8 w-8 rounded-full border bg-background shadow-md"
        onClick={toggleCollapse}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>

      <nav className="flex-1 space-y-2 p-2 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                isCollapsed ? "justify-center" : ""
              )}
            >
              <div className={cn("flex items-center justify-center", isCollapsed ? "" : "bg-red-200/50 p-1 rounded-md")}>
                 <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "")} />
              </div>
              
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-2">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-muted-foreground hover:bg-red-50 hover:text-red-600",
            isCollapsed ? "justify-center px-2" : "px-3"
          )}
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span>Sign Out</span>}
        </Button>
      </div>
    </aside>
  );
}
