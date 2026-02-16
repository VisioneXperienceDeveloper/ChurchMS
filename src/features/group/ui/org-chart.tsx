"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";

// Types for the Org Chart
export interface GroupNode {
  id: string;
  name: string;
  type: "Church" | "Farm" | "Cell";
  leader?: {
    name: string;
    role?: string;
    avatarFallback: string;
  };
  stats?: {
    groups?: number;
    members: number;
  };
  children?: GroupNode[];
}

interface OrgChartProps {
  data: GroupNode;
}

export function OrgChart({ data }: OrgChartProps) {
  return (
    <div className="w-full overflow-x-auto p-8">
      <div className="min-w-[800px] flex flex-col items-center">
        {/* Root Node */}
        <OrgNode node={data} isRoot />

        {/* Children (if any) */}
        {data.children && data.children.length > 0 && (
          <>
            {/* Vertical connector from root */}
            <div className="h-8 w-px bg-gray-300"></div>

            <div className="flex relative items-start gap-8">
               {/* Horizontal connector bar logic needs to be handled carefully */}
               {/* For simple trees, we can just map children */}
              {data.children.map((child, index) => (
                <div key={child.id} className="flex flex-col items-center">
                   {/* Top connector logic for children */}
                   {/* This part simplifies visual lines; comprehensive tree libraries handle this better but for this UI we do custom CSS */}
                   <div className="relative w-full h-8 flex justify-center">
                        {/* Vertical line top */}
                        <div className="h-full w-px bg-gray-300 absolute top-0"></div>
                        
                        {/* Horizontal line: only if not single child, need to connect to siblings */}
                        {data.children!.length > 1 && (
                            <div className={cn(
                                "absolute top-0 h-px bg-gray-300",
                                index === 0 ? "w-1/2 right-0" : 
                                index === data.children!.length - 1 ? "w-1/2 left-0" : "w-full"
                            )}></div>
                        )}
                   </div>

                  <OrgNode node={child} />
                  
                  {/* Grandchildren */}
                   {child.children && child.children.length > 0 && (
                        <>
                            <div className="h-8 w-px bg-gray-300"></div>
                            <div className="flex gap-4 pt-4 relative">
                                {/* Connector for grandchildren */}
                                 {child.children.length > 1 && (
                                     <div className="absolute top-0 left-1/2 -ml-[calc(50%-1rem)] w-[calc(100%-2rem)] h-px bg-gray-300 -translate-x-[calc((100%-2rem)/2)]"></div>
                                 )}
                                 
                                {child.children.map((grandChild, gIndex) => (
                                     <div key={grandChild.id} className="relative flex flex-col items-center">
                                         {/* Simple top connector */}
                                         {child.children!.length > 1 && (
                                             <div className={cn(
                                                "absolute -top-4 w-full h-px bg-gray-300",
                                                 // Visual adjustment for horizontal lines
                                             )}></div>
                                          )}
                                         <div className="h-4 w-px bg-gray-300 -mt-4 mb-2 md:hidden"></div> {/* Mobile fallback */}
                                         
                                         {/* Proper line drawing is complex with pure CSS flex/grid, simplified for now: */}
                                         <div className="relative w-full flex justify-center h-4 -mt-4">
                                            <div className="h-full w-px bg-gray-300"></div>
                                            {child.children!.length > 1 && (
                                                 <div className={cn(
                                                     "absolute top-0 h-px bg-gray-300",
                                                     gIndex === 0 ? "w-1/2 right-0" : 
                                                     gIndex === child.children!.length - 1 ? "w-1/2 left-0" : "w-full"
                                                 )}></div> 
                                            )}
                                         </div>

                                        <OrgNode node={grandChild} />
                                     </div>
                                ))}
                            </div>
                        </>
                   )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function OrgNode({ node, isRoot = false }: { node: GroupNode; isRoot?: boolean }) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Church": return "bg-blue-500 hover:bg-blue-600";
      case "Farm": return "bg-purple-500 hover:bg-purple-600";
      case "Cell": return "bg-orange-500 hover:bg-orange-600";
      default: return "bg-gray-500 hover:bg-gray-600";
    }
  };
  
  const getBorderColor = (type: string) => {
     switch (type) {
      case "Church": return "border-blue-200 bg-blue-50/50";
      case "Farm": return "border-purple-200 bg-purple-50/50";
      case "Cell": return "border-orange-200 bg-orange-50/50";
      default: return "border-gray-200";
    }
  };

  return (
    <div className="relative flex flex-col items-center group">
      <Badge className={cn("absolute -top-3 z-10 px-3 py-0.5", getBadgeColor(node.type))}>
        {node.type}
      </Badge>
      
      <Card className={cn("w-64 border-2 transition-shadow hover:shadow-md cursor-pointer", getBorderColor(node.type))}>
        <CardContent className="p-4 flex flex-col gap-3">
          <div>
            <h3 className="font-bold text-lg leading-tight">{node.name}</h3>
          </div>
          
          {node.leader && (
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs bg-muted text-muted-foreground">{node.leader.avatarFallback}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-xs">
                <span className="font-medium text-foreground">{node.leader.name}</span>
                <span className="text-muted-foreground">{node.leader.role || "Leader"}</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/10">
            {node.stats?.groups !== undefined && (
                 <span>{node.stats.groups} Groups</span>
            )}
            <span>{node.stats?.members || 0} Members</span>
          </div>
        </CardContent>
      </Card>
      
       {/* Action buttons could go here */}
       <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity">
           {/* Add child button or view details */}
           <a href={`/groups/${node.id}`} className="text-xs text-primary font-medium hover:underline bg-white px-2 py-1 rounded shadow-sm border">View Details</a>
       </div>
    </div>
  );
}
