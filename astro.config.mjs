import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://franciscoiturriaga.com",
  output: "static",
  // URLs have no trailing slash (/case-study/haven); canonical links and the sitemap use the same form.
  trailingSlash: "never",
  integrations: [sitemap()],
  server: { port: 8080 },
  // Tailwind 3 runs through PostCSS (postcss.config.js), so no Astro integration is needed.
});
