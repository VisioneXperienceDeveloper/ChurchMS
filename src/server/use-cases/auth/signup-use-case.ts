import { User, Person } from "@client/shared/generated/prisma/client";

import { SignupRequest } from "@client/entities/user/model/types";
import { IUserRepository, IPersonRepository, IHasher } from "@server/interfaces/auth-interfaces";
import { prisma } from "@server/infrastructure/prisma";

export class SignupUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly personRepository: IPersonRepository,
    private readonly hasher: IHasher
  ) {}

  async execute(data: SignupRequest): Promise<{ user: User; person: Person }> {
    const { email, password, personData } = data;

    // Check if user exists
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await this.hasher.hash(password);

    // Use transaction for consistency
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email,
          hash: hashedPassword,
        },
      });

      const person = await tx.person.create({
        data: {
          firstName: personData.firstName,
          lastName: personData.lastName,
          gender: personData.gender,
          phone: personData.phone,
          kakaoAccount: personData.kakaoAccount,
          bod: personData.bod ? new Date(personData.bod) : null,
          address: personData.address,
          occupation: personData.occupation,
          visaType: personData.visaType,
          groupId: personData.groupId ?? "",
          note: personData.note ?? undefined,
          profileImgUrl: personData.profileImgUrl ?? undefined,
          userId: user.id,
        },
      });

      return { user, person };
    });
  }
}
