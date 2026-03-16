# ChurchMS Project Rules & Architecture

## 1. Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript v5 (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Database**: Prisma v7.3.0
- **Auth**: Supabase Auth
- **Communication**: React Server Actions (Bridge)
- **Testing**: Vitest (Unit), Playwright (E2E)

## 2. Directory Structure & Architecture

The project is split into two main domains to separate concerns:

### Client Domain (`src/client`)
Follows **Feature-Sliced Design (FSD)**:
- **app**: Root layout, providers, global styles.
- **widgets**: Composition layer (e.g., Sidebar, Header).
- **features**: User-facing features (e.g., Auth, Member Management). Includes UI components and **Server Actions**.
- **entities**: Domain entities (e.g., User, Person). Includes specialized types and basic logic.
- **shared**: Reusable UI components (shadcn), hooks, and utilities.

### Server Domain (`src/server`)
Follows **Clean Architecture**:
- **domain**: Core business logic, entities, and constants (e.g., Roles, RBAC).
- **use-cases**: Application-specific business rules. Each use case is a single class with an `execute` method.
- **interfaces**: Definitions for repositories, services, and external adapters.
- **infrastructure**: Implementation of interfaces (e.g., Prisma repository, Supabase Auth service).
- **shared**: Server-side utilities and Dependency Injection (DI) container.

## 3. Communication & Boundaries

### The Server Action Bridge
- **Crucial Rule**: `src/client` components MUST NOT import from `src/server/infrastructure` or `src/server/use-cases` directly.
- **Bridge**: Server Actions (`features/*/actions/*.ts`) serve as the entry point. They call Use Cases from the DI container.
- **Data Transfer**: Use types defined in `src/client/entities/*/model/types.ts` for communication between client and server.

### Path Aliases
- `@/*`: Root `src` directory (avoid general use).
- `@client/*`: `src/client` directory.
- `@server/*`: `src/server` directory.

## 4. Coding Standards

### Clean Architecture Rules
- Use Constructor Injection in Use Cases.
- Depend on interfaces, not implementations.
- Keep the domain free of external dependencies (except essential constants).

### FSD Discipline
- **Unidirectional Flow**: `app` -> `widgets` -> `features` -> `entities` -> `shared`.
- No cross-importing between slices in the same layer (e.g., `features/auth` should not import from `features/member`).
- Use public APIs (`index.ts`) for each slice.

## 5. TDD Strategy
- **Red-Green-Refactor**: Always write a failing test first.
- **Unit Tests**: Test Use Cases and pure functions in `src/server`.
- **Component Tests**: Test UI logic and accessibility.
- **E2E Tests**: Test core user flows (Login -> Task Management).
