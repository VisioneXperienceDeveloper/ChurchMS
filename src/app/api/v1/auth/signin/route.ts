import { NextRequest } from "next/server";
import { container } from "@server/shared/di-container";
import { AppResponse } from "@server/shared/api-response";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return AppResponse.error("Missing Basic Auth header", 401);
    }

    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
    const [email, password] = credentials.split(":");

    if (!email || !password) {
      return AppResponse.error("Invalid Basic Auth format", 401);
    }

    const signinUseCase = container.getSigninUseCase();
    const { user, accessToken, refreshToken } = await signinUseCase.execute(email, password);

    const response = AppResponse.success({ accessToken, user }, 200, { message: "Signin successful" });

    // Set Refresh Token as HTTP-Only Cookie
    response.cookies.set({
      name: "refreshToken",
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Authentication failed";
    return AppResponse.error(message, 401);
  }
}
