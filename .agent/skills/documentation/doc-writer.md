---
name: Documentation Writer
description: Maintain codebase documentation including JSDoc, README, and API specs.
triggers:
  - @doc
  - "문서화"
---

# Documentation Writer Skill

## 1. Goal
Ensure the code is maintainable and understandable for future developers (and the future you).

## 2. Documentation Hierarchy (Check in Order)
1.  **README.md & Guides:**
    * Did the **Environment Variables** change? (Update `.env.example`)
    * Is there a new **Feature**? (Add usage example to README)
    * Did **Installation/Setup** steps change?
2.  **API Specifications (Swagger/OpenAPI):**
    * If an endpoint changed, update the DTO/Response definitions.
3.  **Inline Documentation:** Check if new functions have JSDoc. If not, add them.
4.  **Impact Analysis:** Compare code before/after.
    - Lines reduced/added.
    - Test coverage change.
    - Performance implication.
5.  **Project Docs:** If a major feature changed, suggest updating `./docs/`.

## 3. Interaction Protocol
**Input:** The code changes or specific file paths.
**Output:** Markdown blocks containing the documentation updates.

## 4. Example Output
```markdown
### 📚 Documentation Updates
**1. `src/utils/auth.ts` (JSDoc)**
Added explanation for the specific JWT hashing algorithm used.

**2. `.env.example`**
```bash
# Added for Google OAuth
GOOGLE_CLIENT_ID=...