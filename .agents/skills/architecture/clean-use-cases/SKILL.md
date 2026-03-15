---
name: Clean Use Case Pattern
description: Rules for implementing business logic using the Clean Architecture Use Case pattern.
triggers:
  - "비즈니스 로직"
  - "use case 생성"
---

# Clean Use Case Pattern Skill

## 1. Pattern Definition
A Use Case encapsulates a single business action. It orchestrates domain entities and repositories.

## 2. Structural Requirements
- **Constructor Injection**: All dependencies (Repositories, Services) must be injected via the constructor using interfaces.
- **Single Method**: Usually has one `execute(data: Request): Promise<Response>` method.
- **Isolation**: Purely business logic. It should not know about HTTP, Express, or Next.js specifics.

## 3. Example Template
```typescript
export class ExampleUseCase {
  constructor(
    private readonly repository: IRepository,
    private readonly service: IService
  ) {}

  async execute(request: Request): Promise<Response> {
    // 1. Validation
    // 2. Domain logic/Orchestration
    // 3. Return results
  }
}
```
