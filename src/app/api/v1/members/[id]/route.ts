import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";
import { UpdateMemberRequest } from "@shared/types/member";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Note: We can add a simple GetMemberByIdUseCase if needed
    const member = await container.memberRepository.findById(id);

    if (!member) {
      return AppResponse.error("Member not found", 404);
    }

    return AppResponse.success(member);
  } catch (error: unknown) {
    console.error("Member detail GET Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return AppResponse.error(message, 500);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body: UpdateMemberRequest = await request.json();
    
    const useCase = container.getUpdateMemberUseCase();
    const result = await useCase.execute(id, body);

    return AppResponse.success(result);
  } catch (error: unknown) {
    console.error("Member detail PATCH Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return AppResponse.error(message, 400);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    const useCase = container.getDeleteMemberUseCase();
    await useCase.execute(id);

    return AppResponse.success({ message: "Member deleted successfully" });
  } catch (error: unknown) {
    console.error("Member detail DELETE Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return AppResponse.error(message, 400);
  }
}
