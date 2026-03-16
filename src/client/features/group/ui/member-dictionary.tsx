"use client";

import Link from "next/link";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@client/shared/ui/table";
import { Badge } from "@client/shared/ui/badge";
import { Button } from "@client/shared/ui/button";
import { Input } from "@client/shared/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@client/shared/ui/card";
import { Search } from "lucide-react";

// Mock data type
export interface MemberData {
  id: string;
  name: string;
  role: string;
  phone: string;
  bod: string;
  address: string;
  status: "Active" | "Busy" | "Lidcombe" | string; // Lidcombe seems to be a location or status in reference
}

interface MemberDictionaryProps {
  title?: string;
  items: MemberData[];
  onAddClick?: () => void;
}

export function MemberDictionary({ title = "Member Dictionary", items, onAddClick }: MemberDictionaryProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle>{title}</CardTitle>
        <Button onClick={onAddClick} className="bg-blue-600 hover:bg-blue-700 text-white">
          + Add Member
        </Button>
      </CardHeader>
      
      <CardContent>
        {/* Search bar could go here if needed, consistent with design */}
        {/* <div className="mb-4">
             <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search members..." className="pl-8" />
             </div>
        </div> */}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NAME</TableHead>
              <TableHead>ROLE</TableHead>
              <TableHead>PHONE</TableHead>
              <TableHead>BOD</TableHead>
              <TableHead className="text-center">ADDRESS</TableHead>
              <TableHead className="text-right">PROFILE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell className="text-muted-foreground">{item.phone}</TableCell>
                <TableCell>{item.bod}</TableCell>
                <TableCell className="text-center">
                   <Badge 
                    variant="outline" 
                    className={
                      item.status === "Active" ? "bg-green-100 text-green-700 hover:bg-green-200 border-none" :
                      item.status === "Busy" ? "bg-orange-100 text-orange-700 hover:bg-orange-200 border-none" :
                      "bg-green-100 text-green-700 hover:bg-green-200 border-none" // Default fallback or logic for 'Lidcombe'
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                     <Link href={`/members/${item.id}`}>View</Link>
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
