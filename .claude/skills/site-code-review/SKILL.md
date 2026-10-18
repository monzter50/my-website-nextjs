---
name: site-code-review
description: Code review for this Next.js 15 App Router site — checks a diff, branch, PR, or files against the repo's architecture and design system: Server/Client boundaries, locale routing and i18n parity, MDX content pipeline, SEO metadata, a11y, design tokens, performance (images, client bundle), type safety, and tests — and reports ranked, actionable findings. Use whenever the user asks to review, audit, check, or sanity-check changes ("review my changes", "check this PR", "before I merge…"), or after finishing a non-trivial change to self-review before reporting done.
---

# Site code review (this repo)

Find the problems that would actually hurt: **broken pages or 404s in one
locale, build/hydration errors, content that silently disappears, broken
a11y/SEO, and bloated client bundles**. Style nits are last and optional.

## 1. Establish scope

- No target → `git diff` + `git diff --staged` + untracked files.
- Branch/PR → `git diff main...HEAD` (or `gh pr diff <n>`).
- Specific files → those, plus enough of their callers to judge context.

Read whole changed components, not just hunks.

## 2. Run the gates

```bash
yarn tsc --noEmit  # required: next build ignores type errors here
yarn lint
yarn test
```

Optionally `yarn build` when routes, `generateStaticParams`, or middleware changed.

## 3. Checklist (use `frontend-architecture` and `design-system` as the standard)

**Critical**
- A route that 404s or crashes in one locale (missing `generateStaticParams`
  entry, unawaited `params`, missing dictionary key read without fallback).
- `fs`/`@lib/mdx`/`server-only` code pulled into a client component.
- Hydration mismatch (dates/random/`window` rendered differently on server).
- Middleware change that redirect-loops or catches assets (`/img`, files with `.`).
- Secrets or env values exposed via `NEXT_PUBLIC_` or client code.

**High**
- UI copy added to only one locale file or hard-coded in JSX.
- Links missing the `/${lang}` prefix; locale lists hard-coded instead of `i18n.locales`.
- Post frontmatter incomplete (`published`, `locale`, `author.name`, `date`) → post vanishes or card throws.
- New page without `generateMetadata` (title/description/OpenGraph).
- Interactive `<div onClick>`, missing `alt`, icon-only control without `aria-label`.
- Tailwind classes in files outside `tailwind.config.js` `content` globs (purged in prod).

**Medium**
- Unnecessary `"use client"` / client boundary too high in the tree.
- Raw colors / hex / new `.module.css` instead of tokens; missing `dark:` handling.
- `<img>` instead of `next/image`, missing dimensions.
- New `any`, untyped props, deep relative imports instead of aliases.
- New component/util without a test in `__test__/` when it has logic.

**Low** (max ~5): naming, duplication, comments, lint-style drift.

## 4. Verify before reporting

Trace each finding through the real code path; drop what you can't
substantiate or label it as a question. Separate **introduced by this change**
from **pre-existing in touched code**.

## 5. Report format

```markdown
## Review: <scope>

**Verdict:** Ship / Ship after fixes / Needs rework — one sentence why.
**Gates:** tsc ✅/❌ · lint ✅/❌ · tests ✅/❌ (n passed)

### Critical
1. **<title>** — `path/file.tsx:123`
   What's wrong, concrete failure (input/route → bad outcome), and the fix.

### High
### Medium
### Low / nits

### Pre-existing (not introduced here)
- `file:line` — one line each.

### Looks good
- 1–3 genuinely notable bullets.
```

Omit empty sections. If nothing is above Low, say so plainly.

## 6. If asked to fix

Edit only when the user asks (or it's your own just-finished change). Fix
Critical/High first, re-run the gates, re-report.
