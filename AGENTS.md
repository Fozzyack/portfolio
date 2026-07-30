<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commands

- Use Bun, which is the repository's lockfile package manager: `bun install`.
- Run the app with `bun run dev` and open `http://localhost:3000`.
- Run `bun run lint` before finishing; use `bun run build` to verify a production build and `bun run start` to serve it.
- There are currently no test or standalone typecheck scripts. TypeScript checking is included in `bun run build`.

## Structure

- This is a single Next.js App Router application. The main page is `app/page.tsx`, the root metadata/layout is `app/layout.tsx`, and global Tailwind CSS is in `app/globals.css`.
- Static assets belong in `public/`. Do not edit `.next/` or `next-env.d.ts`; they are generated and ignored by the lint configuration.

## Conventions

- Use the `@/*` alias for imports rooted at the repository directory.
- Follow the checked-in Prettier settings: 4-space indentation, double quotes, trailing commas, and an 80-column print width.
