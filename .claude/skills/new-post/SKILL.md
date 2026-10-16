---
name: new-post
description: Step-by-step workflow to add, translate, or edit a blog post (MDX) on this site — file location per locale, required frontmatter, slug rules, code blocks, images, and how to verify it renders on /[lang]/posts. Use whenever the user asks to write, add, publish, draft, translate, or fix a post/article/entry.
---

# Add or edit a blog post

Posts are MDX files read at build time by `lib/mdx.ts` and listed on the home
page and `/[lang]/posts`. Each locale has its own folder; the **filename is the
slug** and must be identical across locales for a translated post.

## Workflow

### 1. Location and slug
- `_posts/es-MX/<slug>.mdx` and/or `_posts/en-US/<slug>.mdx`.
- Slug: lowercase kebab-case, ASCII only, no dates (`react-solid`, not
  `2023-12-React SOLID`).
- Translations share the slug so the locale switcher maps 1:1.
- Don't put posts in `_posts/` root (`_posts/vue.mdx` is orphaned and never listed).

### 2. Frontmatter (all fields)

```yaml
---
title: "React + Principios Solid"
excerpt: "One or two sentences shown on cards and used as meta description."
coverImage: ""
date: "2023-12-04T14:05:07.322Z"   # ISO 8601; drives sort + display
published: true                     # false = draft, hidden from lists
author:
  name: Jose A. Gonzalez
  picture: ""
ogImage:
  url: ""
locale: "es-MX"                     # must match the folder
---
```

- `published` **and** `locale` are both required for the post to be listed
  (pages filter on `post.published && post.locale === locale`).
- `excerpt` doubles as `description` for SEO unless you also set `description`.
- `author.name` is required — `CardBlog` reads `author.name[0]`.

### 3. Body
- Start with `##` headings; the page renders the `title` as the `<h1>`.
- Code fences with a language (` ```tsx `). `remark-code-titles` supports
  ` ```tsx:path/file.tsx ` for a filename title; highlighting via `mdx-prism`.
- Images: put files under `public/img/posts/<slug>/` and reference
  `/img/posts/<slug>/name.webp`, always with alt text.
- Custom components must be registered in `components/MDX/MDXComponents`.

### 4. Verify
```bash
yarn dev   # open /es-MX/posts and /es-MX/posts/<slug> (and /en-US/...)
```
Check: listed on both the home "Last Posts" section and `/posts`, date shows,
code is highlighted, no console errors. Then `yarn lint`.

## Done means
- File in the right locale folder, frontmatter complete, `locale` matches folder.
- Translation exists (or the user explicitly said single-language).
- Renders and is listed in every locale it was written for.
