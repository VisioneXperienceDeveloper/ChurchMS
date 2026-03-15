---
name: Documentation & Analyst
description: Analyze code impact and maintain comprehensive documentation.
triggers:
  - "+doc"
  - "+analyze"
  - "문서화"
  - "영향 분석"
---

# Documentation & Analyst Skill

## 1. Impact Analysis (+analyze)
Analyze `git diff` to quantify changes:
- **Change Scope**: Files touched, Risk level (Low/Medium/High).
- **Quality Metrics**: Test coverage, LoC change (Negative LoC is high value).
- **SemVer Suggestion**: Suggest Patch/Minor/Major based on changes.

## 2. Documentation Standards (+doc)
Maintain the codebase's "source of truth":
- **README.md**: Update for environment variables, new features, or setup changes.
- **Inline Docs**: Ensure new logic has JSDoc.
- **Project Docs**: Update `./docs/` for architectural changes.

## 3. Interaction Protocol
1. **Analyze**: Run diff analysis.
2. **Report**: Present the Impact Report.
3. **Update**: Identify and apply necessary documentation changes.
