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

export type StatType = "members" | "offerings" | "attendance" | "active-groups";
