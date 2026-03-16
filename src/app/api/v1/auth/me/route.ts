import { container } from "@server/shared/di-container";
import { cookies } from "next/headers";
import { AppResponse } from "@server/shared/api-response";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return AppResponse.error("Unauthorized", 401);
    }

    const authService = container.authService;
    const payload = await authService.verifyToken(token);

    const userRepository = container.userRepository;
    const user = await userRepository.findById(payload.userId);

    if (!user) {
      return AppResponse.error("User not found", 404);
    }

    const { hash: _hash, ...userDTO } = user;
    void _hash;

    return AppResponse.success(userDTO);
  } catch {
    return AppResponse.error("Invalid token", 401);
  }
}

