"use client";

import { MemberDictionary, MemberData } from "@client/features/group/ui/member-dictionary";

// Mock data
const mockMembers: MemberData[] = [
  {
    id: "1",
    name: "Name 1",
    role: "Cell Leader",
    phone: "0000-000-000",
    bod: "11/11/1111",
    address: "Lidcombe",
    status: "Active",
  },
  {
    id: "2",
    name: "Name 2",
    role: "Leader 2",
    phone: "0000-000-000",
    bod: "11/11/1111",
    address: "Active",
    status: "Active",
  },
  {
    id: "3",
    name: "Name 3",
    role: "Leader 3",
    phone: "0000-000-000",
    bod: "11/11/1111",
    address: "Busy",
    status: "Busy",
  },
  {
    id: "4",
    name: "Name 4",
    role: "Leader 4",
    phone: "0000-000-000",
    bod: "11/11/1111",
    address: "Active",
    status: "Active",
  },
  {
    id: "5",
    name: "Name 5",
    role: "Leader 5",
    phone: "0000-000-000",
    bod: "11/11/1111",
    address: "Active",
    status: "Active",
  },
];

interface PageProps {
  params: Promise<{ groupId: string; cellId: string }>;
}

export default function CellDetailPage({ params }: PageProps) {
  
  return (
    <div className="space-y-6">
      <MemberDictionary items={mockMembers} />
    </div>
  );
}
