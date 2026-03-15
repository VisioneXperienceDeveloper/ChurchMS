---
name: Shadcn Component Composition
description: Build and extend accessible UI components using Shadcn/Radix UI patterns.
triggers:
  - "컴포넌트 추가"
  - "shadcn"
  - "ui 생성"
---

# Shadcn Component Composition Skill

## 1. Architecture
- **Atomic Components**: Place base components (Button, Input, etc.) in `shared/ui/`.
- **Composition**: Form specific components or complex UI patterns should be in `entities` or `features`.

## 2. Implementation rules
- **CVA**: Use `class-variance-authority` for managing component variants (size, intent).
- **Radix UI**: Leverage Radix primitives for accessibility (ARIA, focus management).

## 3. Standards
- Ensure all interactive elements have unique IDs for testing.
- Follow the project's consistent spacing and rounding rules (e.g., `rounded-lg`).
