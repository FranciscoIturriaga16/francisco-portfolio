# Francisco Iturriaga portfolio

Personal portfolio built with Vite, React 18, TypeScript, Tailwind CSS 3 and React Router 6.

## Run locally

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
npm run lint
```

## Where things live

- `src/content/` holds all site copy and data: `site.ts` (name, links, hero, about, contact), `projects.ts`, `caseStudies.ts` and `resume.ts`. Edit these to change text; the components only render them.
- `src/components/home/` holds the homepage sections and `src/components/case-study/` the case study template used by every `/case-study/:id` page.
- `design/` holds the HTML design references. They are not part of the build.

## To do

- Add a GitHub URL in `src/content/site.ts` (`githubUrl`). GitHub links stay hidden while it is empty.
- Optionally add a photo for the About section in `src/content/site.ts` (`photo`).
