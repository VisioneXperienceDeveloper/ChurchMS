import { Role } from "@shared/types/enums";
import { AuthPayload, LoginResponseData } from "@shared/types/auth";
import { IUserRepository, IAuthService, IHasher } from "../../interfaces/auth-interfaces";

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
    // const refreshToken = await this.authService.signRefreshToken(payload); // Removing refresh token from shared response for simplicity if not used

    return {
      user: {
        id: user.id,
        email: user.email,
        role: Role.MEMBER, // Matching payload
      },
      accessToken,
    };
  }
}
