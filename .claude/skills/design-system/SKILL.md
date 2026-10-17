---
name: design-system
description: Use this skill when generating or modifying UI in this site — new pages, home sections, cards, buttons, badges, blog/MDX rendering, navbar/footer, or any time you'd reach for a Tailwind color, a hex code, a CSS Module, or a new component. Enforces the shadcn token + primitive contract (components/ui, cn, CVA) and the a11y rules.
---

# Design System Skill

Invoked whenever you write or refactor UI here. The site is mid-transition from
**CSS Modules + raw CSS variables** (`styles/globals.css`, `*.module.css`) to
**Tailwind + shadcn/ui** (`components.json`, style `new-york`, base color zinc,
icons `lucide-react`). **New UI uses Tailwind + shadcn. Legacy CSS Modules move
when you touch them** — never add new `.module.css` files.

## Before writing any UI, check this

1. **Is there already a primitive?** Look in `components/ui/` (`Button`,
   `Card*`, `Badge`, `Avatar*`) and the composed blocks in `components/`
   (`Wrapper`, `Container`, `PageLayout`, `CardBlog`, `CardProject`,
   `Heading`, `Text`, `Timeline`, `Tooltip`, `SkillsIcon`, `CodeBlock`).
   Reuse before creating.
2. **Need a new shadcn primitive?** Add it with
   `npx shadcn@latest add <component>` so it lands in `components/ui/` with
   the repo's aliases, then run `yarn lint --fix`.
3. **About to type a hex code, `slate-*`, `blue-500`, or `style={{ color }}`?**
   Stop. Use a semantic token.
4. **Rendering a list that might be empty?** Render a real empty state
   (localized message), never a blank area or a hard-coded single-language
   string.
5. **Is it a page in `(info)`?** Wrap it in `<PageLayout title breadcrumbItems>`.
   Home sections go inside `<Wrapper>`.

## Token cheat-sheet (shadcn, mapped in `tailwind.config.js`)

> ⚠️ **Known gap:** the shadcn HSL variables these tokens point to
> (`--background`, `--foreground`, `--primary`, `--card`, `--muted`,
> `--border`, `--ring`, `--radius`, …) are **not defined** in
> `styles/globals.css` yet, so `bg-primary`, `bg-card`, `rounded-lg`, etc.
> currently resolve to nothing. Before relying on a token, check it exists; if
> the task touches theming, add the `:root` and `.dark` blocks
> (`npx shadcn@latest init` output for base color zinc) first and say so.

```
Surfaces:  bg-background, bg-card, bg-muted, bg-popover, bg-accent
Text:      text-foreground, text-muted-foreground, text-card-foreground,
           text-primary, text-primary-foreground
Brand:     bg-primary, bg-secondary (+ -foreground pairs)
State:     bg-destructive text-destructive-foreground
Borders:   border-border, border-input, ring-ring
Charts:    chart-1 … chart-5
Radius:    rounded-lg / md / sm  (driven by --radius)
Fonts:     font-roboto, font-poppins, font-cousine
Alpha:     bg-primary/90, ring-ring/40
```

Legacy brand colors (`blue`, `blue-dark`, `blue-contrast`, `blue-ligth`,
`black`, `black-contrast`, `grey`, `light-grey`, `neutral`) exist as Tailwind
colors mapped to raw CSS vars. Use them only when matching existing branded
sections; for anything new prefer the semantic tokens above. If you need a new
semantic color, add the HSL var to `:root` (and `.dark`) in
`styles/globals.css` **and** the mapping in `tailwind.config.js`.

NEVER: hex codes in JSX, inline `style` colors, new `.module.css`, raw Tailwind
palettes for meaning (`text-red-500` for errors → `text-destructive`).
Existing `bg-slate-900` / `text-slate-*` in `PageLayout` and the post page are
debt — migrate to tokens when you touch them.

## Component contract

- Class merging: always `cn(...)` from `@lib/utils`.
- Variants: CVA (`class-variance-authority`) when there's more than one shape,
  exported alongside the component (`buttonVariants`).
- Primitives: `React.forwardRef`, `displayName` set, spread `...props`,
  accept `className`.
- Polymorphism: `asChild` + `@radix-ui/react-slot` (see `components/ui/button.tsx`).
- Icons: `lucide-react`; brand/tech logos live in `components/Icons/`.
- Import primitives by path: `import { Card, CardHeader } from "@components/ui/card";`
  Composed blocks via their category barrel: `import { Wrapper, CardBlog } from "@components/Surfaces";`

## When extending vs. composing

- **Compose** inside the feature/section folder when used in 1–2 places.
- **Promote to `components/`** (category folder + barrel export) when used in
  3+ places or it encapsulates a11y/formatting concerns.

## Dark mode

`darkMode: ["class"]`. Every surface/text you add must look right in both
themes — semantic tokens handle this; raw colors need an explicit `dark:` pair.

## MDX / blog content

Post bodies render through `components/MDX/custom-mdx` → `MDXComponents`.
Style post elements by mapping them in `MDXComponents`, not with global CSS.
`prose` classes require `@tailwindcss/typography`, which is **not** installed —
either install it (surface the tradeoff) or style via `MDXComponents`.

## A11y must-haves

- Interactive = `<button>`, `<a>`/`<Link>`, or a Radix primitive. Never
  `<div onClick>`.
- Icon-only buttons/links need `aria-label`; decorative icons `aria-hidden`.
- Images: `next/image` with `alt`, `width`/`height` (or `fill` + sized parent).
- Keep `focus-visible:ring-*` styles; never `outline-none` without a replacement.
- One `<h1>` per page (`PageLayout` already renders it); don't skip levels.
- Color is never the only signal.

## Output expectations when asked for UI

1. Name the primitives you used and why.
2. Call out anything new you had to create and justify it (3+ uses rule).
3. If you added a token, show the diff to `globals.css` + `tailwind.config.js`.
4. No new dependencies without surfacing the tradeoff.
