# Changelog

## v2.1.0 — 2026-10-18

### Features
- Astronaut space theme with light, dark and system modes (#29).
- Monster Codes mascot redrawn as a themed SVG for the hero and 404 page (#31).
- Blog posts compiled on the server (`next-mdx-remote/rsc`) with styled MDX elements: heading
  anchors, tables and task lists (GFM), callouts, and code blocks with light/dark Shiki themes,
  copy button, titles and line highlighting (#30).
- Post header with excerpt, author, localized date and reading time; prev/next navigation (#30).
- Syntax highlighting with rehype-pretty-code; metadata for all pages; App Router migration
  (#18, #20).

### Fixes
- Broken whitebox image in the testing post; inline code rendering as a block (#30).
- Upgraded Next.js, React and next-mdx-remote to patched versions so Vercel deploys again (#28).

### Chores
- yarn is the only package manager (`package-lock.json` removed, `packageManager` pinned) (#30).
- Images converted to WebP, ESLint config upgraded and `any` types removed, Node 24 for Vercel
  (#21, #24, #28).
- Project Claude Code skills and `CLAUDE.md` (#28, #30).
