import { PrismaClient, Person, Prisma } from "@client/shared/generated/prisma/client";
import { IMemberRepository } from "../interfaces/member-interfaces";

export class PrismaMemberRepository implements IMemberRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(searchQuery?: string): Promise<Person[]> {
    return this.prisma.person.findMany({
      where: {
        deletedAt: null,
        ...(searchQuery ? {
          OR: [
            { firstName: { contains: searchQuery, mode: "insensitive" } },
            { lastName: { contains: searchQuery, mode: "insensitive" } },
          ]
        } : {})
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        group: true,
      }
    }) as unknown as Person[];
  }

  async findById(id: string): Promise<Person | null> {
    return this.prisma.person.findUnique({
      where: { id, deletedAt: null },
      include: {
        group: true,
        member: true,
      }
    }) as unknown as Person | null;
  }

  async create(data: Prisma.PersonCreateInput): Promise<Person> {
    return this.prisma.person.create({
      data
    }) as unknown as Person;
  }

  async update(id: string, data: Prisma.PersonUpdateInput): Promise<Person> {
    return this.prisma.person.update({
      where: { id },
      data
    }) as unknown as Person;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.person.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }
}
