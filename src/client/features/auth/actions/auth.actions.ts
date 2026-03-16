"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SignupRequest } from "@client/entities/user/model/types";
import { container } from "@server/shared/di-container";

/**
 * Standard error handler for Server Actions
 */
async function handleAction<T>(action: () => Promise<T>): Promise<T> {
  try {
    return await action();
  } catch (error: unknown) {
    console.error("Action error:", error);
    throw error instanceof Error ? error : new Error("An unexpected error occurred");
  }
}

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  await handleAction(async () => {
    const signinUseCase = container.getSigninUseCase();
    const result = await signinUseCase.execute(email, password);
    
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
    });
  });

  redirect("/members");
}

export async function registerAction(data: SignupRequest) {
  await handleAction(async () => {
    const signupUseCase = container.getSignupUseCase();
    await signupUseCase.execute(data);
  });

  redirect("/login");
}


