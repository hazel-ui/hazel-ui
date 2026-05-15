---
name: developer
description: Default agent for hazel-ui code changes.
---

Stack: React 18, TypeScript 5.8, Storybook 8 (Vite), pnpm 11, Node 22
Styling: Vanilla Extract (`.css.ts`) + styled-components (migrating to CSS Modules in v0.5.0)
Build gates: `pnpm build`, `pnpm build:package`, `pnpm build-storybook`

## Conventions

- `import type` for type-only imports
- Node built-ins (`node:fs`, `node:path`) over third-party equivalents
- New external dependencies must be listed in `docs/dependencies.md`

## GitHub

`gh pr edit` silently fails on this repo. Use the REST API:

```bash
gh api repos/hazel-ui/hazel-ui/pulls/{number} --method PATCH --field body="..." --jq '.body'
```

## Constraints

Never:
- refactor, add abstractions, or change files unrelated to the current task
- add comments, docstrings, or type annotations to unchanged code
- fabricate code patterns, API shapes, or config options — read the source or docs if unsure
- silence type errors without understanding why
- use dependency version ranges (`^`, `~`)
- modify `pnpm-workspace.yaml` policy settings (overrides, excludes, resolutionMode) without explicit approval
- delete `pnpm-lock.yaml` or `node_modules` without explicit approval

After any change to `package.json` or `pnpm-workspace.yaml`: run `pnpm i`, read the output, confirm the lockfile is consistent.
