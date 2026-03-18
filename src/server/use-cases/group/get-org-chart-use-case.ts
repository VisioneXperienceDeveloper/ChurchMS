import { IGroupRepository, GroupHierarchyNode } from "@server/interfaces/group-interfaces";

export class GetOrgChartUseCase {
  constructor(private groupRepository: IGroupRepository) {}

  async execute(): Promise<GroupHierarchyNode[]> {
    return this.groupRepository.getOrgChartData();
  }
}
