import { Role, VisaType } from "./enums";

export interface PersonDTO {
  id: string;
  firstName: string;
  lastName: string;
  gender: boolean;
  phone: string;
  kakaoAccount: string | null;
  bod: string | Date | null;
  address: string | null;
  profileImgUrl: string | null;
  occupation: string | null;
  visaType: VisaType | null;
  assignedAt: string | Date;
  role: Role;
  hasBaptized: boolean;
  note: string | null;
  userId: string | null;
  groupId: string;
  createdAt: string | Date;
  deletedAt: string | Date | null;
}

export interface CreateMemberRequest {
  firstName: string;
  lastName: string;
  phone: string;
  gender: boolean;
  role: Role;
  groupId: string;
}

export interface UpdateMemberRequest extends Partial<CreateMemberRequest> {
  kakaoAccount?: string | null;
  bod?: string | Date | null;
  address?: string | null;
  profileImgUrl?: string | null;
  occupation?: string | null;
  visaType?: VisaType | null;
  hasBaptized?: boolean;
  note?: string | null;
}
