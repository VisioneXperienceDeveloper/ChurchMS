---
name: Playwright E2E Integration
description: End-to-end testing of critical user flows using Playwright.
triggers:
  - "playwright"
  - "e2e 테스트"
  - "테스트 자동화"
---

# Playwright E2E Integration Skill

## 1. Core Flows
Focus on the most critical paths:
- Authentication (Login/Logout).
- User Onboarding (Signup).
- Primary Domain Actions (e.g., creating a person or group).

## 2. Configuration
- **Location**: Global `e2e/` or `tests/` directory.
- **Environment**: Ensure tests run against a local dev or isolated test environment.

## 3. Rules
- Avoid brittle selectors; use `getByRole` or `getByText` where possible.
- Use `test.step` to clearly document the flow within a single test.
