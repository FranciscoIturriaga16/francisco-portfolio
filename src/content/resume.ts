export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface EducationItem {
  school: string;
  credential: string;
  date: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

/** Newest first. */
export const experience: ExperienceItem[] = [
  {
    period: "2025",
    role: "Digital Product Design Consultant",
    organization: "Freelance",
    description:
      "Designed presentations and digital materials for healthcare professionals, turning complex information into clear visual narratives.",
  },
  {
    period: "2022",
    role: "Operations and Technology Intern",
    organization: "Banco Venezolano de Crédito · Caracas, Venezuela",
    description:
      "Rotated across operational, technology and client teams within a financial institution, gaining exposure to internal systems, security processes and real operational workflows.",
  },
];

export const education: EducationItem[] = [
  { school: "University of Florida", credential: "B.S. Computer Science", date: "Expected May 2027" },
  { school: "Flatiron School", credential: "Certificate, Digital Product Design (UX/UI)", date: "Nov 2023" },
  { school: "Jacksonville University", credential: "Coursework in Psychology", date: "Dec 2021" },
];

export const skillGroups: SkillGroup[] = [
  { label: "Programming", skills: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "R", "HTML/CSS"] },
  {
    label: "Tools",
    skills: ["React", "React Native", "Expo", "Supabase", "PostgreSQL", "Stripe", "Figma", "GitHub", "Resend"],
  },
  {
    label: "UX and Product",
    skills: ["UX/UI Design", "Wireframing", "Prototyping", "User Flows", "Information Architecture"],
  },
];
