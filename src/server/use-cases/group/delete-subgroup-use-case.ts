import { IGroupRepository } from "../../interfaces/group-interfaces";

export class DeleteSubGroupUseCase {
  constructor(private groupRepository: IGroupRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("Group ID is required");
    }
    await this.groupRepository.deleteSubGroup(id);
  }
}
