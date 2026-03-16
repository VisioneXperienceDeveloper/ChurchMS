"use client";

import { OrgChart, GroupNode } from "@client/features/group/ui/org-chart";
import { Button } from "@client/shared/ui/button";
import { Download, Plus } from "lucide-react";

// Mock data for the org chart
// In a real app, this would be fetched from an API
const orgData: GroupNode = {
  id: "juan-church",
  name: "Juan Church",
  type: "Church",
  leader: {
    name: "Jin",
    role: "Senior Pastor",
    avatarFallback: "J",
  },
  stats: {
    groups: 2,
    members: 200,
  },
  children: [
    {
      id: "general-farm",
      name: "General",
      type: "Farm",
      leader: {
        name: "Kim",
        role: "Leader",
        avatarFallback: "K",
      },
      stats: {
        groups: 8,
        members: 80,
      },
      children: [
        {
          id: "cell-1-general",
          name: "Cell 1",
          type: "Cell",
          leader: {
            name: "Kim",
            role: "Leader",
            avatarFallback: "K",
          },
          stats: {
            members: 12,
          },
        },
        {
          id: "cell-2-general",
          name: "Cell 2",
           type: "Cell",
          leader: {
            name: "Lee",
            role: "Leader",
            avatarFallback: "L",
          },
          stats: {
            members: 10,
          },
        },
      ],
    },
    {
      id: "university-farm",
      name: "University",
      type: "Farm",
      leader: {
        name: "Kang",
        role: "Leader",
        avatarFallback: "K",
      },
      stats: {
        groups: 8,
        members: 120,
      },
      children: [
        {
          id: "cell-1-uni",
          name: "Cell 1",
          type: "Cell",
          leader: {
            name: "Park",
            role: "Leader",
            avatarFallback: "P",
          },
          stats: {
            members: 15,
          },
        },
         {
          id: "cell-2-uni",
          name: "Cell 2",
           type: "Cell",
          leader: {
             name: "Choi",
            role: "Leader",
            avatarFallback: "C",
          },
          stats: {
             members: 18,
          },
        },
      ],
    },
  ],
};

export default function GroupsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Organisational Structure</h2>
          <p className="text-muted-foreground">
            Manage churches, farms, and small cell hierarchies.
          </p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-2">
                <Download className="h-4 w-4" />
                Export Chart
            </Button>
            <Button size="sm" className="h-9 gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Add Group
            </Button>
        </div>
      </div>
      
      <div className="border rounded-lg bg-background min-h-[600px] flex items-center justify-center bg-dots-pattern">
        <OrgChart data={orgData} />
      </div>
    </div>
  );
}
