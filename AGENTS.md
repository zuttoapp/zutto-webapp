# Agent / contributor guide — Zutto webapp

Cursor and other coding agents should read **`.cursor/rules/zutto-project.mdc`** first. It defines:

- What this repo is (React + Vite frontend for Zutto)
- **`src/` layout** (pages, components, contexts, assets)
- **Kebab-case filenames** with **PascalCase** React component identifiers
- **`@/` import alias** (always use for imports under `src/`)
- **Local-only files** that are gitignored for private agent context

## Quick commands

```bash
npm test          # lint + format check + TypeScript + production build
pnpm run check    # same, if you use pnpm
```

## Local overrides (not committed)

Do not put secrets or machine-only instructions in tracked files. Use:

- `AGENTS.local.md` — personal notes for agents (gitignored)
- `.cursor/rules/local.mdc` — personal Cursor rules (gitignored)
