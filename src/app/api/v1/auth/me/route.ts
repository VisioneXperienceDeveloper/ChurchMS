import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";

export async function GET(request: NextRequest) {
  try {
    let accessToken: string | null = null;
    
    // Check Authorization header first
    const authHeader = request.headers.get("Authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      accessToken = authHeader.split(" ")[1];
    }
    
    // Check cookies as fallback
    if (!accessToken) {
      const cookieStore = await cookies();
      accessToken = cookieStore.get("accessToken")?.value || null;
    }

    if (!accessToken) {
      return AppResponse.error("Unauthorized", 401);
    }

    const authService = container.authService;
    const payload = await authService.verifyToken(accessToken);
    
    const useCase = container.getGetMeUseCase();
    const result = await useCase.execute(payload.userId);
    
    return AppResponse.success(result);
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "Authentication failed", 401);
  }
}
