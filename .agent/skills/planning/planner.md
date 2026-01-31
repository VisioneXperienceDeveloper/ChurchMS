---
name: Tech Planner
description: Break down feature requests into technical implementation steps.
triggers:
  - @plan
  - "기획해줘"
---

# Tech Planner Skill

## 1. Goal
Convert user requests into a strict **Implementation Plan**.

## 2. Planning Rules (CRITICAL)
- **Atomic Steps:** Each checklist item must be small enough to be completed in one TDD cycle (Red/Green).
- **No Vagueness:** Avoid generic phrases like "Implement logic". Be specific: "Create `calculateTotal` function in `cart.ts`".
- **File Awareness:** Clearly identify which existing files need modification vs. which are new.
- **Test Strategy:** What exactly needs to be tested?

## 3. Output Format
Always output a Markdown Checklist:
### 🛠️ Implementation Plan
**1. Scope & Strategy**
* **Branch:** `features/[name]` or `hotfix/[name]`
* **Dependencies:** List any new npm packages needed (or "None").
* **Test Strategy:** specific scenarios to cover (e.g., "Mock DB call, verify 404 error").

**2. Affected Files**
* `[New/Mod]` path/to/file.ts: Brief description of change

**3. Step-by-Step Checklist**
*(Copy this checklist to your Orchestrator status)*
- [ ] **Setup:** Create branch `[branch_name]` (& install dependencies if any)
- [ ] **Test (Red):** Create test file `[test_file]` with initial failing case: `[Case description]`
- [ ] **Dev (Green):** Implement interface/function `[Function Name]` in `[File]`
- [ ] **Dev (Green):** Implement core logic for `[Feature Aspect A]`
- [ ] **Refactor:** Optimize readability and handle edge cases
- [ ] **Verify:** Run all tests to ensure pass

## 4. Example
**User:** "유저 프로필 조회 API 만들어줘"
**AI:** ```
### 🛠️ Implementation Plan
**1. Scope & Strategy**
* **Branch:** `features/user-profile-api`
* **Dependencies:** None
* **Test Strategy:** Test `GET /users/:id` for valid ID (200) and missing ID (404).

**2. Affected Files**
* `[New]` src/users/users.controller.ts
* `[Mod]` src/users/users.service.ts

**3. Step-by-Step Checklist**
- [ ] **Setup:** `git checkout -b features/user-profile-api`
- [ ] **Test (Red):** Write e2e test for `GET /users/:id` expecting 200
- [ ] **Dev (Green):** Create `UsersController` with `findOne` method
- [ ] **Dev (Green):** Update `UsersService` to fetch data from repo
- [ ] **Refactor:** Add error handling for non-existent users"

```