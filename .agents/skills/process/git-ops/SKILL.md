---
name: Git Ops Specialist
description: Manage the complete Git lifecycle including branch creation, conventional commits, and impactful pull request descriptions.
triggers:
  - "+git"
  - "+branch"
  - "+commit"
  - "+pr"
  - "커밋"
  - "브랜치 생성"
---

# Git Ops Specialist Skill

## 1. Branch Strategy (+branch)
When creating a new branch, adhere to the following naming convention:
- **Format**: `[type]/[task-name]`
- **Types**: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`
- **Example**: `feat/user-auth`, `fix/login-bug`

## 2. Conventional Commits (+commit)
Every commit MUST follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
- **Format**: `<type>(<scope>): <description>`
- **Scopes**: `auth`, `api`, `ui`, `theme`, `db`, `config`, etc.
- **Rules**:
  - Use imperative mood ("add", not "added").
  - First letter is lower-case.
  - No period at the end.

## 3. Pull Request Standards (+pr)
When generating a PR description, include:
- **Summary**: High-level goal and value.
- **Changes**: Grouped by scope.
- **Test Plan**: Step-by-step verification instructions.
- **Checklist**: Tests, Documentation, Linting.

## 4. Workflows
1. **New Task**: Create branch -> Implementation.
2. **Checkpoint**: Stage changes -> Create conventional commit.
3. **Completion**: Analyze impact -> Generate PR description.
