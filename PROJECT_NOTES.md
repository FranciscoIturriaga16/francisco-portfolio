# Project notes
_Last updated: 2026-10-29_

## What this project is
Francisco Iturriaga's personal portfolio: a homepage (hero, projects, about, experience, contact) and one case study page per project.
Stack: Vite 5, React 18, TypeScript (non-strict), Tailwind CSS 3, React Router 6, lucide-react icons. Static single-page app with no backend or database. Originally generated with an AI site builder; all of its tooling and branding has been removed. Public repo: https://github.com/FranciscoIturriaga16/francisco-portfolio (branch `main`). Deploys to Vercel from `main`; `vercel.json` has the SPA rewrite.

## Current status
- Content updated on 2026-10-29: new bio, skills and experience; rewritten HAVEN and The-Versus case studies; FI monogram favicon and social preview image.
- `npm run build` and `npm run lint` pass. Tested in headless Chrome at 375, 768 and 1440 px: no horizontal scroll, no broken images, no console errors; filters and the next project cycle work.
- `public/resume.pdf` is current (it includes HAVEN and The-Versus) and is committed.
- New project images are planned; the existing ones are still in place.
- All work is committed and pushed to `origin/main` (last push 2026-10-29). Whether Vercel picked it up has not been checked from here.

## Recent changes
- 2026-10-29: Replaced the old favicon with the FI monogram (`public/favicon.svg`, `.ico`, `favicon-32.png`, `apple-touch-icon.png`) and added `public/og-image.png`; new meta description; monogram in the nav (`src/components/common/Monogram.tsx`).
- 2026-10-29: New About bio, skill groups and experience (two entries). HAVEN card has a link to havencommunity.app; The-Versus is Paused, tagged "AI and Automation" and listed last.
- 2026-10-29: Case studies are now an ordered `sections` list; added `flows`, `cycle` and `stats` blocks and restyled `points`. Rewrote the HAVEN (What I built, Key features, Engineering, Where it stands) and The-Versus case studies.
- 2026-10-29: Created the public GitHub repo and pushed `main`; added `vercel.json` (SPA rewrite) and `.env` ignores; replaced `public/resume.pdf` with the new resume. Secret scan of full history was clean.
- 2026-10-13: Fixed mobile layout of the featured card phones and the contact email button; opted in to React Router v7 future flags to silence console warnings.
- 2026-10-13: Removed old components, 48 unused shadcn/ui files, hooks, `App.css`, `placeholder.svg`, the site builder's config and 134 unused npm packages. Rewrote README.
- 2026-10-13: Redesign: new design system (Geist fonts, dark palette as CSS variables), typed content layer in `src/content/`, homepage and reusable case study template rebuilt to match `design/home-design.html` and `design/case-study-haven-design.html`; switched from bun to npm.

## Decisions
- All copy and data live in `src/content/` (`site.ts`, `projects.ts`, `caseStudies.ts`, `resume.ts`). Components only render them. Edit content there, not in JSX.
- Copy rule for visible text: no em dashes, en dashes or " - " as separators (write "2024 to Present"), and no hyphenated compounds except the name "The-Versus". Check with `grep -rnE "—|–| - " src`.
- Design files stay in `design/`, not `public/`, so they never ship.
- Dark theme only. Colors are RGB channel CSS variables in `src/index.css`, mapped in `tailwind.config.ts` so opacity modifiers work.
- GitHub links render only when `site.githubUrl` is non-empty. The About photo is optional (`site.photo`); without it, the text takes the full width.
- Each case study has an ordered `sections` list in `caseStudies.ts`; every section sets its own `id` (anchor) and `title`, and numbering follows the list order. A section renders only the blocks it has (`lead`, `body`, `highlights`, `points`, `flows`, `cycle`, `stats`, `comparison` and so on).
- Image frames are set per image in content: `phone`, `screen` (wide screenshots) or `plain` (images that already include a device mockup).
- `ScrollManager` (`src/components/layout/ScrollManager.tsx`) handles hash scrolling and scroll to top on navigation. No setTimeout hacks. Sections use `scroll-margin-top` to clear the sticky header.
- The same nav is used on every page. The footer note "Thanks for stopping by" appears only on the homepage.
- On mobile, the case study hero hides the third phone, so phones never stack into a long column.
- Do not upgrade major versions of React, React Router, Tailwind or Vite.
- The resume is served from `public/resume.pdf` (`resumePath` in `site.ts`). To update it, overwrite that file; keep the name.
- Projects can have `tags` (extra labels, not filters), a `status` of "In development" (amber dot) or "Paused" (muted dot), and an external `link`, shown on the card and as a button in the case study hero. Cards use a stretched title link (`stretchedLink` in `styles.ts`) so they can contain a second link.
- The hero Stack line comes from `caseStudy.stack` when set, otherwise from the card's `stack`.
- Icons are rendered from `public/favicon.svg` with headless Chrome. Keep `Monogram.tsx` in sync with that file if the mark changes.
- `components.json` is kept so shadcn components can be added later. `src/assets/haven-folio-2.png` is unused but kept.

## Next steps
- [ ] Add the GitHub URL in `src/content/site.ts` (`githubUrl`, marked TODO).
- [ ] Optionally add an About photo in `src/content/site.ts` (`photo`; the comment there explains how).
- [ ] Check the live site after the Vercel deploy: favicon (hard refresh), link preview image, HAVEN and The-Versus case studies on a phone.
- [ ] Add new project images (planned).
- [ ] Once the domain is final, make `og:image` and `twitter:image` in `index.html` absolute URLs; some crawlers ignore relative image paths.
- [ ] Optionally compress the large PNGs in `src/assets/` (several are 500 to 800 KB).

## Gotchas
- A Bash hook rewrites commands through `rtk`, which can mangle output and shell variable expansion (for example `npm uninstall $LIST` silently did nothing). Use `rtk proxy <cmd>` for raw output, and pass explicit arguments.
- `gh` is signed into two GitHub accounts. The repo belongs to `FranciscoIturriaga16`; prefix gh and push commands with `GH_TOKEN=$(gh auth token --user FranciscoIturriaga16)` if one fails with "not found" or a permission error.
- Dev server runs on port 8080 (`npm run dev`).
- Typecheck with `npx tsc --noEmit -p tsconfig.app.json`.
- Tailwind classes are built from strings in `src/components/common/styles.ts`; keep full class names there so Tailwind can detect them.
- `pdftotext` comes from Homebrew `poppler` (installed 2026-10-29); use it to check what `public/resume.pdf` says.
- The icon and OG image generator was a throwaway `playwright-core` script outside the repo, driving the installed Google Chrome. To regenerate, render `public/favicon.svg` again the same way (apple touch icon: square #161A27 tile with no rounded corners or border).
- For layout checks, run `npx vite preview --port 4173` and test with headless Chrome at 375, 768 and 1440 px.
