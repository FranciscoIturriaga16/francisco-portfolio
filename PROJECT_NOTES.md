# Project notes
_Last updated: 2026-10-29_

## What this project is
Francisco Iturriaga's personal portfolio: a homepage (hero, projects, about, experience, contact) and one case study page per project.
Stack: Vite 5, React 18, TypeScript (non-strict), Tailwind CSS 3, React Router 6, lucide-react icons. Static single-page app with no backend or database. Originally generated with Lovable; all Lovable tooling has been removed. Public repo: https://github.com/FranciscoIturriaga16/francisco-portfolio (branch `main`). Not deployed yet; `vercel.json` has the SPA rewrite.

## Current status
- The redesign is done and committed: the homepage matches `design/home-design.html` and every `/case-study/:id` page matches `design/case-study-haven-design.html`.
- `npm run build` and `npm run lint` both pass cleanly.
- Tested in headless Chrome at 375, 768 and 1440 px: no horizontal scroll, no broken images, no console errors. Hash links (for example `/#work`) work when arriving from a case study.

## Recent changes
- 2026-10-29: Replaced `public/resume.pdf` with the new resume. Pushed to GitHub; added `vercel.json` and `.env` ignores.
- 2026-10-13: Fixed mobile layout of the featured card phones and the contact email button; opted in to React Router v7 future flags to silence console warnings.
- 2026-10-13: Removed old components, 48 unused shadcn/ui files, hooks, `App.css`, `placeholder.svg`, Lovable config and 134 unused npm packages. Rewrote README.
- 2026-10-13: Rebuilt the case study page as one reusable template driven by content; restyled the 404 page.
- 2026-10-13: Rebuilt the homepage to match the design.
- 2026-10-13: Added the typed content layer in `src/content/`.
- 2026-10-13: New design system: Geist and Geist Mono fonts, dark palette as CSS variables, glass and glow styles removed.
- 2026-10-13: Moved the design HTML references into `design/`; switched from bun to npm.

## Decisions
- All copy and data live in `src/content/` (`site.ts`, `projects.ts`, `caseStudies.ts`, `resume.ts`). Components only render them. Edit content there, not in JSX.
- Copy rule for visible text: no em dashes, en dashes or " - " as separators (write "2024 to Present"), and no hyphenated compounds except the name "The-Versus". Check with `grep -rnE "—|–| - " src`.
- Design files stay in `design/`, not `public/`, so they never ship.
- Dark theme only. Colors are RGB channel CSS variables in `src/index.css`, mapped in `tailwind.config.ts` so opacity modifiers work.
- GitHub links render only when `site.githubUrl` is non-empty. The About photo is optional (`site.photo`); without it, the text takes the full width.
- Case study sections render in the order of `sectionOrder` in `caseStudies.ts`; missing sections are skipped and the numbering adjusts. Section titles can be overridden per project.
- Image frames are set per image in content: `phone`, `screen` (wide screenshots) or `plain` (images that already include a device mockup).
- `ScrollManager` (`src/components/layout/ScrollManager.tsx`) handles hash scrolling and scroll to top on navigation. No setTimeout hacks. Sections use `scroll-margin-top` to clear the sticky header.
- The same nav is used on every page. The footer note "Thanks for stopping by" appears only on the homepage.
- On mobile, the case study hero hides the third phone, so phones never stack into a long column.
- Do not upgrade major versions of React, React Router, Tailwind or Vite.
- `components.json` is kept so shadcn components can be added later. `src/assets/haven-folio-2.png` is unused but kept.

## Next steps
- [ ] Add the GitHub URL in `src/content/site.ts` (`githubUrl`, marked TODO).
- [ ] Optionally add an About photo in `src/content/site.ts` (`photo`; the comment there explains how).
- [ ] Confirm the About sentence about Summer 2027 internships is still accurate.
- [ ] Import the repo into Vercel (preset Vite, build `npm run build`, output `dist`) and deploy.
- [ ] Optionally compress the large PNGs in `src/assets/` (several are 500 to 800 KB).

## Gotchas
- A Bash hook rewrites commands through `rtk`, which can mangle output and shell variable expansion (for example `npm uninstall $LIST` silently did nothing). Use `rtk proxy <cmd>` for raw output, and pass explicit arguments.
- Dev server runs on port 8080 (`npm run dev`).
- Typecheck with `npx tsc --noEmit -p tsconfig.app.json`.
- Tailwind classes are built from strings in `src/components/common/styles.ts`; keep full class names there so Tailwind can detect them.
