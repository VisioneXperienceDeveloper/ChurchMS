---
name: Code Reviewer
description: Review code changes for architectural integrity, clean code, and FSD compliance.
triggers:
  - "+review"
  - "코드 리뷰"
  - "검토 요청"
---

# Code Reviewer Skill

## 1. Scope of Review
- **Architecture**: FSD layer boundaries and DI patterns.
- **Clean Code**: SOLID principles, naming, and readability.
- **Performance**: Unnecessary re-renders, DB query efficiency.
- **Security**: Auth checks, data leakage.
- **Testing**: Presence and quality of tests.

## 2. Review Protocol
1. Examine the diff.
2. Identify violations of `.agents/.rules`.
3. Provide constructive feedback with specific code examples.
4. If everything looks good, approve the changes.

## 3. Checklist
- [ ] No cross-slice imports in the same FSD layer.
- [ ] Business logic is in use cases, not UI.
- [ ] Naming follows PascalCase for components, camelCase for variables.
- [ ] Tests are provided for new logic.
