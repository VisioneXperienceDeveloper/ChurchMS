"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SignupRequest } from "@client/entities/user/model/types";
import { container } from "@server/shared/di-container";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const signinUseCase = container.getSigninUseCase();
  
  try {
    const result = await signinUseCase.execute(email, password);
    
    // In a real server action with JWT, we usually set a cookie here
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
    });

    // We can also store the user info in a cookie if needed, but usually just the token
  } catch (error: unknown) {
    console.error("Login failed:", error);
    throw error instanceof Error ? error : new Error("Login failed");
  }

  redirect("/members");
}

export async function registerAction(data: SignupRequest) {
  const signupUseCase = container.getSignupUseCase();
  
  try {
    const user = await signupUseCase.execute(data);
    
    // Optionally log in automatically after signup
    // For now, just redirect to login
    void user;
  } catch (error: unknown) {
    console.error("Signup failed:", error);
    throw error instanceof Error ? error : new Error("Signup failed");
  }

  redirect("/login");
}


