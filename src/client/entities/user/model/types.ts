import { User, Person, VisaType, Role } from "@/server/shared/generated/prisma/client";

export type { User, Person, VisaType, Role };

export interface UserDTO extends Omit<User, "hash"> {
  person?: Person | null;
}

export interface SignupRequest {
  email: string;
  password: string;
  personData: {
    firstName: string;
    lastName: string;
    gender: boolean;
    phone: string;
    kakaoAccount?: string | null;
    bod?: string | null;
    address?: string | null;
    occupation?: string | null;
    visaType: VisaType;
    groupId?: string | null;
    note?: string | null;
    profileImgUrl?: string | null;
  };
}

export interface AuthPayload {
  userId: string;
  email: string;
  role: Role;
}

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: UserDTO;
}
