import { IUserRepository, IPersonRepository } from "../../interfaces/auth-interfaces";
import { UserDTO } from "@shared/types/auth";
import { Role } from "@shared/types/enums";

export class GetMeUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly personRepository: IPersonRepository
  ) {}

  async execute(userId: string): Promise<UserDTO> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const person = await this.personRepository.findByUserId(userId);

    return {
      id: user.id,
      email: user.email,
      role: Role.MEMBER, // Defaulting for now
      person: person ? {
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName,
        fullName: `${person.firstName} ${person.lastName}`,
        gender: person.gender,
        phone: person.phone,
        profileImgUrl: person.profileImgUrl,
      } : null,
    };
  }
}
