---
name: Commit Maker
description: Generate semantic git commit messages based on changes.
triggers:
  - @commit
  - "커밋 메시지"
---

# Commit Scribe Skill

## 1. Goal
Create a standardized commit message that serves as a perfect history log.

## 2. Convention Rules (Strict)
Format: `type(scope): subject`

* **Types:**
    * `feat`: A new feature
    * `fix`: A bug fix
    * `docs`: Documentation only changes
    * `style`: Formatting, missing semi colons, etc; no production code change
    * `refactor`: Production code change that doesn't add a feature or fix a bug
    * `test`: Adding missing tests, refactoring tests
    * `chore`: Updating build tasks, package manager configs, etc

* **Constraints:**
    * **Subject:** Imperative mood ("Add" not "Added"), Max 50 chars.
    * **Body:** Wrap at 72 chars. Explain *what* and *why* (not *how*).

## 3. Input Processing
Use context from the previous **`@analyze`** or **`@plan`** steps.

## 4. Output Template
```text
git commit -m "[type]([scope]): [Short Description]" -m "[Optional Body: Bullet points of specific changes]" -m "[Optional Footer: Closes #IssueID]"