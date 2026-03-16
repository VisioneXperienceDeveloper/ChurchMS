"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@client/shared/ui/table";
import { Badge } from "@client/shared/ui/badge";
import { Button } from "@client/shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@client/shared/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@client/shared/ui/card";

// Mock data type
export interface SubGroupData {
  id: string;
  name: string;
  leader: {
    name: string;
    email: string;
    avatarFallback: string;
  };
  contact: {
    phone: string;
  };
  membersCount: number;
  status: "Active" | "Busy" | "Inactive";
}

interface GroupListProps {
  title?: string;
  items: SubGroupData[];
  onAddClick?: () => void;
}

export function GroupList({ title = "Registered Cells", items, onAddClick }: GroupListProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <Button onClick={onAddClick} className="bg-blue-600 hover:bg-blue-700 text-white">
          + Add Cell
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CELL NAME</TableHead>
              <TableHead>LEADER</TableHead>
              <TableHead>CONTACT INFO</TableHead>
              <TableHead>MEMBERS</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead className="text-right">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                        {item.leader.avatarFallback}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{item.leader.name}</span>
                      <span className="text-xs text-muted-foreground">{item.leader.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    {item.contact.phone}
                  </div>
                </TableCell>
                <TableCell>{item.membersCount}</TableCell>
                <TableCell>
                  <Badge 
                    variant={item.status === "Active" ? "default" : "secondary"}
                    className={
                      item.status === "Active" 
                        ? "bg-green-100 text-green-700 hover:bg-green-200" 
                        : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    <Link href={`/groups/1/cells/${item.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
