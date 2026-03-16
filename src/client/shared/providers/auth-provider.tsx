"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { UserDTO, SignupRequest } from "@client/entities/user/model/types";
import { apiClient } from "@client/shared/lib/api-client";

interface AuthContextType {
  user: UserDTO | null;
  accessToken: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupRequest) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiClient.getMe();
        if (response.status && response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Session restoration failed:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await apiClient.login(email, password);
    if (response.status && response.data) {
      const { accessToken: token, user: userData } = response.data;
      setAccessToken(token);
      setUser(userData);
      apiClient.setAccessToken(token);
      router.push("/dashboard");
    } else {
      throw new Error(response.error || "Login failed");
    }
  };

  const signup = async (data: SignupRequest) => {
    const response = await apiClient.signup(data);
    if (response.status) {
      router.push("/login");
    } else {
      throw new Error(response.error || "Signup failed");
    }
  };

  const logout = async () => {
    try {
      await apiClient.logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      setAccessToken(null);
      apiClient.setAccessToken(null);
      router.push("/login");
    }
  };


  return (
    <AuthContext.Provider value={{ user, accessToken, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
