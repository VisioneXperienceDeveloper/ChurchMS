import { SignupRequest, UserDTO, User } from "@/entities/user/model/types";

export type ApiResponse<T = unknown> = {
  status: boolean;
  statusCode: number;
  data?: T;
  error?: string;
  message?: string;
};

class ApiClient {
  private accessToken: string | null = null;

  setAccessToken(token: string | null) {
    this.accessToken = token;
  }

  async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers = new Headers(options.headers);

    if (this.accessToken && !headers.has("Authorization")) {
      headers.set("Authorization", `Bearer ${this.accessToken}`);
    }

    if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    const response = await fetch(path, { ...options, headers });
    return response.json();
  }

  async login(email: string, password: string): Promise<ApiResponse<{ accessToken: string; user: UserDTO }>> {
    const basicAuth = btoa(`${email}:${password}`);
    return this.request("/api/v1/auth/signin", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
      },
    });
  }

  async signup(data: SignupRequest): Promise<ApiResponse<User>> {
    return this.request("/api/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async getMe(): Promise<ApiResponse<UserDTO>> {
    return this.request("/api/v1/auth/me", {
      method: "GET",
    });
  }

  async logout(): Promise<ApiResponse<void>> {
    return this.request("/api/v1/auth/logout", {
      method: "POST",
    });
  }
}


export const apiClient = new ApiClient();
