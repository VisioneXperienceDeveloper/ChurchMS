import { User, Person, Role } from "@/server/shared/generated/prisma/client";
import { IUserRepository, IPersonRepository } from "../../interfaces/auth-interfaces";

export class MockUserRepository implements IUserRepository {
  private users: User[] = [
    { id: "u1", email: "john@doe.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u2", email: "robert@wilson.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u3", email: "james@kim.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u4", email: "sarah@lee.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u5", email: "david@park.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u6", email: "emily@chen.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u7", email: "michael@brown.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u8", email: "anna@schmidt.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u9", email: "alex@gonzalez.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
    { id: "u10", email: "chloe@taylor.com", hash: "hashed", createdAt: new Date(), updatedAt: new Date() },
  ];

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }

  async create(data: { email: string; hash: string }): Promise<User> {
    const newUser: User = {
      id: Math.random().toString(36).substring(7),
      email: data.email,
      hash: data.hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }
}

export class MockPersonRepository implements IPersonRepository {
  private persons: Person[] = [];

  async findByUserId(userId: string): Promise<Person | null> {
    return this.persons.find(p => p.userId === userId) || null;
  }

  async create(data: Partial<Person>): Promise<Person> {
    const newPerson: Person = {
      id: Math.random().toString(36).substring(7),
      userId: data.userId || "mock-user",
      firstName: data.firstName || "Mock",
      lastName: data.lastName || "User",
      phone: data.phone || "000-0000-0000",
      role: data.role || Role.MEMBER,
      gender: data.gender ?? true,
      hasBaptized: data.hasBaptized ?? false,
      bod: data.bod || null,
      assignedAt: new Date(),
      createdAt: new Date(),
      deletedAt: null,
      profileImgUrl: data.profileImgUrl || null,
      kakaoAccount: data.kakaoAccount || null,
      occupation: data.occupation || null,
      visaType: data.visaType || null,
      address: data.address || null,
      note: data.note || null,
      groupId: data.groupId || "mock-group-id",
    };
    this.persons.push(newPerson);
    return newPerson;
  }

  async update(id: string, data: Partial<Person>): Promise<Person> {
    const index = this.persons.findIndex(p => p.id === id);
    if (index === -1) throw new Error("Person not found");
    this.persons[index] = { ...this.persons[index], ...data };
    return this.persons[index];
  }
}
