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
    return NextResponse.json(this.plainSuccess(data, meta), { status });
  }

  static error(message: string, status = 400, code?: string, details?: unknown) {
    return NextResponse.json(this.plainError(message, code, details), { status });
  }

  static plainSuccess<T>(data: T, meta?: Record<string, unknown>): ApiResponse<T> {
    return {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        ...meta,
      },
    };
  }

  static plainError<T = unknown>(message: string, code?: string, details?: unknown): ApiResponse<T> {
    return {
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
  }
}
