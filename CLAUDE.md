# CLAUDE.md

Personal site / blog: Next.js 15 App Router, React 19, TypeScript, Tailwind + shadcn/ui, MDX posts.
Detailed guidance lives in the project skills under `.claude/skills/`:
`frontend-architecture`, `design-system`, `new-post`, `site-code-review`.

## Package manager: pnpm

- Install and change dependencies **only with pnpm**: `pnpm install`, `pnpm add <pkg>`,
  `pnpm add -D <pkg>`, `pnpm remove <pkg>`. Never `npm install` / `yarn`.
- `pnpm-lock.yaml` is the only lockfile and must be committed with every dependency change. Don't add
  a `package-lock.json` or `yarn.lock`; `packageManager` in `package.json` pins pnpm 10.30.3
  (`corepack enable` picks it up).
- pnpm doesn't hoist transitive deps: if code or tsconfig needs a package (including `@types/*`),
  declare it in `package.json` explicitly.
- Run scripts with pnpm: `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm test`, `pnpm tsc --noEmit`.
- One-off CLIs that aren't dependencies use `pnpm dlx` (e.g. `pnpm dlx shadcn@latest add <component>`).
- `package.json` pins `engines.node` to `24.x` (for Vercel).

## Checks before reporting done

```bash
pnpm tsc --noEmit   # next build ignores type errors (typescript.ignoreBuildErrors)
pnpm lint
pnpm build          # when routes, generateStaticParams, MDX pipeline or middleware change
```
