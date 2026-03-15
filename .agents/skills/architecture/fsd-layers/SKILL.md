---
name: FSD Layers Discipline
description: Enforce strict FSD layering and unidirectional dependency rules.
triggers:
  - "파일 이동"
  - "레이어 구성"
  - "import 에러"
---

# FSD Layers Discipline Skill

## 1. The Rules
- **Unidirectional Flow**: `app` -> `widgets` -> `features` -> `entities` -> `shared`.
- **Isolation**: Slices within the same layer (e.g., `features/auth` and `features/groups`) MUST NOT import from each other.
- **Public API**: Only import from the `index.ts` of a slice. Never reach into its internal structure (e.g., `features/auth/ui/LoginForm.tsx`).

## 2. Directory Structure
```
src/
  app/         # Routing, Global Layouts, Providers
  widgets/     # Composition of features & entities
  features/    # User-centric use cases (forms, actions)
  entities/    # Domain data, models, and basic UI
  shared/      # Reusable UI, lib, api, config
```

## 3. Interaction
- If an import violates these rules, suggest moving the logic to a common lower layer or orchestrating it in a higher layer (widget).
