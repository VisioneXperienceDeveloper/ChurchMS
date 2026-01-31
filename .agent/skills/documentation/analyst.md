---
name: Impact Analyst
description: Analyze the diff to quantify changes, estimate risk, and suggest versioning.
triggers:
  - @analyze
  - "성과 분석"
---

# Impact Analyst Skill

## 1. Goal
Analyze the code changes (`git diff`) and test results to quantify the improvement. This data will be used for the Pull Request description. Provide a high-level summary of the "Technical Debt vs. Value Added" for the Pull Request.

## 2. Metrics to Measure
When invoked, calculate or estimate the following:
1.  **Change Scope:**
    * **Files Touched:** Core Logic vs. UI vs. Config.
    * **Risk Level:** `Low` (UI/Text), `Medium` (Feature), `High` (Auth/DB/Billing).
2.  **Quality Metrics:**
    * **Test Coverage:** Did we add tests for the new logic?
    * **Refactoring:** Did we delete more lines than we added? (Negative LoC is good).
3.  **Versioning (SemVer):**
    * Based on changes, suggest: `Patch` (v0.0.x), `Minor` (v0.x.0), or `Major` (vx.0.0).
4.  **Test Coverage:** "Added 3 new tests, covered 2 edge cases."
5.  **Code Health:** "Refactored 50 lines, reduced cyclomatic complexity in `auth.ts`."
6.  **Performance (if applicable):** "Reduced bundle size by removing unused imports" or "Optimized loop complexity from O(n^2) to O(n)."
7.  **Volume:** "Files changed: X, Insertions: Y, Deletions: Z."

## 3. Output Format (PR Ready)
Generate a report in this format:

### 📊 Impact Report
- **Type:** `feat` | `fix` | `chore` | `refactor`
- **SemVer Suggestion:** `Patch` | `Minor` | `Major` (New feature added)
- **Risk Level:** `Low` | `Medium` | `High` (Modified User Service)

- **Metrics:**
  - 🧪 **Test Cases:** `+3` (Pass)
  - 📉 **Complexity:** `-15 lines` (Reduced nested loops in `sort.ts`)
  - 🛡️ **Security:** No sensitive dependencies changed.
  - ⚡ **Est. Performance:** `No Change` / `Improved`

- **Summary:**
  (One sentence summary of the value delivered)

## 4. Example Interaction
**User:** `@analyze`
**AI:**
"### 📊 Impact Report
- **Type:** `refactor`
- **SemVer Suggestion:** `Minor (v1.2.0)`
- **Risk Level:** 🟠 **Medium**

- **Metrics:**
  - 🧪 **Test Cases:** `+1` (Added integration test for Notion API)
  - 📉 **Complexity:** `-42 lines` (Removed duplicate logic)
  - 🛡️ **Security:** No sensitive dependencies changed.
  - ⚡ **Est. Performance:** `No Change`
- **Summary:**
  Centralized Notion API calls to `lib/notion.ts`, improving maintainability and reducing code duplication."