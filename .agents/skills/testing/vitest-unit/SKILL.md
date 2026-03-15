---
name: Vitest Unit Testing
description: Setup and execution of unit and component tests using Vitest and React Testing Library.
triggers:
  - "vitest"
  - "단위 테스트"
  - "mocking"
---

# Vitest Unit Testing Skill

## 1. Setup
- **Config**: Use `vitest.config.ts`.
- **Mocking**: Use `vi.mock()` for Prisma, Supabase, and heavy side-effect libraries.

## 2. Test Structure
- **Location**: Co-locate with source code `[name].test.ts(x)`.
- **Pattern**: Arrange-Act-Assert.

## 3. Component Testing
- Use `@testing-library/react`.
- Test for accessibility and user-facing text/roles rather than component state or internals.
