"use server";

import { prisma } from "@/shared/lib/prisma";
import { Role, PersonType, Prisma } from "@/shared/generated/prisma";
import { revalidatePath } from "next/cache";

export async function getMembers(searchQuery?: string) {
  const members = await prisma.person.findMany({
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
  });

  return members;
}

export async function getMemberById(id: string) {
  return await prisma.person.findUnique({
    where: { id, deletedAt: null },
    include: {
      group: true,
      member: true,
    }
  });
}

export async function createMember(data: {
  firstName: string;
  lastName: string;
  phone: string;
  gender: boolean;
  role: Role;
  groupId: string;
}) {
  const { role, ...personData } = data;

  const newPerson = await prisma.person.create({
    data: {
      ...personData,
      role,
    }
  });

  if (role === 'MEMBER') {
    await prisma.member.create({
      data: {
        id: newPerson.id,
        type: PersonType.D,
      }
    });
  }

  revalidatePath('/members');
  return newPerson;
}

export async function updateMember(id: string, data: Prisma.PersonUpdateInput) {
  const updated = await prisma.person.update({
    where: { id },
    data,
  });
  revalidatePath(`/members/${id}`);
  revalidatePath('/members');
  return updated;
}

export async function deleteMember(id: string) {
  await prisma.person.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
  revalidatePath('/members');
}
