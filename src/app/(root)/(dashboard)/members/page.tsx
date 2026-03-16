"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Plus, UserCircle } from "lucide-react";

import { getMembers } from "@client/features/member/actions/member.actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@client/shared/ui";

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: members, isLoading, error } = useQuery({
    queryKey: ['members', searchQuery],
    queryFn: () => getMembers(searchQuery),
  });

  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Members</h1>
        <Button asChild>
          <Link href="/members/new" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Member
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Directory</CardTitle>
          <div className="flex items-center pt-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>이름</TableHead>
                  <TableHead>직분</TableHead>
                  <TableHead>연락처</TableHead>
                  <TableHead>성별</TableHead>
                  <TableHead className="text-right">등록일</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      Loading members...
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-red-500">
                      Error loading members.
                    </TableCell>
                  </TableRow>
                ) : members?.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                      No members found.
                    </TableCell>
                  </TableRow>
                ) : (
                  members?.map((member) => (
                    <TableRow key={member.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">
                        <Link href={`/members/${member.id}`} className="flex items-center gap-2">
                          <UserCircle className="h-5 w-5 text-gray-400" />
                          {member.firstName} {member.lastName}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{member.role}</Badge>
                      </TableCell>
                      <TableCell>{member.phone}</TableCell>
                      <TableCell>{member.gender ? "Male" : "Female"}</TableCell>
                      <TableCell className="text-right">
                        {new Date(member.createdAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}