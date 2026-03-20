export interface ApiResponse<T = unknown> {
  success: boolean;
  code: number;
  data?: T;
  error?: {
    message: string;
    details?: string;
  };
  meta?: {
    timestamp: string;
    path?: string;
    [key: string]: unknown;
  };
}

export type StatType = "members" | "offerings" | "attendance" | "active-groups";
