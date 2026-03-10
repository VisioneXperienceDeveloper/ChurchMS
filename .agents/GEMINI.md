# Project Technology Stack & Architectural Guidelines

You are working on the Church Management System (CMS) project. Ensure you follow these rules and architectural constraints strictly.

## 1. Technology Stack

- **Framework**: Next.js v16.1.5 (App Router)
- **UI & Components**: React v19.2.3, shadcn/ui (Radix UI + Lucide React), Recharts
- **Styling**: Tailwind CSS v4, tailwind-merge, clsx, class-variance-authority, tw-animate-css
- **Language**: TypeScript v5 (Strict Mode)
- **Database & ORM**: PostgreSQL (via Supabase), Prisma v7.3.0
- **State Management & Data Fetching**: TanStack Query (Client-side caching), React Server Actions (Server-side mutations/fetch)
- **Authentication/Session**: @supabase/ssr, @supabase/supabase-js
- **Testing**: Vitest (Unit), Playwright (E2E)
- **Package Manager**: pnpm

## 2. Architectural Paradigm: Clean Architecture + Feature-Sliced Design (FSD)

This project strictly adheres to a hybrid of Clean Architecture and Feature-Sliced Design (FSD) in the Next.js App Router context. You MUST maintain a unidirectional dependency flow.

### 2.1. The Dependency Rule
Modules can only import from modules directly below them in the hierarchy.
**Flow Diagram:** `app` -> `widgets` -> `features` -> `entities` -> `shared`

- **NEVER** import from a higher layer into a lower layer.
- **NEVER** import across slices of the same layer (e.g., `features/auth` cannot import from `features/billing`). They must communicate via `widgets` or use lower-layer components.

### 2.2. Layers Definition

#### 1. `app/` (Application Layer)
- **Purpose**: App configuration, global providers, routing, layouts, and global styles.
- **Contents**: Next.js `page.tsx`, `layout.tsx`, global CSS (`globals.css`), root providers.
- **Rule**: Keep it exceptionally thin. Compose pages using imported `widgets`.

#### 2. `widgets/` (Composition Layer)
- **Purpose**: Meaningful, independent blocks combining multiple features and entities.
- **Examples**: `HeaderWidget`, `UserProfileWidget`, `GroupDashboardWidget`.
- **Rule**: Widgets act as the orchestrators on a page. Avoid heavy business logic here; delegate it to features or entities.

#### 3. `features/` (Action & Business Value Layer)
- **Purpose**: User interactions, use cases, and actions that bring business value.
- **Examples**: `auth/login-form`, `group/invite-member`, `person/create-profile`.
- **Rule**: This layer connects UI to data mutations (Server Actions) or queries (TanStack Query).

#### 4. `entities/` (Domain Layer)
- **Purpose**: Core business entities and their corresponding purely representational UI, interfaces, and API services.
- **Examples**: `person`, `group`, `role`.
- **Contents**: Types, domain models, entity-specific UI components (e.g., `PersonCard`, `GroupAvatar`).
- **Rule**: Entities must NOT contain application-specific business logic or forms. They only display data and provide interfaces for the domain.

#### 5. `shared/` (Infrastructure & Reusables Layer)
- **Purpose**: Highly decoupled, reusable infrastructure code and basic UI components.
- **Examples**: `shared/ui` (shadcn components like Button, Input), `shared/lib` (utils, formatters), `shared/api` (fetch wrappers), `shared/config`.
- **Rule**: Must be completely independent of the domain. Nothing in `shared` should know about `entities`, `features`, etc.

## 3. Implementation Rules

### 3.1. Next.js App Router & React
- **Server Components by Default**: All components must be Server Components unless interactivity/state requires `"use client"`.
- **Client Boundary**: Push `"use client"` as far down the component tree as possible.
- **Data Fetching**: 
  - Use TanStack Query exclusively for client-side queries and caching.
  - Initial data loading should happen in Server Components to pass down as initial data when possible.
  - Use React Server Actions (`"use server"`) for mutations, form submissions, and database interactions.

### 3.2. Database & API (Prisma + Supabase)
- **Data Access logic**: Direct Prisma calls must be in Server Components, Server Actions, or an API route. NEVER expose Prisma logic to Client Components.
- Handle polymorphic queries properly according to the `Person` / `Role` models.
- **Scaffolding**: Modifications to code must consider Prisma schema updates/migrations.

### 3.3. Coding Standards & UI
- **Strict Typing**: Use strict TypeScript. No `any`. Define explicit interfaces for all props and structures.
- **Component Naming**: PascalCase for components. camelCase for functions/vars. kebab-case for directories/files.
- **Styling Preference**: ONLY use Tailwind CSS utility classes. Combine classes logically using `clsx` and `tailwind-merge`. Avoid custom CSS unless absolutely necessary in global scope.
- **Public API (Index Exports)**: Each slice in `widgets`, `features`, and `entities` MUST explicitly export its public components and types via an `index.ts`. Other layers must import purely from this root `index.ts`.

## 4. Test-Driven Development (TDD) Guidelines

This project embraces TDD to ensure code reliability and maintainability. Writing tests before implementation helps clarify requirements and design.

### 4.1. Core TDD Workflow (Red-Green-Refactor)
1.  **Red**: Write a failing test for the desired functionality. Ensure it fails for the right reason.
2.  **Green**: Write the minimal amount of code required to make the test pass.
3.  **Refactor**: Improve the code structure, readability, and performance without changing behavior. Ensure tests still pass.

### 4.2. Testing Layers
- **Unit Tests (Vitest)**:
    -   Target: Utility functions (`shared/lib`), custom hooks, complex business logic within `features` and `entities`.
    -   Focus: Logic correctness, edge cases, error handling.
    -   Rule: Keep them fast and isolated. Mock external dependencies (e.g., database, API calls).
- **Component Tests (Vitest + React Testing Library)**:
    -   Target: UI components in `shared/ui`, `entities`, and `features`.
    -   Focus: Rendering logic, user interactions (clicks, inputs), accessibility (ARIA roles).
    -   Rule: Test user behavior, not implementation details (e.g., test that a modal opens on click, not that state `isOpen` changed).
- **Integration Tests (Vitest)**:
    -   Target: Server Actions, API routes, and `features` interacting with the database.
    -   Focus: Correct interaction between different layers (e.g., `features` calling Prisma).
    -   Rule: Use an actual (but isolated, e.g., test database container) database. Avoid extensive mocking here.
- **End-to-End (E2E) Tests (Playwright)**:
    -   Target: Critical user flows (e.g., login, creating a group, inviting a member).
    -   Focus: Complete system validation across the entire stack (UI -> Network -> Server -> Database).
    -   Rule: These are slow. Focus only on the most critical "happy paths" and major failure scenarios.

### 4.3. Test Organization
- Co-locate tests with the implementation files whenever possible (e.g., `button.tsx` should have a sibling `button.test.tsx`).
- For E2E tests, use a dedicated `e2e` or `tests` directory at the project root.
- Follow a consistent naming convention: `[filename].test.ts(x)` or `[filename].spec.ts(x)`.

By adhering to these rules, the codebase remains modular, testable, and maintainable.
