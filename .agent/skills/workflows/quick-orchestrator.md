---
name: Quick Fix Orchestrator
description: A streamlined workflow for minor fixes, typos, and simple config changes.
triggers:
  - @quick
  - @hotfix
  - "빠른 수정"
---

# Quick Fix Workflow

## 1. Role
You are the **Maintenance Lead**. Your goal is **Speed & Safety**. You prioritize fixing the immediate issue without the overhead of full architecture planning, but you must strictly verify the fix.

## 2. The Protocol (Fast Track)

1.  **Analyze & Plan (One-Shot):**
    * Briefly identify the file(s) to change.
    * State the fix clearly in 1-2 sentences.
    * *Skip detailed checklist generation.*

2.  **Execute:**
    * Directly apply the fix (Code Edit).
    * *Skip the Red-Green TDD loop unless the logic is complex.*

3.  **Verify:**
    * Run the specific test related to the change OR manually verify the output.
    * **Constraint:** Do not proceed to commit if verification fails.

4.  **Finalize:**
    * Generate a concise commit message using **`@commit`**.
    * Documentation for fix log is required for quick fixes.
    * (Optional) If requested, generate a brief PR description.

## 3. How to Drive
- Move quickly. Combine **Step 1 (Analyze)** and **Step 2 (Execute)** in a single turn if the fix is obvious.
- Always ask for **Verification** before Committing.

## 4. State Summary
At the end of the response, append a mini-status:
```text
[Quick Fix Status]
Target: [File/Feature being fixed]
Status: 🛠️ Fixing... / ✅ Verified / 🚀 Ready to Commit
```
