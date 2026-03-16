import { NextRequest } from "next/server";
import { container } from "@server/shared/di-container";
import { SignupRequest } from "@client/entities/user/model/types";
import { AppResponse } from "@server/shared/api-response";

export async function POST(req: NextRequest) {
  try {
    const body: SignupRequest = await req.json();
    const { email, password, personData } = body;

    if (!email || !password || !personData) {
      return AppResponse.error("Missing required fields", 400);
    }

    const signupUseCase = container.getSignupUseCase();
    const result = await signupUseCase.execute(body);

    return AppResponse.success(
      { user: { id: result.user.id, email: result.user.email } }, 201, 
      { message: "Signup successful" }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Registration failed";
    return AppResponse.error(message, 400);
  }
}
