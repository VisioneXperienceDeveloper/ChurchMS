import { NextRequest, NextResponse } from "next/server";
import { container } from "@/shared/lib/di-container";
import { SigninUseCase } from "@/features/auth/model/signin-use-case";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return NextResponse.json(
        { status: false, statusCode: 401, error: "Missing Basic Auth header" },
        { status: 401 }
      );
    }

    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
    const [email, password] = credentials.split(":");

    if (!email || !password) {
      return NextResponse.json(
        { status: false, statusCode: 401, error: "Invalid Basic Auth format" },
        { status: 401 }
      );
    }

    const signinUseCase = new SigninUseCase(
      container.userRepository,
      container.hasher,
      container.authService
    );

    const { user, accessToken, refreshToken } = await signinUseCase.execute(email, password);

    const response = NextResponse.json({
      status: true,
      statusCode: 200,
      data: { accessToken, user },
      message: "Signin successful",
    });

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
    return NextResponse.json(
      { status: false, statusCode: 401, error: message },
      { status: 401 }
    );
  }
}
