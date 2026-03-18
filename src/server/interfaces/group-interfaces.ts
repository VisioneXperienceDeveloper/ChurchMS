export interface GroupHierarchyNode {
  id: string;
  name: string;
  type: 'CHURCH' | 'GROUP_TYPE' | 'GROUP' | 'SUBGROUP';
  leaderName?: string;
  leaderAvatar?: string;
  memberCount: number;
  children: GroupHierarchyNode[];
}

export interface IGroupRepository {
  getOrgChartData(): Promise<GroupHierarchyNode[]>;
  getGroupsWithHierarchy(): Promise<unknown[]>;
  createSubGroup(data: { name: string; parentId?: string; groupId: string; leaderId?: string }): Promise<void>;
  updateSubGroup(id: string, data: { name?: string; leaderId?: string }): Promise<void>;
  deleteSubGroup(id: string): Promise<void>;
}
