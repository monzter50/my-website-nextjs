# CLAUDE.md

Personal site / blog: Next.js 15 App Router, React 19, TypeScript, Tailwind + shadcn/ui, MDX posts.
Detailed guidance lives in the project skills under `.claude/skills/`:
`frontend-architecture`, `design-system`, `new-post`, `site-code-review`.

## Package manager: yarn (v1)

- Install and change dependencies **only with yarn**: `yarn install`, `yarn add <pkg>`,
  `yarn add -D <pkg>`, `yarn remove <pkg>`. Never `npm install` / `npm i`.
- `yarn.lock` is the only lockfile and must be committed with every dependency change. Don't add a
  `package-lock.json` (it was removed so Vercel and local installs can't drift); `packageManager`
  in `package.json` pins yarn 1.22.22.
- Run scripts with yarn: `yarn dev`, `yarn build`, `yarn lint`, `yarn test`, `yarn tsc --noEmit`.
- One-off CLIs that aren't dependencies (e.g. `npx shadcn@latest add <component>`) may use `npx`;
  yarn 1 has no `dlx`.
- `package.json` pins `engines.node` to `24.x` (for Vercel). On another Node version yarn refuses
  to run; use `yarn --ignore-engines <cmd>` locally instead of switching to npm.

## Checks before reporting done

```bash
yarn tsc --noEmit   # next build ignores type errors (typescript.ignoreBuildErrors)
yarn lint
yarn build          # when routes, generateStaticParams, MDX pipeline or middleware change
```
