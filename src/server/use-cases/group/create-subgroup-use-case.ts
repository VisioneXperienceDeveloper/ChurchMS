import { IGroupRepository } from "../../interfaces/group-interfaces";

export interface CreateSubGroupInput {
  name: string;
  parentId?: string;
  groupId: string;
  leaderId?: string;
}

export class CreateSubGroupUseCase {
  constructor(private groupRepository: IGroupRepository) {}

  async execute(input: CreateSubGroupInput): Promise<void> {
    if (!input.name) {
      throw new Error("Group name is required");
    }
    await this.groupRepository.createSubGroup(input);
  }
}
