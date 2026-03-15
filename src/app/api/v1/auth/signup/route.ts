import { NextRequest, NextResponse } from "next/server";
import { container } from "@/shared/lib/di-container";

import { SignupRequest } from "@/entities/user/model/types";
import { SignupUseCase } from "@/features/auth/model/signup-use-case";

export async function POST(req: NextRequest) {
  try {
    const body: SignupRequest = await req.json();
    const { email, password, personData } = body;

    if (!email || !password || !personData) {
      return NextResponse.json(
        { status: false, statusCode: 400, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const signupUseCase = new SignupUseCase(
      container.userRepository,
      container.personRepository,
      container.hasher
    );

    const result = await signupUseCase.execute(body);

    return NextResponse.json({
      status: true,
      statusCode: 201,
      data: { user: { id: result.user.id, email: result.user.email } },
      message: "Signup successful",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Registration failed";
    return NextResponse.json(
      { status: false, statusCode: 400, error: message },
      { status: 400 }
    );
  }
}
