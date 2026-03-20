import { NextRequest } from "next/server";
import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";
import { SignupRequestDTO } from "@shared/types/auth";

export async function POST(request: NextRequest) {
  try {
    const body: SignupRequestDTO = await request.json();
    const useCase = container.getSignupUseCase();
    const result = await useCase.execute(body);
    return AppResponse.success(result, 201);
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "Signup failed", 400);
  }
}
