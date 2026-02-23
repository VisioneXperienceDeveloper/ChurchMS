"use client";

import { Search, Bell } from "lucide-react";

import { DashboardTitle } from "@/features/layout";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export function DashboardHeader() {

  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-background px-6">
      <DashboardTitle />

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
