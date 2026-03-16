import { IMemberRepository } from "../../interfaces/member-interfaces";

export class DeleteMemberUseCase {
  constructor(private readonly memberRepository: IMemberRepository) {}

  async execute(id: string): Promise<void> {
    await this.memberRepository.delete(id);
  }
}
