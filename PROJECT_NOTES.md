# Project notes
_Last updated: 2026-10-30_

## What this project is
Francisco Iturriaga's personal portfolio: a homepage (hero, projects, about, experience, contact) and one case study page per project.
Stack: Astro 7 (static output, Vite 8 underneath), TypeScript (Astro strict preset), Tailwind CSS 3 through PostCSS, @lucide/astro icons, self hosted Geist and Geist Mono via @fontsource. Every page is generated HTML; the only client JavaScript is the mobile menu and the project filter. No backend or database. Public repo: https://github.com/FranciscoIturriaga16/francisco-portfolio (branch `main`). Deploys to Vercel from `main`; site URL https://franciscoiturriaga.com.

## Current status
- Everything is committed and pushed to `main`. Whether the Vercel deploys succeeded has not been checked. `npm run build`, `npm run check` and `npm run lint` pass.
- All five projects have their final images and case studies, including the redesigned HAVEN images (2026-10-30). The HAVEN case study page ships about 110 to 140 KB of images. Checked with Playwright at 375, 768 and 1440 px: no horizontal scroll, no console errors, images sharp at 2x. Case study pages ship about 85 to 125 KB of images on phones and 85 to 240 KB on desktop.
- Earlier Playwright passes (320 to 1440 px and 844x390) covered the menu, filter, Next project cycle, 404 and `/resume.pdf`.
- `public/resume.pdf` is current (it includes HAVEN and The-Versus).
- The Vercel project may still be set to the Vite preset; it should use the Astro preset with output `dist`.
- The `astro-migration` branch is merged and only exists locally.

## Recent changes
- 2026-10-30: HAVEN refresh. New images (`cover-haven`, `haven-site`, `haven-admin`, `haven-app-*` in `src/assets/`); `haven-project.png` and all `haven-folio-*.png` deleted. Case study gained "Design" and "Business model" sections, an "Email" engineering point, figures under "Key features", a new "Where it stands" and a page note. The featured homepage card now shows `cardImage` edge to edge (4:3) when its frame is `plain`, and falls back to the phone pair otherwise.
- 2026-10-29: New project images (`cover-*`, `versus-*`, `haydn-*`, `bsc-*`, `bemh-*` in `src/assets/`); old images for those four projects deleted. Case study model gained labeled stats (`{ value, label }`), `statements` (quote card list, used for job stories) and a page `note`. Figures now show screens and phones whole instead of cropping (this also changed HAVEN's two screen figures). Cards for the three UX projects are tagged "Flatiron School".
- 2026-10-29: Section spacing variables in `src/index.css` (`--space-section`, `--space-hero-top`, `--space-hero-bottom`, `--space-block`); phones use 64/48/48/64 px. README has a "Tuning spacing" section.
- 2026-10-29: Astro migration. React, React Router, Vite config, `vercel.json` and `components.json` removed. Added a hamburger menu below 768 px, per page meta tags (canonical, Open Graph, Twitter), generated OG images per case study (`/og/<id>.png`), sitemap, styled 404 page, WebP images via `astro:assets`, safe area insets and 44 px tap targets on phones.
- 2026-10-29: Replaced the old favicon with the FI monogram and added `public/og-image.png`; new bio, skills, experience; rewrote the HAVEN and The-Versus case studies.
- 2026-10-13: Redesign: Geist fonts, dark palette as CSS variables, typed content layer in `src/content/`, homepage and reusable case study template.

## Decisions
- All copy and data live in `src/content/` (`site.ts`, `projects.ts`, `caseStudies.ts`, `resume.ts`). Components only render them. Email, LinkedIn, GitHub and resume links come from `site.ts`; homepage SEO is `site.seo`.
- Copy rule for visible text: no em dashes, en dashes or " - " as separators (write "2024 to Present"), and no hyphenated compounds except the name "The-Versus". Check with `grep -rnE "—|–| - " src`.
- Design files stay in `design/`, not `public/`, so they never ship.
- Dark theme only. Colors are RGB channel CSS variables in `src/index.css`, mapped in `tailwind.config.ts` so opacity modifiers work.
- Tailwind stays on v3 through `postcss.config.js` (the `@astrojs/tailwind` integration does not support Astro 7). ESLint stays on 9 with eslint-plugin-astro.
- Astro 7 requires Vite 8; the old rule against upgrading Vite no longer applies. Do not upgrade Tailwind major versions.
- URLs have no trailing slash (`trailingSlash: "never"`). No `vercel.json`: Vercel serves the directory indexes and `404.html` by default.
- Case study pages come from `getStaticPaths` in `src/pages/case-study/[id].astro`. Each case study has an ordered `sections` list; every section sets its own `id` and `title`, numbering follows the list order, and a section renders only the blocks it has.
- Content images are imported (`ImageMetadata`) and rendered with `<Image>`, which outputs WebP with `widths` and `sizes`. Hero and featured card images load eagerly; the rest are lazy. Frames are set per image: `phone`, `screen` or `plain`.
- Project images are exported at 2x: desktop screens 1440 px wide (`screen`), phone screens 390x844 (`phone`), covers 1200x900 with their own device mockups (`plain`). A `plain` first case study image fills the hero box edge to edge, and a `plain` card image keeps its 4:3 shape on the homepage card.
- Figures size their frame to the screenshot's aspect ratio (phones 220 px wide) and never crop. Each figure is a two row subgrid so boxes and captions line up across a row.
- The mobile menu panel is a sibling of `<header>` (the header's backdrop blur would trap a fixed child); `menu.ts` places it under the header, traps focus, locks scroll, closes on Escape, link taps and when the window grows past 768 px.
- No JavaScript fallback: `<html class="no-js">` is swapped to `js` by an inline script. With `no-js` the header shows its links in two rows, the menu button and filter are hidden, and all projects show. Use the `[.no-js_&]:` variant for this.
- Big vertical gaps (between sections, hero top and bottom, above Next project, the footer and case study figures) use the `--space-*` variables in `src/index.css` through arbitrary values like `pt-[var(--space-section)]`. Edit only the four base variables; the `-case`, `-next` and `-figures` ones are derived (equal to the base on phones, original proportions from 768 px up). Spacing inside cards and between small elements stays as Tailwind classes.
- `[hidden]` always wins over display utilities (`src/index.css`); the filter and the menu rely on it.
- Smooth scrolling is CSS (`scroll-behavior`, off for reduced motion) and sections use `scroll-margin-top` to clear the sticky header.
- The same nav is used on every page. The footer note "Thanks for stopping by" appears only on the homepage.
- On mobile, the case study hero hides the third phone. The-Versus cycle and flow diagrams stack with down arrows below 640 px.
- The resume is served from `public/resume.pdf` (`resumePath` in `site.ts`). To update it, overwrite that file; keep the name.
- Projects can have `tags`, a `status` ("In development" or "Paused") and an external `link`. Cards use a stretched title link (`stretchedLink` in `styles.ts`) so they can contain a second link.
- The hero Stack line comes from `caseStudy.stack` when set, otherwise from the card's `stack`.
- The featured homepage card (`FeaturedProjectCard.astro`) shows the card image filling a 4:3 panel when its frame is `plain` (HAVEN uses `cover-haven`); otherwise it shows the first two `phone` case study images. The HAVEN case study hero uses the three app phones (home, activity, bookings).
- Icons are rendered from `public/favicon.svg` with headless Chrome. Keep `Monogram.astro` and the OG image route in sync with that file if the mark changes.

## Next steps
- [ ] In Vercel, set Framework Preset to Astro (build `npm run build`, output `dist`) if it is not already, then check the live site: favicon, link previews, menu on a real phone.
- [ ] On the live site, look over the new HAVEN images and the single phone figures (HAYDN app home and log in) in their wide boxes.
- [ ] Add the GitHub URL in `src/content/site.ts` (`githubUrl`, marked TODO).
- [ ] Optionally add an About photo in `src/content/site.ts` (`photo`).
- [ ] Point the franciscoiturriaga.com domain at Vercel if it is not yet; canonical and OG URLs already use it.

## Gotchas
- A Bash hook rewrites commands through `rtk`, which can mangle output and shell variable expansion. Use `rtk proxy <cmd>` for raw output, and pass explicit arguments.
- `gh` is signed into two GitHub accounts. The repo belongs to `FranciscoIturriaga16`; prefix gh and push commands with `GH_TOKEN=$(gh auth token --user FranciscoIturriaga16)` if one fails with "not found" or a permission error.
- Dev server runs on port 8080 (`npm run dev`). `astro preview` starts in the background and prints its port; stop it with `npx astro preview stop`.
- Type check with `npm run check` (`astro check`).
- `npx prettier` does not reindent `.astro` files here (no Astro plugin); format them by hand.
- Lucide icon components do not accept `hidden`; wrap them in a span to toggle them.
- Satori (OG images) reads WOFF, not WOFF2, and needs a fixed width on text columns or it overflows.
- Smooth scrolling makes Playwright full page screenshots catch the sticky header mid scroll; wait for scrolling to settle in tests.
- Tailwind classes are built from strings in `src/components/common/styles.ts`; keep full class names there so Tailwind can detect them.
- `pdftotext` comes from Homebrew `poppler`; use it to check what `public/resume.pdf` says.
- For layout checks, run `npm run build && npm run preview` and test with Playwright at 375, 768 and 1440 px. Don't run `playwright install`; Chromium is already cached (revision 1248) but the Playwright library is not a project dependency. Install `playwright-core` with `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` into a scratch folder and run scripts from there.
- With `srcset` w descriptors, `img.naturalWidth` is already divided by the device pixel ratio; multiply by the DPR before comparing it with the rendered size in a sharpness check.
