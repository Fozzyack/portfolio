# Agent Guidelines

## Commands
- Build: `npm run build`
- Lint: `npm run lint`
- Dev: `npm run dev`
- Start: `npm run start`
- No test runner configured

## Code Style
- TypeScript with strict mode enabled
- Use `@/` path alias for imports from project root
- Export named functions using `export function ComponentName()`
- Use `cn()` utility from `@/lib/utils` for className merging
- Prefer functional components with TypeScript interfaces
- Use Radix UI + shadcn/ui components from `@/components/ui/`
- Tailwind CSS classes for styling with custom design system
- Icons from `lucide-react`

## Conventions
- Components in PascalCase (e.g., `HeroSection`)
- Files in kebab-case (e.g., `hero-section.tsx`)
- Props typed with React.ComponentProps or custom interfaces
- Use `className` prop for styling, merge with `cn()`
- Async/await for promises, handle errors appropriately
- No prop-types, rely on TypeScript for validation

## Error Handling
- TypeScript/ESLint errors ignored during builds (see next.config.mjs)
- Use proper TypeScript types, avoid `any`