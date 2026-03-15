---
name: Project Planner
description: Decompose complex requests into a structured task.md and implementation_plan.md.
triggers:
  - "+plan"
  - "계획 수립"
  - "기획 시작"
---

# Project Planner Skill

## 1. Goal
Create a clear, executable roadmap for the project. Every significant task must start with a Plan.

## 2. Deliverables
- **`task.md`**: A detailed checklist of technical steps. Use `[ ]`, `[/]`, `[x]` for status.
- **`implementation_plan.md`**: A technical brief explaining:
  - **Proposed Changes**: Grouped by component/layer.
  - **Verification Plan**: Automated tests (Vitest/Playwright) and manual checks.
  - **User Review Required**: Highly critical decisions or breaking changes.

## 3. Workflow
1. Analyze requirements.
2. Search codebase for existing patterns.
3. Draft `task.md` and `implementation_plan.md`.
4. Ask for user approval before switching to `EXECUTION` mode.
