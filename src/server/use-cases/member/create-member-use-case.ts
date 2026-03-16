import { Person, Role, PersonType } from "@client/shared/generated/prisma/client";
import { IMemberRepository } from "../../interfaces/member-interfaces";
import { prisma as prismaClient } from "../../infrastructure/prisma";

export class CreateMemberUseCase {
  constructor(private readonly memberRepository: IMemberRepository) {}

  async execute(data: {
    firstName: string;
    lastName: string;
    phone: string;
    gender: boolean;
    role: Role;
    groupId: string;
  }): Promise<Person> {
    const { role, ...personData } = data;

    // We use a transaction to ensure both person and member are created or none
    return await prismaClient.$transaction(async (tx) => {
      const newPerson = await tx.person.create({
        data: {
          ...personData,
          role,
        }
      });

      if (role === 'MEMBER') {
        await tx.member.create({
          data: {
            id: newPerson.id,
            type: PersonType.D,
          }
        });
      }

      return newPerson;
    }) as unknown as Person;
  }
}
