import { Person } from "@client/shared/generated/prisma/client";
import { IMemberRepository } from "../../interfaces/member-interfaces";

export class GetMembersUseCase {
  constructor(private readonly memberRepository: IMemberRepository) {}

  async execute(searchQuery?: string): Promise<Person[]> {
    return this.memberRepository.findAll(searchQuery);
  }
}
