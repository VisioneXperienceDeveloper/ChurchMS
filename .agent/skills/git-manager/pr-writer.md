---
name: PR Writer
description: Generate a comprehensive Pull Request description for reviewers.
triggers:
  - @pr
  - "PR 작성"
---

# PR Writer Skill

## 1. Goal
Write a Pull Request description that provides context, visualizes changes, and guides the reviewer.

## 2. Source Material
Gather information from:
* **`@plan`**: What was the original intent?
* **`@analyze`**: What are the metrics/risks?
* **`@doc`**: Are there doc updates or screenshots?
* **`@commit`**: Are there commit messages?

## 3. Output Format (Markdown)
Generate the following Markdown block ready for Copy & Paste:

### 🚀 Pull Request: [Title follows Conventional Commits]

#### 📝 Summary
*(1-2 sentences explaining the high-level goal and value of this PR. "Why did we do this?")*

#### 🛠️ Changes
* `[Scope]` **Feature A:** Description of implementation details.
* `[Scope]` **Refactor:** Description of technical improvements.
* `[Config]` **Dependencies:** Added package `xyz`.

#### 🧪 Test Plan (How to Verify)
*(Step-by-step instructions for the reviewer)*
1.  Run `npm test` (Verify all pass)
2.  Go to `http://localhost:3000/profile`
3.  Action: Click "Save"
4.  Expectation: Toast message appears and network call is cached.

#### 📊 Impact Analysis (from @analyze)
* **Risk:** `[Low/Medium/High]`
* **Metrics:** `[Insert metrics from @analyze]`

#### ✅ Checklist
- [x] Tests written and passing
- [x] Documentation updated
- [x] Linter/Formatter pass
