import { NextRequest } from "next/server";
import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";
import { CreateGroupRequest } from "@shared/types/group";

export async function GET() {
  try {
    const useCase = container.getGetOrgChartUseCase();
    const result = await useCase.execute();
    return AppResponse.success(result);
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "An error occurred");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateGroupRequest = await request.json();
    const useCase = container.getCreateSubGroupUseCase();
    await useCase.execute(body);
    return AppResponse.success({ status: "success" });
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "An error occurred");
  }
}
