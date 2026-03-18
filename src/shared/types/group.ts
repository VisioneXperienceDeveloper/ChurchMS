export interface GroupHierarchyNode {
  id: string;
  name: string;
  type: 'CHURCH' | 'GROUP_TYPE' | 'GROUP' | 'SUBGROUP';
  leaderName?: string;
  leaderAvatar?: string;
  memberCount: number;
  children: GroupHierarchyNode[];
}

export interface CreateGroupRequest {
  name: string;
  parentId?: string;
  groupId: string;
  leaderId?: string;
}

export interface UpdateGroupRequest {
  name?: string;
  leaderId?: string;
}
