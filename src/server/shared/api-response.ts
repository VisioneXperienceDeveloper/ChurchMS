import { NextResponse } from "next/server";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
  meta?: {
    timestamp: string;
    path?: string;
    [key: string]: unknown;
  };
}

export class AppResponse {
  static success<T>(data: T, status = 200, meta?: Record<string, unknown>) {
    const body: ApiResponse<T> = {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        ...meta,
      },
    };
    return NextResponse.json(body, { status });
  }

  static error(message: string, status = 400, code?: string, details?: unknown) {
    const body: ApiResponse = {
      success: false,
      error: {
        message,
        code,
        details,
      },
      meta: {
        timestamp: new Date().toISOString(),
      },
    };
    return NextResponse.json(body, { status });
  }
}
