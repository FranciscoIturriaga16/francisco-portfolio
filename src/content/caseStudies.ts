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

export interface Point {
  term: string;
  text: string;
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

/** Every block is optional; a section renders only the blocks it has. */
export interface CaseSection {
  /** Overrides the default heading for this section. */
  title?: string;
  /** Large opening sentence. */
  lead?: string;
  body?: string[];
  quote?: Quote;
  highlights?: Highlight[];
  profiles?: Profile[];
  insights?: Insight[];
  points?: Point[];
  comparison?: Comparison;
  featureGroups?: FeatureGroup[];
  /** Closing paragraph, after lists and cards. */
  outro?: string;
  nextSteps?: string[];
  /** Captioned images shown full width below the section. */
  figures?: Figure[];
}

export interface CaseStudy {
  projectId: string;
  /** One line summary under the title. */
  tagline: string;
  platform: string;
  overview?: CaseSection;
  problem?: CaseSection;
  goal?: CaseSection;
  audience?: CaseSection;
  discovery?: CaseSection;
  solution?: CaseSection;
  results?: CaseSection;
}

export type SectionKey = "overview" | "problem" | "goal" | "audience" | "discovery" | "solution" | "results";

/** Render order and default headings. Sections a project does not have are skipped and numbering adjusts. */
export const sectionOrder: { key: SectionKey; defaultTitle: string }[] = [
  { key: "overview", defaultTitle: "Overview" },
  { key: "problem", defaultTitle: "The problem" },
  { key: "goal", defaultTitle: "The goal" },
  { key: "audience", defaultTitle: "The audience" },
  { key: "discovery", defaultTitle: "Discovery" },
  { key: "solution", defaultTitle: "The solution" },
  { key: "results", defaultTitle: "Where it stands" },
];

export const caseStudies: CaseStudy[] = [
  {
    projectId: "haven",
    tagline:
      "One platform where communities run themselves, and members manage every community they belong to from a single account.",
    platform: "Web app, designed for mobile first",
    problem: {
      lead: "Communities run on a patchwork of tools. Members struggle with scattered communication, outdated calendars, and a separate login for every community.",
      body: [
        "Many neighborhoods, clubs and residential communities depend on outdated tools or third parties. Administrators rely on developers or manual processes to set up facility reservations, events and payments. The result is confusion, wasted time, and missed opportunities for connection.",
      ],
      quote: {
        text: "We juggle spreadsheets, calls, and separate apps. It works, but it is far from simple.",
        attribution: "Community administrator, on managing reservations and updates",
      },
    },
    goal: {
      lead: "Give communities independence and simplicity: create and run a community in minutes, without a developer.",
      highlights: [
        {
          title: "For administrators",
          text: "Facilities, events, pricing, members, guests, dining, announcements and insights, all from one dashboard.",
        },
        {
          title: "For members",
          text: "One account for every community. Switch between them to book courts, join events, invite guests and stay informed.",
        },
      ],
    },
    audience: {
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
    discovery: {
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
    solution: {
      lead: "Everything a community needs, in one cohesive system.",
      featureGroups: [
        {
          label: "Administrators",
          items: [
            "Create and customize a community without a developer",
            "Manage facilities, events, pricing and memberships",
            "Track bookings, payments and activity in real time",
            "Publish announcements, dining updates and guest policies",
          ],
        },
        {
          label: "Members",
          items: [
            "Access every community with one HAVEN account",
            "Switch communities to book, register or invite guests",
            "Manage reservations and payments in one place",
            "Stay informed through announcements and event updates",
            "Optionally create a community of their own",
          ],
        },
      ],
      outro:
        "Every feature was designed to make complex community operations feel simple, with a focus on clarity, autonomy and a sense of connection.",
      figures: [
        {
          image: { src: havenDashboard, alt: "HAVEN admin dashboard with links to manage experiences, members, insights and payments", frame: "screen" },
          captionTitle: "Admin dashboard.",
          caption: "Experiences, members, insights and payments in one view.",
        },
        {
          image: { src: havenBooking, alt: "HAVEN Book Now screen listing facilities and upcoming events", frame: "screen" },
          captionTitle: "Booking.",
          caption: "Facilities and upcoming events, reservable in a tap.",
        },
      ],
    },
    results: {
      lead: "HAVEN is in active development, built to scale from a small tennis club to a large residential community.",
      body: [
        "Administrators get full control through a dashboard that updates in real time; members get an intuitive interface that works well on mobile.",
        "The goal from here: become the operating system for communities, keeping administrators and members organized, connected and engaged.",
      ],
      nextSteps: ["Analytics", "Dining reservations", "Advanced payment management"],
    },
  },
  {
    projectId: "the-versus",
    tagline: "Soccer debates, turned into structured matchups people can vote on, share and revisit.",
    platform: "Web",
    overview: {
      lead: "The-Versus is a soccer debate platform that turns \"who's better?\" arguments into structured matchups people can vote on, share and revisit.",
      body: [
        "Instead of debates disappearing in group chats or comment sections, each matchup becomes a clear, permanent page with a live result.",
      ],
    },
    problem: {
      lead: "Soccer debates are everywhere, but the experience is fragmented.",
      body: [
        "Great matchups get buried, repeated, and rarely end with a clear snapshot of what people actually think. Most online debate spaces also trade structure for noise, so even when the topic is good, the conversation isn't.",
      ],
    },
    goal: {
      lead: "Build a simple product where soccer debates feel clear, fast, shareable and lasting.",
      points: [
        { term: "Clear", text: "A vs B, easy to understand instantly." },
        { term: "Fast", text: "Voting is frictionless." },
        { term: "Shareable", text: "A debate link is worth sending to friends." },
        { term: "Lasting", text: "Debates don't disappear. They become pages people can revisit." },
      ],
      outro:
        "Version 1 focuses on the core experience of publishing, browsing and voting, while keeping the product stable and easy to maintain.",
    },
    audience: {
      body: ["The-Versus is for three kinds of fans."],
      profiles: [
        { title: "Casual fans", text: "People who enjoy quick matchups." },
        { title: "Hardcore fans", text: "People who care about context, eras and \"prime vs prime\" discussions." },
        {
          title: "Creators",
          text: "Creators and community builders who want a debate format that spreads naturally through links.",
        },
      ],
      outro: "A key insight: people don't just want to argue. They want an easy way to package a debate and share it.",
    },
    discovery: {
      body: ["Building and operating The-Versus made a few things clear."],
      insights: [
        { title: "Structure drives engagement", text: "The clearer the matchup, the better the participation." },
        { title: "Visuals matter", text: "Good images aren't decoration. They increase trust and clicks." },
        {
          title: "Reliability is part of UX",
          text: "If publishing and media are inconsistent, the whole product feels unfinished.",
        },
        {
          title: "Discoverability is growth",
          text: "If debates can't be found through search, the platform depends too heavily on manual promotion.",
        },
      ],
    },
    solution: {
      lead: "The product is designed around a few principles.",
      featureGroups: [
        {
          items: [
            "A structured matchup format that reduces friction and keeps debates focused",
            "A browsing experience like a library, where debates can be found and revisited",
            "Sharing built into the flow, so debates travel through group chats and social platforms",
            "A repeatable publishing workflow, streamlined and partly automated with an assistant to stay consistent at scale",
          ],
        },
      ],
    },
    results: {
      title: "The outcome",
      lead: "A clean, repeatable debate experience that is easy to join and easy to share.",
      body: [
        "Instead of isolated arguments, The-Versus produces a growing collection of matchups that people can revisit over time. That sets the foundation for discoverability and monetization later, without adding unnecessary complexity early.",
      ],
    },
  },
  {
    projectId: "better-school-choice",
    tagline: "One place for parents to find, compare and apply to schools, with their children involved in the search.",
    platform: "Responsive website",
    problem: {
      lead: "Searching for schools has always been a difficult task for parents.",
      body: [
        "It is hard to find all the necessary information and resources without the search becoming extremely time consuming.",
      ],
      quote: {
        text: "I couldn't even begin. I sent hundreds of emails, did a dozen visits... it was a part time job!",
        attribution: "Parent, asked how many combined hours the school search took",
      },
    },
    goal: {
      lead: "Help parents find the perfect school for their children without the process being exhausting.",
      body: [
        "The idea is to give parents all the information and resources within one site, plus a collaborative space where they can keep track of their preferences, findings and progress.",
      ],
    },
    audience: {
      body: [
        "The product was first aimed at parents looking for schools for the first time, since the process can be extremely overwhelming for them.",
        "Testing with parents who had already been through the process changed that view. They appreciated a tool that simplifies what they had to go through more than anyone, and liked that it gets children involved and lets them collaborate in the search.",
      ],
    },
    discovery: {
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
    solution: {
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
    results: {
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
  },
  {
    projectId: "early-money-habits",
    tagline: "A responsive website where parents learn about a course that builds money habits in children ages 10 to 12.",
    platform: "Responsive website",
    overview: {
      title: "The project",
      lead: "A responsive wireframe for a website where parents learn about and sign up for a course that builds early money habits in children ages 10 to 12.",
    },
    goal: {
      lead: "Financial literacy is a crucial life skill that traditional education often overlooks.",
      body: [
        "This project gives parents the resources to teach their children about money management from an early age, setting them up for financial success in the future.",
      ],
    },
    solution: {
      title: "Approach",
      lead: "Designing for parents, with their children in mind.",
      body: [
        "The design needed to appeal to parents while staying mindful that the content would ultimately benefit their children. I focused on a clean, trustworthy interface that clearly communicates the value of the program and makes enrollment straightforward.",
      ],
    },
  },
  {
    projectId: "haydn",
    tagline: "An AI writing tool for writers, bloggers and journalists, designed for Android and the web.",
    platform: "Android app and responsive website",
    overview: {
      title: "The project",
      lead: "HAYDN is the AI tool for writers, bloggers and journalists that makes you a better writer than yourself.",
      body: [
        "The brief: design a mobile app for Android, and a website that works well on every device size, from desktop to tablet to mobile.",
      ],
    },
    problem: {
      title: "The challenge",
      lead: "Design a new landing page for the marketing website and prototype new feature ideas for the mobile app.",
      body: ["The design had to work seamlessly across all device sizes while keeping the brand experience consistent."],
    },
    solution: {
      lead: "A responsive design system that adapts to each screen size without losing functionality or usability.",
      body: [
        "The mobile app focused on making writing assistance powered by AI available on the go, while the website highlighted the product's capabilities and benefits.",
      ],
    },
  },
];

export const getCaseStudy = (projectId: string | undefined) =>
  caseStudies.find((caseStudy) => caseStudy.projectId === projectId);
