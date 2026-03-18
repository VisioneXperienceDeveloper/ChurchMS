import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";
import { CreateMemberRequest } from "@shared/types/member";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || undefined;
    
    const useCase = container.getGetMembersUseCase();
    const members = await useCase.execute(query);

    return AppResponse.success(members);
  } catch (error: unknown) {
    console.error("Members GET Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return AppResponse.error(message, 500);
  }
}

export async function POST(request: Request) {
  try {
    const body: CreateMemberRequest = await request.json();
    
    const useCase = container.getCreateMemberUseCase();
    const result = await useCase.execute(body);

    return AppResponse.success(result, 201);
  } catch (error: unknown) {
    console.error("Members POST Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return AppResponse.error(message, 400);
  }
}
