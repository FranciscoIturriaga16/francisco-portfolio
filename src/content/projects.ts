import havenCard from "@/assets/haven-project.png";
import havenMyCommunities from "@/assets/haven-folio-6.png";
import havenEvents from "@/assets/haven-folio-5.png";
import havenUsage from "@/assets/haven-folio-4.png";
import theVersusCard from "@/assets/the-versus-project.png";
import betterSchoolChoiceCard from "@/assets/better-school-choice-laptop.png";
import earlyMoneyHabitsCard from "@/assets/build-early-money-habits.png";
import haydnCard from "@/assets/haydn-project.png";

export type ProjectCategory = "development" | "ux";

/**
 * How an image is framed:
 * "phone" for tall mobile screenshots, "screen" for wide screenshots,
 * "plain" for images that already include their own mockup or need no frame.
 */
export type ImageFrame = "phone" | "screen" | "plain";

export interface ProjectImage {
  src: string;
  alt: string;
  frame: ImageFrame;
}

export interface Project {
  /** Used in the URL: /case-study/:id */
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  status?: string;
  stack: string[];
  role: string;
  featured?: boolean;
  cardImage: ProjectImage;
  /** Shown at the top of the case study. The featured card uses the first two. */
  caseStudyImages: ProjectImage[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  development: "Development",
  ux: "UX design",
};

/** Display order on the homepage and in the case study "Next project" cycle. */
export const projects: Project[] = [
  {
    id: "haven",
    title: "HAVEN",
    summary: "One platform where communities run themselves, and members manage every community from a single account.",
    category: "development",
    status: "In development",
    stack: ["React", "TypeScript", "Supabase"],
    role: "Product design and full stack development",
    featured: true,
    cardImage: { src: havenCard, alt: "HAVEN home screen with quick actions for booking, guests and events", frame: "screen" },
    caseStudyImages: [
      { src: havenMyCommunities, alt: "HAVEN My Communities screen listing the communities a member belongs to", frame: "phone" },
      { src: havenEvents, alt: "HAVEN Community Events screen", frame: "phone" },
      { src: havenUsage, alt: "HAVEN Usage Trends screen with community activity charts", frame: "phone" },
    ],
  },
  {
    id: "the-versus",
    title: "The-Versus",
    summary: "Compare anything, make better decisions.",
    category: "development",
    status: "In development",
    stack: ["React", "TypeScript"],
    role: "Product and UX design, content system design, operations",
    cardImage: { src: theVersusCard, alt: "The-Versus home page with three live soccer matchups and their vote results", frame: "screen" },
    caseStudyImages: [
      { src: theVersusCard, alt: "The-Versus home page with three live soccer matchups and their vote results", frame: "screen" },
    ],
  },
  {
    id: "better-school-choice",
    title: "Better School Choice",
    summary: "Find the perfect school for your children.",
    category: "ux",
    stack: ["UX research", "Figma"],
    role: "UX research and UX/UI design",
    cardImage: { src: betterSchoolChoiceCard, alt: "Better School Choice homepage with school search and saved favorites", frame: "screen" },
    caseStudyImages: [
      { src: betterSchoolChoiceCard, alt: "Better School Choice homepage with school search and saved favorites", frame: "screen" },
    ],
  },
  {
    id: "early-money-habits",
    title: "Build Early Money Habits",
    summary: "Financial education for children.",
    category: "ux",
    stack: ["Figma", "Wireframing"],
    role: "End to end product design",
    cardImage: { src: earlyMoneyHabitsCard, alt: "Build Early Money Habits landing page inviting parents to register", frame: "screen" },
    caseStudyImages: [
      { src: earlyMoneyHabitsCard, alt: "Build Early Money Habits landing page inviting parents to register", frame: "screen" },
    ],
  },
  {
    id: "haydn",
    title: "HAYDN",
    summary: "Be a better writer than yourself.",
    category: "ux",
    stack: ["Android", "Web", "Figma"],
    role: "UX/UI design and prototyping",
    cardImage: { src: haydnCard, alt: "HAYDN marketing website landing page", frame: "screen" },
    caseStudyImages: [{ src: haydnCard, alt: "HAYDN marketing website landing page", frame: "screen" }],
  },
];

export const getProject = (id: string | undefined) => projects.find((project) => project.id === id);
