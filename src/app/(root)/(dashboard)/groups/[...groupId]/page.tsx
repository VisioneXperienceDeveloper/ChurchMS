"use client";

import { use } from "react";
import { GroupStats } from "@client/features/group/ui/group-stats";
import { GroupList, SubGroupData } from "@client/features/group/ui/group-list";

// Mock data
const mockSubGroups: SubGroupData[] = [
  {
    id: "cell-1",
    name: "Cell 1",
    leader: {
      name: "Leader 1",
      email: "leader1@email.com",
      avatarFallback: "L",
    },
    contact: { phone: "0000-000-000" },
    membersCount: 12,
    status: "Active",
  },
  {
    id: "cell-2",
    name: "Cell 2",
    leader: {
      name: "Leader 2",
      email: "leader2@email.com",
      avatarFallback: "L",
    },
    contact: { phone: "0000-000-000" },
    membersCount: 8,
    status: "Active",
  },
  {
    id: "cell-3",
    name: "Cell 3",
    leader: {
      name: "Leader 3",
      email: "leader3@email.com",
      avatarFallback: "L",
    },
    contact: { phone: "0000-000-000" },
    membersCount: 15,
    status: "Busy",
  },
];

interface PageProps {
  params: Promise<{ groupId: string }>;
}

export default function GroupDetailPage({ params }: PageProps) {
  // Unwrap params using React.use()
  const { groupId } = use(params);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6">
        {/* Stats */}
        <GroupStats 
          totalMembers={145}
          newMembers={12}
          avgAttendance={92}
        />

        {/* Group List (Cells) */}
        <GroupList items={mockSubGroups} />
      </div>
    </div>
  );
}
