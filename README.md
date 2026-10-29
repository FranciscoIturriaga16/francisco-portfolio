# Francisco Iturriaga portfolio

Personal portfolio built with Astro 7, TypeScript and Tailwind CSS 3. Every page is plain HTML generated at build time; the only JavaScript is the mobile menu and the project filter (under 2 KB each, inlined).

## Run locally

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # static site in dist/
npm run preview  # serve dist/
npm run check    # astro check (types)
npm run lint
```

## Where things live

- `src/content/` holds all site copy and data: `site.ts` (name, email, LinkedIn, resume path, hero, about, contact, homepage SEO), `projects.ts`, `caseStudies.ts` and `resume.ts`. Edit these to change text; the components only render them.
- `src/pages/index.astro` is the homepage, `src/pages/case-study/[id].astro` builds one page per case study, and `src/pages/404.astro` is the not found page.
- `src/pages/og/[id].png.ts` renders each case study's link preview image at build time (`/og/<id>.png`).
- `src/layouts/BaseLayout.astro` holds the shared head (meta tags, fonts, favicons), header and footer.
- `src/components/home/` holds the homepage sections and `src/components/case-study/` the case study template.
- `src/scripts/` holds the two client scripts: `menu.ts` and `projectFilter.ts`.
- `src/assets/` holds the project images; Astro converts them to WebP at build time.
- `public/` is copied as is (`resume.pdf`, favicons, `og-image.png`, `robots.txt`).
- `design/` holds the HTML design references. They are not part of the build.

### Adding a project

1. Add the images to `src/assets/` and import them in `src/content/projects.ts`.
2. Add the project to `projects` in `projects.ts`.
3. Add its case study to `caseStudies.ts` with the same `projectId`. The page, the Next project link and the preview image are generated from it.

## Deploy

Vercel builds from `main` with the Astro preset: build command `npm run build`, output directory `dist`.

## To do

- Add a GitHub URL in `src/content/site.ts` (`githubUrl`). GitHub links stay hidden while it is empty.
- Optionally add a photo for the About section in `src/content/site.ts` (`photo`).
