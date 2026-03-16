import { prisma } from "@server/infrastructure/prisma";
import { 
  PrismaUserRepository, 
  PrismaPersonRepository, 
  BcryptHasher, 
  JwtAuthService 
} from "@server/infrastructure/auth-infrastructure";
import { PrismaMemberRepository } from "@server/infrastructure/member-repository";
import { SigninUseCase } from "@server/use-cases/auth/signin-use-case";
import { SignupUseCase } from "@server/use-cases/auth/signup-use-case";
import { GetMembersUseCase } from "@server/use-cases/member/get-members-use-case";
import { CreateMemberUseCase } from "@server/use-cases/member/create-member-use-case";
import { UpdateMemberUseCase } from "@server/use-cases/member/update-member-use-case";
import { DeleteMemberUseCase } from "@server/use-cases/member/delete-member-use-case";

class DIContainer {
  private static instance: DIContainer;
  
  public userRepository: PrismaUserRepository;
  public personRepository: PrismaPersonRepository;
  public memberRepository: PrismaMemberRepository;
  public hasher: BcryptHasher;
  public authService: JwtAuthService;

  private constructor() {
    this.userRepository = new PrismaUserRepository(prisma);
    this.personRepository = new PrismaPersonRepository(prisma);
    this.memberRepository = new PrismaMemberRepository(prisma);
    this.hasher = new BcryptHasher();
    this.authService = new JwtAuthService();
  }

  public getGetMembersUseCase() {
    return new GetMembersUseCase(this.memberRepository);
  }

  public getCreateMemberUseCase() {
    return new CreateMemberUseCase(this.memberRepository);
  }

  public getUpdateMemberUseCase() {
    return new UpdateMemberUseCase(this.memberRepository);
  }

  public getDeleteMemberUseCase() {
    return new DeleteMemberUseCase(this.memberRepository);
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
