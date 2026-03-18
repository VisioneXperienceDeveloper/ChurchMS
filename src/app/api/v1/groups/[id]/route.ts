import { NextRequest } from "next/server";
import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";
import { UpdateGroupRequest } from "@shared/types/group";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body: UpdateGroupRequest = await request.json();
    const useCase = container.getUpdateSubGroupUseCase();
    await useCase.execute({ id, ...body });
    return AppResponse.success({ status: "success" });
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "An error occurred");
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const useCase = container.getDeleteSubGroupUseCase();
    await useCase.execute(id);
    return AppResponse.success({ status: "success" });
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "An error occurred");
  }
}
