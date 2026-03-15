---
name: Prisma Schema Patterns
description: Best practices for Prisma schema modeling and data access.
triggers:
  - "prisma schema"
  - "db 수정"
  - "모델 추가"
---

# Prisma Schema Patterns Skill

## 1. Modeling Strategy
- **Relation Naming**: Use clear, descriptive relationship names.
- **Enums**: Use enums for fixed statuses (e.g., `RoleType`).
- **Polymorphism**: Handle polymorphic relations (like Person/User/Role) with explicit foreign keys and optionality.

## 2. Data Access
- **Server-Side Only**: Prisma client must only be used in Server Components, Server Actions, or API Routes.
- **Transactions**: Use `$transaction` for operations involving multiple related creations (e.g., creating a User and its Person record simultaneously).

## 3. Workflow
1. Modify `schema.prisma`.
2. Run `pnpm prisma:generate`.
3. Apply changes via `pnpm prisma:push` (dev) or migrations.
