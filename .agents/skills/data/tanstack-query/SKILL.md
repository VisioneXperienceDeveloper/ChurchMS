---
name: TanStack Query Integration
description: Use TanStack Query for client-side state, caching, and data fetching orchestration.
triggers:
  - "데이터 페칭"
  - "useQuery"
  - "캐시 무효화"
---

# TanStack Query Integration Skill

## 1. Principles
- **Server State Management**: Use TanStack Query exclusively for server-state on the client.
- **Initial Data**: Hydrate queries with initial data from Server Components when possible to avoid waterfalls.

## 2. Patterns
- **Query Keys**: Use a centralized object or factory to manage query keys.
- **Mutations**: Use `useMutation` for client-side actions, coordinating with `queryClient.invalidateQueries` to keep UI in sync.

## 3. Best Practices
- Define hooks in `entities/[entity-name]/api/` or `features/[feature-name]/api/`.
- Handle loading and error states locally at the component level.
