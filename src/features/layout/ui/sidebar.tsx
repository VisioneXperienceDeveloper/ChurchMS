"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { navItems } from "@/features/layout/config";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { SimpleTooltip } from "@/shared/ui/simple-tooltip";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export function Sidebar({ isCollapsed, toggleCollapse }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative flex flex-col min-h-screen border-r bg-background transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
            <div className="flex items-center gap-2 font-bold text-xl truncate">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm">City Juan Church</span>
                    <span className="text-xs font-normal text-muted-foreground">Admin Portal</span>
                </div>
            </div>
        )}
        {isCollapsed && (
          <div className="mx-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <div className="h-4 w-4 rounded-full bg-primary" />
          </div>
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
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          
          const linkContent = (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                isCollapsed ? "justify-center" : ""
              )}
            >
              <div className="flex items-center justify-center">
                <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "")} />
              </div>
              
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );

          if (isCollapsed) {
            return (
              <SimpleTooltip key={item.href} content={item.label} side="right">
                {linkContent}
              </SimpleTooltip>
            );
          }

          return linkContent;
        })}
      </nav>

      <div className="border-t p-2">
        {isCollapsed ? (
          <SimpleTooltip content="Sign Out" side="right">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                isCollapsed ? "justify-center px-2" : "px-3"
              )}
            >
              <LogOut className="h-5 w-5" />
              {!isCollapsed && <span>Sign Out</span>}
            </Button>
          </SimpleTooltip>
        ) : (
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                isCollapsed ? "justify-center px-2" : "px-3"
              )}
            >
              <LogOut className="h-5 w-5" />
              {!isCollapsed && <span>Sign Out</span>}
            </Button>
        )}
      </div>
    </aside>
  );
}
