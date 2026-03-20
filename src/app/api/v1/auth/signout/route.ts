import { cookies } from "next/headers";
import { AppResponse } from "@server/shared/api-response";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken");
    return AppResponse.success({ status: "success" });
  } catch (error: unknown) {
    return AppResponse.error(error instanceof Error ? error.message : "Logout failed", 400);
  }
}
