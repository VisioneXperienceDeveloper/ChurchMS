import { Person, Prisma } from "@/server/shared/generated/prisma/client";
import { IMemberRepository } from "../../interfaces/member-interfaces";

export class UpdateMemberUseCase {
  constructor(private readonly memberRepository: IMemberRepository) {}

  async execute(id: string, data: Prisma.PersonUpdateInput): Promise<Person> {
    return this.memberRepository.update(id, data);
  }
}
