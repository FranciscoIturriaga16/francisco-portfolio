import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from "astro";
import satori from "satori";
import sharp from "sharp";
import { caseStudies } from "@/content/caseStudies";
import { projects } from "@/content/projects";

/**
 * Link preview image for each case study, rendered at build time to /og/<id>.png.
 * Same style as public/og-image.png: dark background, FI monogram, title in Geist Bold, summary in #AEB4C3.
 */
export const getStaticPaths = (() =>
  projects
    .filter((project) => caseStudies.some((caseStudy) => caseStudy.projectId === project.id))
    .map((project) => ({ params: { id: project.id }, props: { project } }))) satisfies GetStaticPaths;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

const root = process.cwd();
// Satori reads WOFF but not WOFF2.
const fontFile = (weight: number) => join(root, `node_modules/@fontsource/geist/files/geist-latin-${weight}-normal.woff`);

export const GET: APIRoute<Props> = async ({ props }) => {
  const { project } = props;
  const [regular, bold, monogram] = await Promise.all([
    readFile(fontFile(400)),
    readFile(fontFile(700)),
    readFile(join(root, "public/favicon.svg")),
  ]);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px 0 120px",
          backgroundColor: "#0B0D14",
          fontFamily: "Geist",
        },
        children: [
          {
            type: "img",
            props: {
              src: `data:image/svg+xml;base64,${monogram.toString("base64")}`,
              width: 220,
              height: 220,
              style: { flexShrink: 0 },
            },
          },
          {
            type: "div",
            props: {
              // Fixed width (1200 minus padding, monogram and gap) so long titles wrap instead of overflowing.
              style: { display: "flex", flexDirection: "column", gap: 24, width: 700 },
              children: [
                {
                  type: "div",
                  props: {
                    style: { fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5, color: "#E8EAF0" },
                    children: project.title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { fontSize: 32, fontWeight: 400, lineHeight: 1.35, color: "#AEB4C3" },
                    children: project.summary,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
