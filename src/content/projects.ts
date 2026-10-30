import havenCard from "@/assets/haven-project.png";
import havenMyCommunities from "@/assets/haven-folio-6.png";
import havenEvents from "@/assets/haven-folio-5.png";
import havenUsage from "@/assets/haven-folio-4.png";
import theVersusCover from "@/assets/cover-versus.png";
import betterSchoolChoiceCover from "@/assets/cover-bsc.png";
import earlyMoneyHabitsCover from "@/assets/cover-bemh.png";
import haydnCover from "@/assets/cover-haydn.png";

export type ProjectCategory = "development" | "ux";

/**
 * How an image is framed:
 * "phone" for tall mobile screenshots, "screen" for wide screenshots,
 * "plain" for images that already include their own mockup or need no frame.
 */
export type ImageFrame = "phone" | "screen" | "plain";

export interface ProjectImage {
  /** An image imported from src/assets; astro:assets resizes it and converts it to WebP at build time. */
  src: ImageMetadata;
  alt: string;
  frame: ImageFrame;
}

export type ProjectStatus = "In development" | "Paused";

export interface ExternalLink {
  url: string;
  /** Short visible label, for example the domain. */
  label: string;
}

export interface Project {
  /** Used in the URL: /case-study/:id */
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  /** Extra labels shown on the card next to the category. They are not filters. */
  tags?: string[];
  status?: ProjectStatus;
  stack: string[];
  role: string;
  featured?: boolean;
  /** Opens in a new tab, from the card and the case study hero. */
  link?: ExternalLink;
  cardImage: ProjectImage;
  /** Shown at the top of the case study. The featured card uses the first two. */
  caseStudyImages: ProjectImage[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  development: "Development",
  ux: "UX design",
};

/** Status dot color: amber while active, muted when paused. */
export const statusDots: Record<ProjectStatus, "amber" | "muted"> = {
  "In development": "amber",
  Paused: "muted",
};

const versusCoverAlt =
  "The-Versus on a laptop, showing a Messi versus Cristiano matchup voted factor by factor, next to a phone chat where the agent proposes new matchups";
const haydnCoverAlt =
  "HAYDN landing page with a live editor preview on a laptop, next to the HAYDN Android app home with recent documents and their scores";
const bscCoverAlt =
  "Better School Choice search results with filters on a laptop, next to a phone showing an application checklist and deadlines";
const bemhCoverAlt =
  "Build Early Money Habits landing page with a lemonade stand illustration on a laptop, next to a phone showing step two of registration";

/** Display order on the homepage and in the case study "Next project" cycle. */
export const projects: Project[] = [
  {
    id: "haven",
    title: "HAVEN",
    summary: "One platform where communities run themselves, with a mobile app, admin dashboard and integrated payments.",
    category: "development",
    status: "In development",
    stack: ["TypeScript", "React Native", "React", "Supabase", "Stripe"],
    role: "Founder, product design and development",
    featured: true,
    link: { url: "https://havencommunity.app", label: "havencommunity.app" },
    cardImage: { src: havenCard, alt: "HAVEN home screen with quick actions for booking, guests and events", frame: "screen" },
    caseStudyImages: [
      { src: havenMyCommunities, alt: "HAVEN My Communities screen listing the communities a member belongs to", frame: "phone" },
      { src: havenEvents, alt: "HAVEN Community Events screen", frame: "phone" },
      { src: havenUsage, alt: "HAVEN Usage Trends screen with community activity charts", frame: "phone" },
    ],
  },
  {
    id: "better-school-choice",
    title: "Better School Choice",
    summary: "Helping parents find, compare and apply to schools in one place.",
    category: "ux",
    tags: ["Flatiron School"],
    stack: ["UX research", "Usability testing", "Figma"],
    role: "UX research and UX/UI design",
    cardImage: { src: betterSchoolChoiceCover, alt: bscCoverAlt, frame: "plain" },
    caseStudyImages: [{ src: betterSchoolChoiceCover, alt: bscCoverAlt, frame: "plain" }],
  },
  {
    id: "early-money-habits",
    title: "Build Early Money Habits",
    summary: "A live money course for kids ages 10 to 12, and the site parents use to sign up.",
    category: "ux",
    tags: ["Flatiron School"],
    stack: ["Figma", "Wireframing", "Visual design"],
    role: "End to end product design",
    cardImage: { src: earlyMoneyHabitsCover, alt: bemhCoverAlt, frame: "plain" },
    caseStudyImages: [{ src: earlyMoneyHabitsCover, alt: bemhCoverAlt, frame: "plain" }],
  },
  {
    id: "haydn",
    title: "HAYDN",
    summary: "An AI writing assistant for Android and the web.",
    category: "ux",
    tags: ["Flatiron School"],
    stack: ["Android", "Responsive web", "Figma"],
    role: "UX/UI design and prototyping",
    cardImage: { src: haydnCover, alt: haydnCoverAlt, frame: "plain" },
    caseStudyImages: [{ src: haydnCover, alt: haydnCoverAlt, frame: "plain" }],
  },
  {
    id: "the-versus",
    title: "The-Versus",
    summary: "A football debate platform with a collectible card game, run with an AI agent.",
    category: "development",
    tags: ["AI and Automation"],
    status: "Paused",
    stack: ["React", "TypeScript", "Supabase", "Stripe", "OpenClaw"],
    role: "Founder, product design and development",
    cardImage: { src: theVersusCover, alt: versusCoverAlt, frame: "plain" },
    caseStudyImages: [{ src: theVersusCover, alt: versusCoverAlt, frame: "plain" }],
  },
];

export const getProject = (id: string | undefined) => projects.find((project) => project.id === id);
