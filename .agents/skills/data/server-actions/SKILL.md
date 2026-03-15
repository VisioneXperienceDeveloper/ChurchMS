---
name: Server Action Standards
description: Guidelines for implementing robust and secure Next.js Server Actions.
triggers:
  - "폼 제출"
  - "server action"
  - "mutation"
---

# Server Action Standards Skill

## 1. Syntax
- Always start the file with `"use server";`.
- Use `async` / `await` for all operations.

## 2. Error Handling & Validation
- **Input Validation**: Use Zod or similar for schema validation.
- **Result Pattern**: Return standardized result objects `{ success: boolean, data?: any, error?: string }`.
- **Revalidation**: Call `revalidatePath` or `revalidateTag` after successful mutations.

## 3. Patterns
- Keep actions focused on a single responsibility.
- Place actions in `features/[feature-name]/actions/`.
