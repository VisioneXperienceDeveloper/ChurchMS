
"use client";

import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export function Header() {
  const pathname = usePathname();

  // Simple title logic (can be expanded)
  const getTitle = () => {
    if (pathname === "/dashboard") return "Dashboard Overview";
    if (pathname === "/") return "Dashboard Overview"; // Handle root case if redirected
    if (pathname.startsWith("/groups")) return "Groups > Uni Farm"; 
    if (pathname.startsWith("/members")) return "Members";
    if (pathname.startsWith("/events")) return "Events";
    if (pathname.startsWith("/giving")) return "Giving";
    if (pathname.startsWith("/settings")) return "Settings";
    return "Dashboard Overview";
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">{getTitle()}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search members..."
            className="w-full rounded-full bg-muted pl-9 md:w-[300px] lg:w-[300px]"
          />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-red-200" />
      </div>
    </header>
  );
}
