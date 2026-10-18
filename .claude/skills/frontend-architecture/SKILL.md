---
name: frontend-architecture
description: Use this skill whenever you add, move, or refactor non-trivial code in this Next.js 15 App Router site — a new page or route, a home section, a data loader for posts/projects, i18n strings, a provider/context, middleware changes, or deciding where a file goes and whether it is a Server or Client Component. Defines the folder layout, the [lang] routing + dictionary pattern, the MDX content pipeline, and the red flags to avoid.
---

# Frontend Architecture Skill

This is a **static-first personal site / blog** (Next.js 15 App Router, React 19,
TypeScript, Tailwind, MDX via `next-mdx-remote`). There is no backend: content
lives in the repo (`_posts/`, `lib/data.ts`, inline arrays) and is read at build
time in Server Components.

For UI (colors, primitives, spacing) use the `design-system` skill. For adding a
blog post use `new-post`. This skill covers structure, rendering and data flow.

## The layout in one picture

```
src/app/[lang]/            routes — every route is locale-prefixed
  ├─ root-document.tsx     shared <html>: theme + locale providers, <Layout>
  ├─ (home)/               layout.tsx, page.tsx (home sections)
  └─ (info)/               pages with the <PageLayout> header band
       posts/, posts/[slug]/, projects/, [...rest]/ (→ notFound), not-found.tsx
src/middleware.ts          redirects un-prefixed paths to the negotiated locale
src/provider/              client context providers (LocaleProvider, ThemeProvider)

components/                all UI (alias @components/*)
  ├─ ui/                   shadcn primitives (Button, Card, Badge, Avatar)
  ├─ Space/                astronaut theme pieces (Astronaut, Starfield)
  ├─ Surfaces/ Navigation/ dataDisplay/ inputs/ Typhografy/ Icons/ MDX/
  └─ common/home/<section> home-page sections (aboutme, skills, blog, …)
lib/                       pure helpers & content loaders (alias @lib/*)
  ├─ mdx.ts                read/parse _posts (fs; server only)
  ├─ mdx-options.ts        remark/rehype plugins for compileMDX
  ├─ data.ts               static data (experiences)
  └─ types/                shared types
_posts/<locale>/*.mdx      blog content, one folder per locale
locales/<locale>/common.json   UI dictionary
i18n-config.ts, get-dictionary.ts   (alias @root/*)
```

Aliases (tsconfig): `@components/*`, `@lib/*`, `@styles/*`, `@test/*`, `@root/*`.
Use them instead of `../../`. Note `jest.config.js` maps every alias except
`@root/*` — add it there if a tested file needs it.

## Before writing code, answer these

1. **Server or Client Component?** Default to Server (no directive). Add
   `"use client"` only for state, effects, event handlers, browser APIs, or
   `useContext`. Keep the client boundary as low in the tree as possible —
   fetch/read in the server page, pass plain props down.
2. **Where does the data come from?**
   - Blog posts → `lib/mdx.ts` (`getPublishedPosts(locale)` for lists, newest
     first; `getFileBySlug`, `getFiles`) called from a Server Component. Never import `fs`/`lib/mdx`
     into a client component.
   - Static lists (experiences, projects, skills) → a typed constant in
     `lib/` (prefer this over inline arrays in a page).
   - Remote data → `fetch` in a Server Component. `services/RequestFactory.ts`
     is legacy; don't build on it.
3. **Is there user-visible text?** → It must exist in **both**
   `locales/en-US/common.json` and `locales/es-MX/common.json` with the same
   keys. Server components: `await getDictionary(lang)`. Client components:
   `useContext(LocaleContext)?.state`. Don't hard-code copy in one language.
4. **Is it a link?** → Prefix with the locale: `` `/${lang}/posts/${slug}` ``.
   Un-prefixed links work only because middleware redirects them (extra hop).
5. **Does the route need params?** → In Next 15 `params` is a Promise:
   `const { lang, slug } = await params;` and type it as
   `params: Promise<{ lang: Locale; slug: string }>`.
6. **Is it a static route with dynamic segments?** → Export
   `generateStaticParams` returning every `{ lang, … }` combination (use
   `i18n.locales`, not a hand-written list), and `generateMetadata` for
   title/description/OpenGraph.

## Where does it go?

| You're writing…                              | Put it in                                             |
| -------------------------------------------- | ----------------------------------------------------- |
| A route                                      | `src/app/[lang]/(home or info)/<route>/page.tsx`      |
| A section of the home page                   | `components/common/home/<section>/index.tsx`          |
| A reusable visual building block             | the matching `components/<Category>/` folder + barrel |
| A shadcn primitive                           | `components/ui/` (see design-system skill)            |
| Content loading / parsing                    | `lib/mdx.ts` or a new `lib/<thing>.ts`                |
| Static data                                  | `lib/data.ts` (typed)                                 |
| Shared type                                  | `lib/types/<thing>.types.ts`                          |
| Pure util (format date, merge)               | `lib/utils.ts`                                        |
| UI copy                                      | `locales/{en-US,es-MX}/common.json`                   |
| A blog post                                  | `_posts/<locale>/<slug>.mdx` (see new-post skill)     |
| Context/provider                             | `src/provider/<Name>/index.tsx`                       |
| Tests                                        | `__test__/` mirroring the source path                 |

Both route groups render the site `<Layout>` (navbar + footer) through
`root-document.tsx`. `(info)` pages use `<PageLayout title breadcrumbItems>`
for the header band. Unknown paths hit `(info)/[...rest]` → `notFound()` →
the themed `(info)/not-found.tsx`; call `notFound()` for missing content too.

## Conventions

- Pages and section components use **default exports**; primitives in
  `components/ui` use named exports.
- One component per folder as `index.tsx`; CSS Modules sit next to it as
  `<Name>.module.css` (legacy — prefer Tailwind for new code).
- Type props with an explicit `interface`. No `any` — the codebase was
  cleaned of it; keep it that way.
- Dependencies: **yarn only** (`yarn add`, `yarn remove`, `yarn install`); commit
  `yarn.lock`. Never `npm install`. See `CLAUDE.md`.
- ESLint style comes from the shared `@aglaya/eslint-config/next` preset
  (`.eslintrc.json`), enforced by lint-staged. Match the surrounding code
  (2-space indent, double quotes, semicolons) and run `yarn lint --fix`.
- Dates: format with `date-fns` or `lib/utils.formatDate`, and respect the
  current locale rather than hard-coding `"en-US"`/`"es-ES"`.

## Red flags — stop and restructure

- `"use client"` on a page or layout just to read the locale/dictionary.
- `fs`, `path`, or `@lib/mdx` imported from a client component.
- A user-facing string that exists in only one locale file, or hard-coded
  Spanish/English in JSX (`"No tenemos post"`).
- A link without the `/${lang}` prefix.
- A locale list hard-coded (`[ "es-MX", "en-US" ]`) instead of `i18n.locales`.
- `params.lang` read without `await`.
- A new top-level folder with Tailwind classes that isn't listed in
  `tailwind.config.js` `content` — its classes get purged in production.
- Editing `<html>`/`<body>` in a layout: both route groups render the shared
  `src/app/[lang]/root-document.tsx` (theme + locale providers, navbar and
  footer, `lang={lang}`). Change it there, not per layout.
- Relying on `next build` to catch type errors: `next.config.js` sets
  `typescript.ignoreBuildErrors: true`, so run `yarn tsc --noEmit` yourself.
