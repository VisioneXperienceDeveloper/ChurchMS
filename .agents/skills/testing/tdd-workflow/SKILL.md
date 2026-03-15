---
name: TDD Workflow
description: Execute the strict Red-Green-Refactor development cycle.
triggers:
  - "+tdd"
  - "tdd 시작"
  - "구현 시작"
---

# TDD Workflow Skill

## 1. The Protocol
You never write implementation code without a failing test.

### Phase 1: 🔴 RED (Fail)
- **Action**: Create/Update `[file].test.ts(x)`.
- **Target**: ONE specific requirement.
- **Rule**: Mock external dependencies (DB, API). Tests MUST fail initially.

### Phase 2: 🟢 GREEN (Pass)
- **Action**: Write implementation code.
- **Rule**: Write MINIMAL viable code to pass the test. No optimization yet.

### Phase 3: 🔵 REFACTOR (Polish)
- **Action**: Improve code quality (readability, performance) without changing behavior.
- **Verification**: Run tests again to ensure they stay green.

## 2. Testing Layers
- **Vitest**: Unit & Component tests.
- **Playwright**: E2E user flows.

## 3. Interaction
Always denote the current phase clearly (e.g., `### 🔴 Phase: RED`).
Ask for user confirmation before moving between phases.
