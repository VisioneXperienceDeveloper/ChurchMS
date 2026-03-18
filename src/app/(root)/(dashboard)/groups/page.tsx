"use client";

import { OrgChart } from "@client/features/group/ui/org-chart";
import { Button } from "@client/shared/ui/button";
import { Download, Plus } from "lucide-react";

export default function GroupsPage() {
  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Organisational Structure</h2>
          <p className="text-muted-foreground">
            Manage churches, groups, and small subgroup hierarchies.
          </p>
        </div>
        <div className="flex items-center gap-2">
            <Button onClick={() => {}} variant="outline" size="sm" className="h-9 gap-2">
                <Download className="h-4 w-4" />
                Export Chart
            </Button>
            <Button onClick={() => {}} size="sm" className="h-9 gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Add Group
            </Button>
        </div>
      </div>
      
      <div className="border rounded-lg bg-background bg-dots-pattern overflow-hidden">
        <OrgChart />
      </div>
    </div>
  );
}
