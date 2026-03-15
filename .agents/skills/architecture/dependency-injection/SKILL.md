---
name: Dependency Injection Flow
description: Manage the DI lifecycle and container registration in the project.
triggers:
  - "의존성 주입"
  - "di container"
  - "인스턴스 생성"
---

# Dependency Injection Flow Skill

## 1. DI Container (`src/shared/lib/di-container.ts`)
The project uses a Singleton DI Container for managing instances of repositories and services.

## 2. Registration Rules
- **Infrastructure First**: Create the implementation classes (e.g., `PrismaUserRepository`).
- **Register**: Add the instance to the `DIContainer` class.
- **Export**: Access via the `container` constant.

## 3. Usage Pattern
- **In Server Actions/Pages**: Use `container.someService.execute()` if the service is a singleton.
- **Constructor Hooking**: Use interfaces from `shared/lib/*-interfaces.ts` for loose coupling.
