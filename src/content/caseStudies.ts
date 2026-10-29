import havenDashboard from "@/assets/haven-folio-1.png";
import havenBooking from "@/assets/haven-folio-3.png";
import bscWireframes from "@/assets/better-school-choice-wireframes.png";
import bscMobile from "@/assets/better-school-choice-mobile.png";
import bscMockup from "@/assets/better-school-choice-mockup.png";
import type { ProjectImage } from "./projects";

export interface Quote {
  text: string;
  attribution: string;
  /** Small label above the quote. Defaults to "From a user interview". */
  source?: string;
}

/** Small card with a title and a sentence (goal highlights). */
export interface Highlight {
  title: string;
  text: string;
}

/** Larger card describing a group of people (audience). */
export interface Profile {
  eyebrow?: string;
  title: string;
  text: string;
  /** Colors the eyebrow with the accent. */
  primary?: boolean;
}

export interface Insight {
  title: string;
  text: string;
}

/** A labeled row, for example one part of a system. */
export interface Point {
  term: string;
  text: string;
}

export interface FlowStep {
  title: string;
  text: string;
}

/** A repeating workflow, drawn as steps joined by arrows. */
export interface Flow {
  label: string;
  steps: FlowStep[];
}

export interface Comparison {
  title: string;
  columns: [string, string, string];
  rows: { name: string; values: [string, string]; highlight?: boolean }[];
  note?: string;
}

export interface FeatureGroup {
  label?: string;
  items: string[];
}

export interface Figure {
  image: ProjectImage;
  captionTitle: string;
  caption: string;
}

/** A numbered case study section. Every block is optional; a section renders only the blocks it has. */
export interface CaseSection {
  /** Anchor id, unique within the page. */
  id: string;
  title: string;
  /** Large opening sentence. */
  lead?: string;
  body?: string[];
  quote?: Quote;
  highlights?: Highlight[];
  profiles?: Profile[];
  insights?: Insight[];
  points?: Point[];
  flows?: Flow[];
  /** Four steps of a loop, drawn clockwise with the last step leading back to the first. */
  cycle?: string[];
  /** Short figures shown as large numbers. */
  stats?: string[];
  comparison?: Comparison;
  featureGroups?: FeatureGroup[];
  /** Closing paragraph, after lists and cards. */
  outro?: string;
  /** Captioned images shown full width below the section. */
  figures?: Figure[];
}

export interface CaseStudy {
  projectId: string;
  /** One line summary under the title. */
  tagline: string;
  platform: string;
  /** Stack shown in the hero. Defaults to the project card's stack. */
  stack?: string;
  /** Rendered in this order and numbered from 01. */
  sections: CaseSection[];
}

export const caseStudies: CaseStudy[] = [
  {
    projectId: "haven",
    tagline:
      "One platform where communities run themselves, and members manage every community they belong to from a single account.",
    platform: "iOS, Android and web",
    stack: "TypeScript, React Native, Expo, React, Astro, Supabase, Stripe Connect",
    sections: [
      {
        id: "problem",
        title: "The problem",
        lead: "Communities run on a patchwork of tools. Members struggle with scattered communication, outdated calendars, and a separate login for every community.",
        body: [
          "Many neighborhoods, clubs and residential communities depend on outdated tools or third parties. Administrators rely on developers or manual processes to set up facility reservations, events and payments. The result is confusion, wasted time, and missed opportunities for connection.",
        ],
        quote: {
          text: "We juggle spreadsheets, calls, and separate apps. It works, but it is far from simple.",
          attribution: "Community administrator, on managing reservations and updates",
        },
      },
      {
        id: "goal",
        title: "The goal",
        lead: "Give communities independence and simplicity: create and run a community in minutes, without a developer.",
        highlights: [
          {
            title: "For administrators",
            text: "Households, dues, facilities, events, guests, announcements and documents, all from one dashboard.",
          },
          {
            title: "For members",
            text: "One account for every community. Switch between them to book facilities, join events, invite guests and stay informed.",
          },
        ],
      },
      {
        id: "audience",
        title: "The audience",
        body: ["Two groups that depend on each other."],
        profiles: [
          {
            eyebrow: "Primary",
            primary: true,
            title: "Administrators",
            text: "Property managers, club administrators and HOA boards who need a professional way to run their community without outside technical help.",
          },
          {
            eyebrow: "Secondary",
            title: "Members",
            text: "People who take part in daily community life and want one easy, unified way to interact with every community they belong to.",
          },
        ],
      },
      {
        id: "discovery",
        title: "Discovery",
        body: [
          "Early research and interviews, a review of competing platforms, and low fidelity prototypes tested with both user groups surfaced three insights.",
        ],
        insights: [
          {
            title: "Admins are frustrated by fragmentation",
            text: "Many rely on disconnected platforms or expensive websites built to order.",
          },
          {
            title: "Members want everything in one place",
            text: "Bookings, events and announcements, convenient and accessible.",
          },
          {
            title: "Flexibility and control are key",
            text: "Admins want to manage everything themselves; members want a modern experience that feels effortless.",
          },
        ],
        comparison: {
          title: "Where existing tools stop",
          columns: ["Platform", "Tools for one organization", "Many communities, one account"],
          rows: [
            { name: "ClubExpress", values: ["Yes", "No"] },
            { name: "Mindbody", values: ["Yes", "No"] },
            { name: "CourtReserve", values: ["Yes", "No"] },
            { name: "HAVEN", values: ["Yes", "Yes, the core idea"], highlight: true },
          ],
          note: "None of them let people manage several communities from one account. That gap became the foundation of how HAVEN is structured.",
        },
      },
      {
        id: "what-i-built",
        title: "What I built",
        lead: "HAVEN is four products that share one TypeScript core: a member app for iOS and Android, an admin dashboard for running the community, a marketing site with public community pages, and secure payment pages.",
        figures: [
          {
            image: { src: havenDashboard, alt: "HAVEN admin dashboard with links to manage experiences, members, insights and payments", frame: "screen" },
            captionTitle: "Admin dashboard.",
            caption: "Experiences, members, insights and payments in one view.",
          },
          {
            image: { src: havenBooking, alt: "HAVEN Book Now screen listing facilities and upcoming events", frame: "screen" },
            captionTitle: "Booking.",
            caption: "Facilities and upcoming events, ready to book.",
          },
        ],
      },
      {
        id: "features",
        title: "Key features",
        highlights: [
          {
            title: "Households and dues",
            text: "Households are the billing unit. Admins set recurring dues with reminders and grace periods, and members pay by card, bank or offline where the community allows it.",
          },
          {
            title: "Facility bookings",
            text: "Hours, capacity, prices and booking limits per facility. A slot is held for a few minutes while a member pays, so two people can never book the same time.",
          },
          {
            title: "Guest passes",
            text: "Members invite guests, who receive a QR pass by email styled in the community's colors.",
          },
          { title: "Events", text: "Recurring events with registration, waitlists and tickets." },
          {
            title: "Activity",
            text: "One calendar showing bookings, events, dues and announcements across every community a member belongs to.",
          },
          {
            title: "Announcements and documents",
            text: "Scheduled announcements for the whole community or one household, plus bylaws, rules and forms in one place.",
          },
        ],
      },
      {
        id: "engineering",
        title: "Engineering",
        points: [
          {
            term: "Backend",
            text: "Supabase with PostgreSQL, more than 140 versioned migrations, 27 Edge Functions, role based access and scheduled jobs for dues, notifications and refunds.",
          },
          {
            term: "Payments",
            text: "Stripe Connect sends money directly to each community, with itemized fees. If a facility closes or a paid slot is no longer available, the member is refunded in full automatically, with retries and webhook reconciliation behind it.",
          },
          {
            term: "Quality",
            text: "Automated tests across the database, server functions, admin dashboard and mobile app.",
          },
        ],
      },
      {
        id: "status",
        title: "Where it stands",
        lead: "HAVEN is in active development and preparing to launch with its first communities.",
        body: ["The marketing site is live at havencommunity.app."],
      },
    ],
  },
  {
    projectId: "the-versus",
    tagline: "Football debates turned into comparisons fans vote on, with a collectible card game and content run by an AI agent.",
    platform: "Web",
    stack: "React, TypeScript, Supabase, Stripe, OpenClaw",
    sections: [
      {
        id: "idea",
        title: "The idea",
        lead: "Football fans never stop arguing about who was better. The-Versus turned those debates into head to head comparisons that fans vote on, broken down into the factors that matter.",
      },
      {
        id: "agent",
        title: "The agent workflow",
        lead: "After building the platform, I used it to learn how AI agents and automated workflows work in practice. I set up an agent with OpenClaw that ran two loops, with me as the editor.",
        flows: [
          {
            label: "Comparisons",
            steps: [
              {
                title: "The agent proposes",
                text: "A few times a day, the agent messaged me on Telegram with three new comparisons.",
              },
              {
                title: "I approve, it publishes",
                text: "Nothing went live until I approved it; approved comparisons were published automatically for fans to vote on.",
              },
            ],
          },
          {
            label: "Articles",
            steps: [
              { title: "The agent pitches", text: "Every day the agent pitched article ideas." },
              {
                title: "We shape it together",
                text: "When one interested me, I sent it my opinions in long messages, and we went back and forth on how to organize them until we agreed. Then it published the article.",
              },
            ],
          },
        ],
      },
      {
        id: "card-game",
        title: "The card game",
        highlights: [
          { title: "Player database", text: "Players with images and career accomplishments." },
          { title: "Collectible cards", text: "Cards in different rarity levels, pulled from weighted random bundles." },
          { title: "Marketplace", text: "Users could buy cards and bundles." },
          {
            title: "Squads and challenges",
            text: "Users built squads from their cards and played challenges like Bingo and Starting XI.",
          },
        ],
      },
      {
        id: "loop",
        title: "How content and game connect",
        lead: "Every piece of content fed the game.",
        body: [
          "Owning a player's card earned tokens whenever that player won a comparison, and an article about a player released special rarity cards of that player.",
        ],
        cycle: ["Agent creates content", "Fans vote", "Card owners earn tokens", "Articles release special cards"],
      },
      {
        id: "business",
        title: "Business",
        lead: "Real payments through Stripe for card bundles and a Pro subscription.",
      },
      {
        id: "learned",
        title: "What I learned",
        lead: "At first the agent kept getting things wrong.",
        body: [
          "Writing better prompts was only part of the fix: I had to simplify the site's flow and teach the agent the process step by step until its results were consistently good. An agent is only as good as the process it runs inside, and keeping a human approval step is what made it safe to automate.",
        ],
      },
      {
        id: "results",
        title: "Results",
        stats: ["About 100 comparisons", "5 articles", "About six weeks"],
      },
      {
        id: "paused",
        title: "Why it's paused",
        lead: "I paused The-Versus when I realized the player images raised copyright and licensing issues. Taking it offline was the right call until it can use licensed or original artwork.",
      },
    ],
  },
  {
    projectId: "better-school-choice",
    tagline: "One place for parents to find, compare and apply to schools, with their children involved in the search.",
    platform: "Responsive website",
    sections: [
      {
        id: "problem",
        title: "The problem",
        lead: "Searching for schools has always been a difficult task for parents.",
        body: [
          "It is hard to find all the necessary information and resources without the search becoming extremely time consuming.",
        ],
        quote: {
          text: "I couldn't even begin. I sent hundreds of emails, did a dozen visits... it was a part time job!",
          attribution: "Parent, asked how many combined hours the school search took",
        },
      },
      {
        id: "goal",
        title: "The goal",
        lead: "Help parents find the perfect school for their children without the process being exhausting.",
        body: [
          "The idea is to give parents all the information and resources within one site, plus a collaborative space where they can keep track of their preferences, findings and progress.",
        ],
      },
      {
        id: "audience",
        title: "The audience",
        body: [
          "The product was first aimed at parents looking for schools for the first time, since the process can be extremely overwhelming for them.",
          "Testing with parents who had already been through the process changed that view. They appreciated a tool that simplifies what they had to go through more than anyone, and liked that it gets children involved and lets them collaborate in the search.",
        ],
      },
      {
        id: "discovery",
        title: "Discovery",
        body: [
          "I studied six interview transcripts from OurKids. What those parents shared led me to create the Better School Choice Grading System, which is how schools are ranked and rated within the site.",
          "I also reviewed five competitors: Schoolahoop, Step Up for Students, Niche, GreatSchools.org and the City Data website. Studying them confirmed which features were necessary, let me combine ideas from different sites such as the scholarship system, and showed me where there was room to innovate.",
          "After building a low fidelity prototype, I tested it with parents and got great feedback on both the prototype and the idea itself. It became clear that all parents would appreciate this product and the chance to involve their children in the search.",
        ],
        figures: [
          {
            image: { src: bscWireframes, alt: "Better School Choice wireframes and research notes", frame: "plain" },
            captionTitle: "Wireframes and research.",
            caption: "Early layouts for the main flows.",
          },
        ],
      },
      {
        id: "solution",
        title: "The solution",
        lead: "All the tools in the same site and the same account.",
        featureGroups: [
          {
            items: [
              "Find schools and build a list of favorites",
              "Apply to, contact and compare schools",
              "Keep track of information and progress in an organized way",
              "Sign in on several devices, so parents and children can research at the same time and see what the others found",
            ],
          },
        ],
        outro: "These were the features that mattered most, without adding extras to an already overwhelming process.",
        figures: [
          {
            image: { src: bscMobile, alt: "Better School Choice mobile screens: homepage, favorites and a school profile", frame: "plain" },
            captionTitle: "Mobile screens.",
            caption: "Homepage, favorites and a school profile.",
          },
        ],
      },
      {
        id: "result",
        title: "The result",
        lead: "The main goal was efficiency.",
        body: [
          "The design can seem simple, but there is a purpose behind it. I considered even the slightest waste of time an image can create, and the challenge was keeping the site friendly while avoiding extra animations, illustrations and imagery. In the end, the site strikes a balance that keeps the focus on the task at hand.",
        ],
        figures: [
          {
            image: { src: bscMockup, alt: "Better School Choice mockups of the Flatiron School page and the homepage", frame: "plain" },
            captionTitle: "Final design.",
            caption: "The Flatiron School page and the homepage.",
          },
        ],
      },
    ],
  },
  {
    projectId: "early-money-habits",
    tagline: "A responsive website where parents learn about a course that builds money habits in children ages 10 to 12.",
    platform: "Responsive website",
    sections: [
      {
        id: "project",
        title: "The project",
        lead: "A responsive wireframe for a website where parents learn about and sign up for a course that builds early money habits in children ages 10 to 12.",
      },
      {
        id: "goal",
        title: "The goal",
        lead: "Financial literacy is a crucial life skill that traditional education often overlooks.",
        body: [
          "This project gives parents the resources to teach their children about money management from an early age, setting them up for financial success in the future.",
        ],
      },
      {
        id: "approach",
        title: "Approach",
        lead: "Designing for parents, with their children in mind.",
        body: [
          "The design needed to appeal to parents while staying mindful that the content would ultimately benefit their children. I focused on a clean, trustworthy interface that clearly communicates the value of the program and makes enrollment straightforward.",
        ],
      },
    ],
  },
  {
    projectId: "haydn",
    tagline: "An AI writing tool for writers, bloggers and journalists, designed for Android and the web.",
    platform: "Android app and responsive website",
    sections: [
      {
        id: "project",
        title: "The project",
        lead: "HAYDN is the AI tool for writers, bloggers and journalists that makes you a better writer than yourself.",
        body: [
          "The brief: design a mobile app for Android, and a website that works well on every device size, from desktop to tablet to mobile.",
        ],
      },
      {
        id: "challenge",
        title: "The challenge",
        lead: "Design a new landing page for the marketing website and prototype new feature ideas for the mobile app.",
        body: ["The design had to work seamlessly across all device sizes while keeping the brand experience consistent."],
      },
      {
        id: "solution",
        title: "The solution",
        lead: "A responsive design system that adapts to each screen size without losing functionality or usability.",
        body: [
          "The mobile app focused on making writing assistance powered by AI available on the go, while the website highlighted the product's capabilities and benefits.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (projectId: string | undefined) =>
  caseStudies.find((caseStudy) => caseStudy.projectId === projectId);
