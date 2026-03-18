import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return AppResponse.error("Missing or invalid Authorization header", 401);
    }

    const base64Credentials = authHeader.split(" ")[1];
    const credentials = atob(base64Credentials);
    const [email, password] = credentials.split(":");

    if (!email || !password) {
      return AppResponse.error("Invalid credentials format", 401);
    }

    const useCase = container.getSigninUseCase();
    const result = await useCase.execute(email, password);

    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return AppResponse.success(result);
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "Authentication failed", 401);
  }
}
