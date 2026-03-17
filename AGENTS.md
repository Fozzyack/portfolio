# AGENTS.md

Guidance for coding agents working in this repository.

## Project Snapshot

- Stack: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4.
- Package manager: npm is the safest default (`package-lock.json` is present).
- TS mode: `strict: true` in `tsconfig.json`.
- Path alias: `@/*` maps to repository root.
- Build behavior note: `next.config.mjs` currently ignores TypeScript and ESLint build errors.

## Rule Files Check

- `.cursorrules`: not found.
- `.cursor/rules/`: not found.
- `.github/copilot-instructions.md`: not found.
- No Cursor/Copilot rule files are currently active in this repo.

## Setup and Core Commands

Run from repository root:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Test Commands (Current State + Guidance)

Important: there is no `test` script in `package.json` and no test framework config checked in.

- Full test suite command: not configured.
- Single test file command: not configured.
- Single test case command: not configured.

If you are asked to run tests, report that tests are not configured and proceed with lint/build verification.

Recommended verification fallback:

```bash
npm run lint && npm run build
```

If tests are added later, prefer these conventions:

- Add `npm test` for full suite.
- Add a documented single-file command (for example: Vitest/Jest by file path).
- Add a documented single-test-name command (for example: `-t "test name"`).

## Single-Target Linting and Type Checks

Useful focused commands during iteration:

```bash
npx next lint --file app/page.tsx
```

```bash
npx tsc --noEmit
```

Note: `tsc` is stricter than project build because Next build currently ignores TS errors.

## Code Style and Formatting

### Prettier and Baseline Formatting

- `.prettierrc` specifies `tabWidth: 4` and `semi: true`.
- Follow existing local style in touched files; avoid mass reformatting.
- Use semicolons in new/edited code.
- Keep JSX readable: break long className/content across lines.

### TypeScript

- Maintain explicit types for exported APIs, complex objects, and hook options.
- Prefer `type` aliases for object shapes used in components.
- Use `as const` for immutable literal collections when appropriate.
- Avoid `any`; prefer unions, generics, or `unknown` + narrowing.
- Keep strict-mode compatibility (`strict: true`).

### Imports

- Group imports in this order:
  1) framework/libs (`react`, `next/*`),
  2) internal absolute imports (`@/...`),
  3) relative imports.
- Prefer `import type` for type-only imports.
- Keep imports minimal; remove unused imports.

### Naming

- Components: `PascalCase` (`ProjectsSection`).
- Hooks: `camelCase` with `use` prefix (`useIntersectionObserver`).
- Utilities/functions/vars: `camelCase`.
- Constants: `UPPER_SNAKE_CASE` for true constants.
- Data collections: plural nouns (`projects`, `toolGroups`).
- IDs shown in UI are strings (`"01"`, `"02"`) when display formatting matters.

### React and Next.js Conventions

- Add `"use client"` only where client hooks/browser APIs are used.
- Default to server components when interactivity is not required.
- Keep components focused and composable; extract repeated blocks.
- Use stable keys from data, not array index, unless duplication requires index suffixing.
- Use `next/image` for local/static image assets where practical.

### Styling (Tailwind)

- Use utility classes directly in JSX; avoid premature CSS extraction.
- Preserve the repo's visual language (neutral earth-tone palette, uppercase typography, dense tracking).
- Keep class strings structured logically (layout -> spacing -> typography -> color -> effects).
- Prefer existing animation patterns (`animate-fade-in`, `animate-fade-up`, marquee classes).

## Error Handling and Resilience

- Guard nullable/optional data before rendering dependent UI.
- In hooks, always clean up subscriptions/listeners/observers in `useEffect` cleanup.
- Fail safely in UI: return `null` for optional visual elements when data is missing.
- Do not swallow errors silently in async code; surface actionable context.

## Accessibility and UX

- Use semantic elements (`main`, `section`, `nav`, `button`, `aside`).
- Ensure interactive controls have accessible labels (`aria-label` where needed).
- Preserve keyboard-close and click-away behavior for overlays/modals.
- For external links opened in new tabs, include `rel="noreferrer"`.

## Agent Change Checklist

Before finishing, run what is applicable:

```bash
npm run lint
```

```bash
npm run build
```

Then confirm:

- No unused imports/variables introduced.
- No accidental broad reformatting.
- New code follows naming and typing conventions above.
- Any command limitations (especially tests) are clearly reported.
