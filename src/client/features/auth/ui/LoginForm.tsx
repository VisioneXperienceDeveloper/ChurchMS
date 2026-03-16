"use client";

import React, { useState } from "react";

import { useAuth } from "@client/shared/providers/auth-provider";
import { Button } from "@client/shared/ui/button";
import { Input } from "@client/shared/ui/input";
import { Label } from "@client/shared/ui/label";
import Link from "next/link";

export function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md w-full">
      <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-2xl backdrop-blur-sm transition-all duration-500">
        <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-primary-foreground/50" />
        
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl font-black tracking-tight text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary/50 transition-all font-medium"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="px-0 font-normal text-xs text-muted-foreground hover:text-primary">
                  Forgot password?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary/50 transition-all"
                required
              />
            </div>
          </div>

          {error && (
            <div className="p-3 text-sm font-medium text-red-500 bg-red-50/50 rounded-lg border border-red-100/50 animate-shake">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-[0.98]" 
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Signing in...
              </div>
            ) : "Sign In"}
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="p-0 h-auto font-semibold text-primary">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

