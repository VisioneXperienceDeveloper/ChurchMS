import { User, Person } from "@/server/shared/generated/prisma/client";
import { AuthPayload } from "@shared/types";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(data: { email: string; hash: string }): Promise<User>;
}

export interface IPersonRepository {
  findByUserId(userId: string): Promise<Person | null>;
  create(data: Partial<Person>): Promise<Person>;
  update(id: string, data: Partial<Person>): Promise<Person>;
}

export interface IAuthService {
  signAccessToken(payload: AuthPayload): Promise<string>;
  signRefreshToken(payload: AuthPayload): Promise<string>;
  verifyToken(token: string): Promise<AuthPayload>;
}

export interface IHasher {
  hash(password: string): Promise<string>;
  compare(password: string, hash: string): Promise<boolean>;
}

export interface AuthResponse<T = unknown> {
  status: boolean;
  statusCode: number;
  data?: T;
  error?: string;
  message?: string;
}
