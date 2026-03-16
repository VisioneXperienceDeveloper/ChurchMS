"use server";

import { Role, Prisma } from "@client/shared/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { container } from "@server/shared/di-container";

/**
 * Standard error handler for Server Actions
 */
async function handleAction<T>(action: () => Promise<T>): Promise<T> {
  try {
    return await action();
  } catch (error: unknown) {
    console.error("Action error:", error);
    throw error instanceof Error ? error : new Error("An unexpected error occurred");
  }
}

export async function getMembers(searchQuery?: string) {
  return handleAction(async () => {
    const useCase = container.getGetMembersUseCase();
    return await useCase.execute(searchQuery);
  });
}

export async function getMemberById(id: string) {
  return handleAction(async () => {
    // Note: We can add a simple GetMemberByIdUseCase if needed, but for now repository call is fine if simple
    return await container.memberRepository.findById(id);
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
  return handleAction(async () => {
    const useCase = container.getCreateMemberUseCase();
    const result = await useCase.execute(data);
    revalidatePath('/members');
    return result;
  });
}

export async function updateMember(id: string, data: Prisma.PersonUpdateInput) {
  return handleAction(async () => {
    const useCase = container.getUpdateMemberUseCase();
    const result = await useCase.execute(id, data);
    revalidatePath(`/members/${id}`);
    revalidatePath('/members');
    return result;
  });
}

export async function deleteMember(id: string) {
  return handleAction(async () => {
    const useCase = container.getDeleteMemberUseCase();
    await useCase.execute(id);
    revalidatePath('/members');
  });
}
