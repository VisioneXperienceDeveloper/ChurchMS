import jwt from "jsonwebtoken";
import { compare, hash } from "bcryptjs";
import { Person } from "@/shared/generated/prisma/client";
import { 
  IUserRepository, 
  IPersonRepository, 
  IAuthService, 
  IHasher 
} from "./auth-interfaces";
import { PrismaClient } from "@/shared/generated/prisma/client";
import { AuthPayload } from "@/entities/user/model/types";



// Infrastructure Implementations
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}
  
  async findByEmail(email: string) {
    return this.prismaClient.user.findUnique({ where: { email } });
  }
  
  async findById(id: string) {
    return this.prismaClient.user.findUnique({ where: { id } });
  }
  
  async create(data: { email: string; hash: string }) {
    return this.prismaClient.user.create({ data });
  }
}

export class PrismaPersonRepository implements IPersonRepository {
  constructor(private readonly prismaClient: PrismaClient) {}
  
  async findByUserId(userId: string) {
    return this.prismaClient.person.findUnique({ where: { userId } });
  }
  
  async create(data: Partial<Person>) {
    return this.prismaClient.person.create({ data: data as Person });
  }
  
  async update(id: string, data: Partial<Person>) {
    return this.prismaClient.person.update({ where: { id }, data: data as Person });
  }
}


export class BcryptHasher implements IHasher {
  async hash(password: string) {
    return hash(password, 10);
  }
  
  async compare(password: string, hashed: string) {
    return compare(password, hashed);
  }
}

export class JwtAuthService implements IAuthService {
  private readonly secret = process.env.AUTH_SECRET || "default_auth_secret_do_not_use_in_production";

  async signAccessToken(payload: AuthPayload) {
    return jwt.sign(payload, this.secret, { expiresIn: "1h" });
  }

  async signRefreshToken(payload: AuthPayload) {
    return jwt.sign(payload, this.secret, { expiresIn: "7d" });
  }

  async verifyToken(token: string): Promise<AuthPayload> {
    try {
      return jwt.verify(token, this.secret) as AuthPayload;
    } catch {
      throw new Error("Invalid or expired token");
    }
  }

}

