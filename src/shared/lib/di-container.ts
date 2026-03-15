import { prisma } from "./prisma";
import { 
  PrismaUserRepository, 
  PrismaPersonRepository, 
  BcryptHasher, 
  JwtAuthService 
} from "./auth-infrastructure";
import { SigninUseCase } from "@/features/auth/model/signin-use-case";
import { SignupUseCase } from "@/features/auth/model/signup-use-case";

class DIContainer {
  private static instance: DIContainer;
  
  public userRepository: PrismaUserRepository;
  public personRepository: PrismaPersonRepository;
  public hasher: BcryptHasher;
  public authService: JwtAuthService;

  private constructor() {
    this.userRepository = new PrismaUserRepository(prisma);
    this.personRepository = new PrismaPersonRepository(prisma);
    this.hasher = new BcryptHasher();
    this.authService = new JwtAuthService();
  }


  public static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  public getSigninUseCase() {
    return new SigninUseCase(this.userRepository, this.hasher, this.authService);
  }

  public getSignupUseCase() {
    return new SignupUseCase(this.userRepository, this.personRepository, this.hasher);
  }
}

export const container = DIContainer.getInstance();
