import { ApiResponse, LoginResponseData, SignupRequest, UserDTO } from "@shared/types";

class ApiClient {
  private async request<T>(
    path: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = path.startsWith('http') ? path : path;
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            message: data.error?.message || response.statusText,
            code: data.error?.code,
            details: data.error?.details,
          },
        };
      }

      return data as ApiResponse<T>;
    } catch (error) {
      console.error(`API Request Error [${path}]:`, error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : "Network error",
        },
      };
    }
  }

  async get<T>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(path, { ...options, method: 'GET' });
  }

  async post<T>(path: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(path, { 
      ...options, 
      method: 'POST', 
      body: JSON.stringify(body) 
    });
  }

  async patch<T>(path: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(path, { 
      ...options, 
      method: 'PATCH', 
      body: JSON.stringify(body) 
    });
  }

  async delete<T>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(path, { ...options, method: 'DELETE' });
  }

  async login(email: string, password: string): Promise<ApiResponse<LoginResponseData>> {
    const basicAuth = btoa(`${email}:${password}`);
    return this.request("/api/v1/auth/signin", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
      },
    });
  }

  async signup(data: SignupRequest): Promise<ApiResponse<UserDTO>> {
    return this.post("/api/v1/auth/signup", data);
  }

  async getMe(): Promise<ApiResponse<UserDTO>> {
    return this.get("/api/v1/auth/me");
  }

  async logout(): Promise<ApiResponse<void>> {
    return this.post("/api/v1/auth/logout", {});
  }
}

export const apiClient = new ApiClient();
