import havenDashboard from "@/assets/haven-folio-1.png";
import havenBooking from "@/assets/haven-folio-3.png";
import versusVote from "@/assets/versus-vote.png";
import versusAgent from "@/assets/versus-agent.png";
import versusSquad from "@/assets/versus-squad.png";
import versusBundle from "@/assets/versus-bundle.png";
import haydnLanding from "@/assets/haydn-landing.png";
import haydnDocs from "@/assets/haydn-docs.png";
import haydnLogin from "@/assets/haydn-login.png";
import bscSearch from "@/assets/bsc-search.png";
import bscCompare from "@/assets/bsc-compare.png";
import bscApply from "@/assets/bsc-apply.png";
import bemhLanding from "@/assets/bemh-landing.png";
import bemhTopics from "@/assets/bemh-topics.png";
import bemhRegister from "@/assets/bemh-register.png";
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

/** A short figure shown as a large number, with an optional label below it. */
export interface Stat {
  value: string;
  label?: string;
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
  stats?: Stat[];
  /** Short quoted statements (job stories, user quotes without attribution), shown as a list of quote cards. */
  statements?: string[];
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
  /** Small muted note after the last section, for example where the screens come from. */
  note?: string;
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
        figures: [
          {
            image: {
              src: versusVote,
              alt: "The-Versus matchup page: Messi versus Cristiano, with a weighted vote for each factor such as peak level, trophies and longevity",
              frame: "screen",
            },
            captionTitle: "Voting.",
            caption: "Each matchup is split into weighted factors, and fans vote on each one.",
          },
        ],
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
        figures: [
          {
            image: {
              src: versusAgent,
              alt: "Telegram chat with the Versus Agent proposing three matchups, with buttons to approve, edit or skip them",
              frame: "phone",
            },
            captionTitle: "Approval over Telegram.",
            caption: "The agent proposes, I approve or edit, and only then it publishes.",
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
        figures: [
          {
            image: {
              src: versusSquad,
              alt: "My Squad page with a Starting XI on a pitch and a card collection grouped by rarity",
              frame: "screen",
            },
            captionTitle: "Squad and collection.",
            caption: "Cards in five rarities, used to build a Starting XI.",
          },
          {
            image: { src: versusBundle, alt: "Legends Bundle screen revealing a legendary card, with the odds of each rarity listed below", frame: "phone" },
            captionTitle: "Bundles.",
            caption: "Weighted random bundles with the odds shown up front.",
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
        stats: [{ value: "About 100 comparisons" }, { value: "5 articles" }, { value: "About six weeks" }],
      },
      {
        id: "paused",
        title: "Why it's paused",
        lead: "I paused The-Versus when I realized the player images raised copyright and licensing issues. Taking it offline was the right call until it can use licensed or original artwork.",
      },
    ],
    note: "Screens recreated in 2026 with sample data and without player photos.",
  },
  {
    projectId: "better-school-choice",
    tagline: "One place for parents to find, compare and apply to schools.",
    platform: "Responsive website",
    sections: [
      {
        id: "problem",
        title: "The problem",
        lead: "Choosing a school is one of the biggest decisions parents make, and the information is scattered everywhere.",
        body: [
          "Parents described the search as a part time job: dozens of websites, emails and visits, with nothing keeping track of what they had found.",
        ],
        quote: {
          text: "I couldn't even begin. I sent hundreds of emails, did a dozen visits... it was a part time job!",
          attribution: "Parent, asked how many combined hours the school search took",
        },
      },
      {
        id: "research",
        title: "Research",
        lead: "Six parent interviews and five competitors.",
        body: [
          "I analyzed six interview transcripts from OurKids and reviewed Schoolahoop, Step Up for Students, Niche, GreatSchools and City Data. What parents shared became the Better School Choice grade, a single rating that sums up what they said mattered most: cost, class size, diversity, reputation and graduation results.",
        ],
        figures: [
          {
            image: {
              src: bscSearch,
              alt: "Better School Choice search page with filters for grade level, type, cost and class size, and a grade on every school in the results",
              frame: "screen",
            },
            captionTitle: "Search.",
            caption: "Filters for what parents asked about, with every school's grade visible at a glance.",
          },
        ],
      },
      {
        id: "job-stories",
        title: "Job stories",
        statements: [
          "When looking for a school for my youngest son, I want to make a list of schools that meet our needs, so I can enroll him and maybe transfer my oldest as well.",
          "When applying for my kid's school, I want to receive all the necessary information, so I can complete applications correctly despite my inexperience.",
          "When searching for schools for our kids, I want to save my search progress, so when my husband gets home from work he can see what I have found.",
          "When choosing a school, I want easy contact with the people who will take care of my son, so I can call them in case of an emergency.",
        ],
      },
      {
        id: "solution",
        title: "The solution",
        lead: "Find, compare and apply, all in the same account.",
        featureGroups: [
          {
            items: [
              "Search with filters and a grade for every school",
              "Favorites that save progress so a partner can pick up where you left off",
              "Side by side comparison with the best value in each row highlighted",
              "Applications with a checklist, deadlines, scholarships and direct contact with the school",
            ],
          },
        ],
        figures: [
          {
            image: {
              src: bscCompare,
              alt: "Comparison page with three schools side by side and the best value in each row highlighted",
              frame: "screen",
            },
            captionTitle: "Compare.",
            caption: "Up to three schools side by side.",
          },
          {
            image: {
              src: bscApply,
              alt: "Application screen on a phone with progress, a checklist of documents and upcoming deadlines",
              frame: "phone",
            },
            captionTitle: "Apply.",
            caption: "Progress, missing documents and deadlines in one place.",
          },
        ],
      },
      {
        id: "testing",
        title: "Usability testing",
        lead: "Three tasks, timed in person.",
        body: [
          "Parents who were searching or had already been through the process logged in, found a school's profile and finished an application while thinking out loud. The targets were under 15 seconds to log in, two clicks to find a profile and three clicks to apply. Users found everything with ease and gave positive feedback; the main fix was making buttons consistent across pages.",
        ],
      },
    ],
    note: "Screens refreshed in 2026 from the original Figma prototype.",
  },
  {
    projectId: "early-money-habits",
    tagline: "A live money course for kids ages 10 to 12, and the website parents use to learn about it and sign up.",
    platform: "Responsive website",
    sections: [
      {
        id: "project",
        title: "The project",
        lead: "Financial literacy is a crucial life skill that school often skips.",
        body: [
          "Build Early Money Habits is a 5 week live course on Zoom for 5th and 6th graders. I designed the website parents use to understand the program, meet the teachers and register their children for a one time fee.",
        ],
        figures: [
          {
            image: {
              src: bemhLanding,
              alt: "Build Early Money Habits landing page with a lemonade stand illustration and a button to register your child",
              frame: "screen",
            },
            captionTitle: "Landing page.",
            caption: "Friendly for kids, clear and trustworthy for the parents who sign up.",
          },
        ],
      },
      {
        id: "audiences",
        title: "Designing for two audiences",
        lead: "Parents decide, kids take the class.",
        body: [
          "The look needed to feel playful to children while giving parents what they need to trust it: the schedule, the price and how their child's data is handled. The site promises education only: no ads, no selling data, and no real investing or accounts opened during the course.",
        ],
      },
      {
        id: "course",
        title: "The course",
        lead: "Six topics built around one lemonade stand.",
        body: [
          "Lessons move from the history of money to saving, a lemonade stand economy, the stock market, compound interest and entrepreneurship, plus parent meetings before the course starts.",
        ],
        figures: [
          {
            image: {
              src: bemhTopics,
              alt: "Course page with six topic cards, from Money 101 to Entrepreneurship, and the dates of two meetings before the course",
              frame: "screen",
            },
            captionTitle: "Topics and schedule.",
            caption: "Each topic and the pre course meetings for parents.",
          },
        ],
      },
      {
        id: "registration",
        title: "Registration",
        lead: "A long form, split into short steps.",
        body: [
          "The original registration asked for parent, child and payment details on one long page. The redesign breaks it into three steps with progress shown at the top and the price always visible.",
        ],
        figures: [
          {
            image: {
              src: bemhRegister,
              alt: "Registration step two of three on a phone, asking for the child's name, birthdate and grade, with the $30 total at the bottom",
              frame: "phone",
            },
            captionTitle: "Registration.",
            caption: "Step two of three, with the total kept on screen.",
          },
        ],
      },
    ],
    note: "Screens refreshed in 2026 from the original wireframes and Figma designs.",
  },
  {
    projectId: "haydn",
    tagline: "An AI writing assistant designed for Android and the web, from landing page to mobile app.",
    platform: "Android app and responsive website",
    sections: [
      {
        id: "project",
        title: "The project",
        lead: "HAYDN helps anyone who writes, from students to bloggers, write clearly and quickly without losing their own voice.",
        body: [
          "The brief was a new landing page for the marketing site, a responsive website for desktop, tablet and phone, and a prototype of new features for the Android app.",
        ],
        figures: [
          {
            image: {
              src: haydnLanding,
              alt: "HAYDN landing page with a live editor preview that scores a cover letter and suggests changes",
              frame: "screen",
            },
            captionTitle: "Landing page.",
            caption: "A live editor preview shows what HAYDN does before anyone signs up.",
          },
        ],
      },
      {
        id: "design",
        title: "The design",
        lead: "One system across every screen size.",
        body: [
          "I designed the desktop, tablet and phone versions of the site together, so features and brand stayed consistent while layouts adapted. The app focused on the two things writers do most: checking a document and drafting something new.",
        ],
        figures: [
          {
            image: {
              src: haydnDocs,
              alt: "HAYDN app home with a card to upload a file or paste text, and recent documents with their scores below",
              frame: "phone",
            },
            captionTitle: "App home.",
            caption: "Uploading a document is the main action, with recent work and scores below.",
          },
        ],
      },
      {
        id: "testing",
        title: "Usability testing",
        lead: "Two users, two tasks: sign in, then upload a file for correction.",
        stats: [
          { value: "16 s and 20 s", label: "to sign in" },
          { value: "13 s and 19 s", label: "to upload a file" },
          { value: "3 to 5 clicks", label: "per task" },
        ],
        outro:
          'Both users finished both tasks and gave positive feedback, but they struggled to find how to log in. One assumed "Get started" was only for new users. The other tried to start a new document when asked to upload one, and missed the floating button near the bottom navigation.',
      },
      {
        id: "changes",
        title: "What changed",
        featureGroups: [
          {
            items: [
              "A Log in button on the front page, as visible as sign up",
              "Uploading a document became the main action on the app home",
              "A larger, brighter floating button placed above the navigation",
              'A clearer "New" button in Documents',
            ],
          },
        ],
        figures: [
          {
            image: {
              src: haydnLogin,
              alt: "HAYDN welcome back screen with Log in and Sign up as equal tabs above the email and password fields",
              frame: "phone",
            },
            captionTitle: "Log in.",
            caption: "Log in and sign up now have equal weight.",
          },
        ],
      },
    ],
    note: "Screens refreshed in 2026 from the original Figma prototype.",
  },
];

export const getCaseStudy = (projectId: string | undefined) =>
  caseStudies.find((caseStudy) => caseStudy.projectId === projectId);
