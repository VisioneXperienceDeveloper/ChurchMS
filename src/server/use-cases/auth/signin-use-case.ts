import { Role } from "@client/shared/generated/prisma/client";

import { AuthPayload, LoginResponseData } from "@client/entities/user/model/types";
import { IUserRepository, IAuthService, IHasher } from "@server/interfaces/auth-interfaces";

export class SigninUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hasher: IHasher,
    private readonly authService: IAuthService
  ) {}

  async execute(email: string, password: string): Promise<LoginResponseData> {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !(await this.hasher.compare(password, user.hash))) {
      throw new Error("Invalid credentials");
    }

    const payload: AuthPayload = { 
      userId: user.id, 
      email: user.email, 
      role: Role.MEMBER // Defaulting for now, adjust if stored on User
    };
    
    const accessToken = await this.authService.signAccessToken(payload);
    const refreshToken = await this.authService.signRefreshToken(payload);

    return {
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      accessToken,
      refreshToken,
    };
  }
}
