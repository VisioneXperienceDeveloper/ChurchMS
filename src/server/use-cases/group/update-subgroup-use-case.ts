import { IGroupRepository } from "../../interfaces/group-interfaces";

export interface UpdateSubGroupInput {
  id: string;
  name?: string;
  leaderId?: string;
}

export class UpdateSubGroupUseCase {
  constructor(private groupRepository: IGroupRepository) {}

  async execute(input: UpdateSubGroupInput): Promise<void> {
    if (!input.id) {
      throw new Error("Group ID is required");
    }
    await this.groupRepository.updateSubGroup(input.id, input);
  }
}
