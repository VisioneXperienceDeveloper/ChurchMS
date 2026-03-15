import { NextResponse } from "next/server";
import { container } from "@/shared/lib/di-container";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return NextResponse.json({ status: false, error: "Unauthorized" }, { status: 401 });
    }

    const authService = container.authService;
    const payload = await authService.verifyToken(token);

    const userRepository = container.userRepository;
    const user = await userRepository.findById(payload.userId);

    if (!user) {
      return NextResponse.json({ status: false, error: "User not found" }, { status: 404 });
    }

    const { hash: _hash, ...userDTO } = user;
    void _hash;


    return NextResponse.json({
      status: true,
      data: userDTO,
    });
  } catch {
    return NextResponse.json({ status: false, error: "Invalid token" }, { status: 401 });
  }
}

