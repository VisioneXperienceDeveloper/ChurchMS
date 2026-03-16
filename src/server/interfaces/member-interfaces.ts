import { Person, Role, Prisma } from "@client/shared/generated/prisma/client";

export interface IMemberRepository {
  findAll(searchQuery?: string): Promise<Person[]>;
  findById(id: string): Promise<Person | null>;
  create(data: Prisma.PersonCreateInput): Promise<Person>;
  update(id: string, data: Prisma.PersonUpdateInput): Promise<Person>;
  delete(id: string): Promise<void>;
}
