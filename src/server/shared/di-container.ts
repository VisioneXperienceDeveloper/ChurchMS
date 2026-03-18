import { prisma } from "@server/infrastructure/prisma";
import { 
  PrismaUserRepository, 
  PrismaPersonRepository, 
  BcryptHasher, 
  JwtAuthService 
} from "@server/infrastructure/auth-infrastructure";
import { PrismaMemberRepository } from "@server/infrastructure/member-repository";
import { PrismaGroupRepository } from "@server/infrastructure/group-repository";
import { PrismaDashboardRepository } from "@server/infrastructure/dashboard-repository";

import { SigninUseCase } from "@server/use-cases/auth/signin-use-case";
import { SignupUseCase } from "@server/use-cases/auth/signup-use-case";
import { GetMeUseCase } from "@server/use-cases/auth/get-me-use-case";
import { GetMembersUseCase } from "@server/use-cases/member/get-members-use-case";
import { CreateMemberUseCase } from "@server/use-cases/member/create-member-use-case";
import { UpdateMemberUseCase } from "@server/use-cases/member/update-member-use-case";
import { DeleteMemberUseCase } from "@server/use-cases/member/delete-member-use-case";

import { GetOrgChartUseCase } from "@server/use-cases/group/get-org-chart-use-case";
import { CreateSubGroupUseCase } from "@server/use-cases/group/create-subgroup-use-case";
import { UpdateSubGroupUseCase } from "@server/use-cases/group/update-subgroup-use-case";
import { DeleteSubGroupUseCase } from "@server/use-cases/group/delete-subgroup-use-case";
import { GetDashboardDataUseCase } from "@server/use-cases/dashboard/get-dashboard-data-use-case";

import { MockUserRepository, MockPersonRepository } from "@server/infrastructure/mock/mock-auth-repository";
import { MockMemberRepository } from "@server/infrastructure/mock/mock-member-repository";
import { MockGroupRepository } from "@server/infrastructure/mock/mock-group-repository";
import { MockDashboardRepository } from "@server/infrastructure/mock/mock-dashboard-repository";

import { IUserRepository, IPersonRepository } from "@server/interfaces/auth-interfaces";
import { IMemberRepository } from "@server/interfaces/member-interfaces";
import { IGroupRepository } from "@server/interfaces/group-interfaces";
import { IDashboardRepository } from "@server/interfaces/dashboard-interfaces";

class DIContainer {
  private static instance: DIContainer;
  
  public userRepository: IUserRepository;
  public personRepository: IPersonRepository;
  public memberRepository: IMemberRepository;
  public groupRepository: IGroupRepository;
  public dashboardRepository: IDashboardRepository;
  public hasher: BcryptHasher;
  public authService: JwtAuthService;

  private constructor() {
    const useMock = process.env.NEXT_PUBLIC_USE_DEMO_DATA === 'true';
    
    if (useMock) {
      console.log("DIContainer: Using MOCK data repositories");
      this.userRepository = new MockUserRepository();
      this.personRepository = new MockPersonRepository();
      this.memberRepository = new MockMemberRepository();
      this.groupRepository = new MockGroupRepository();
      this.dashboardRepository = new MockDashboardRepository();
    } else {
      console.log("DIContainer: Using PRISMA data repositories");
      this.userRepository = new PrismaUserRepository(prisma);
      this.personRepository = new PrismaPersonRepository(prisma);
      this.memberRepository = new PrismaMemberRepository(prisma);
      this.groupRepository = new PrismaGroupRepository();
      this.dashboardRepository = new PrismaDashboardRepository();
    }
    
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

  public getGetOrgChartUseCase() {
    return new GetOrgChartUseCase(this.groupRepository);
  }

  public getCreateSubGroupUseCase() {
    return new CreateSubGroupUseCase(this.groupRepository);
  }

  public getUpdateSubGroupUseCase() {
    return new UpdateSubGroupUseCase(this.groupRepository);
  }

  public getDeleteSubGroupUseCase() {
    return new DeleteSubGroupUseCase(this.groupRepository);
  }

  public getGetDashboardDataUseCase() {
    return new GetDashboardDataUseCase(this.dashboardRepository);
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

  public getGetMeUseCase() {
    return new GetMeUseCase(this.userRepository, this.personRepository);
  }
}

export const container = DIContainer.getInstance();
