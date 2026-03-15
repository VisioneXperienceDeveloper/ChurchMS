---
name: Supabase Auth Patterns
description: Standards for managing authentication and sessions with Supabase in Next.js App Router.
triggers:
  - "로그인"
  - "권한"
  - "supabase auth"
---

# Supabase Auth Patterns Skill

## 1. Architecture
- **SSR Client**: Use `@supabase/ssr` to handle sessions on the server side.
- **Middleware**: Ensure session refreshing occurs in `middleware.ts`.

## 2. Helpers
- **`shared/lib/auth.ts`**: Centralized logic for getting the current user or session.
- **Server Actions**: Use supabase client within server actions for credential verification and signup.

## 3. Best Practices
- Avoid using the anonymous key for sensitive operations without JWT verification.
- Use `getServerUser()` patterns to protect routes and components.
