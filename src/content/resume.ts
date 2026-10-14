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
    period: "2024 to Present",
    role: "Independent Developer",
    organization: "Independent projects",
    description:
      "Designing and developing web and mobile apps from concept to implementation, with a focus on product development, usability and scalable architecture.",
  },
  {
    period: "2022 to Present",
    role: "Independent Designer",
    organization: "Product & UX design",
    description:
      "Creating experiences centered on users through research, wireframing, prototyping and interface design.",
  },
  {
    period: "2022",
    role: "Operations and Technology Intern",
    organization: "Banco Venezolano de Crédito · Caracas, Venezuela",
    description:
      "Rotated across operations, technology and client service teams, gaining exposure to internal systems, security processes and everyday financial workflows.",
  },
  {
    period: "Freelance",
    role: "Digital Product Design Consultant",
    organization: "By project",
    description:
      "Designed presentations and digital materials for healthcare professionals, turning complex information into clear, structured visual narratives.",
  },
];

export const education: EducationItem[] = [
  { school: "University of Florida", credential: "B.S. Computer Science", date: "Expected May 2027" },
  { school: "Flatiron School", credential: "Certificate, Digital Product Design (UX/UI)", date: "Nov 2023" },
  { school: "Jacksonville University", credential: "Coursework in Psychology", date: "Dec 2021" },
];

export const skillGroups: SkillGroup[] = [
  { label: "Code", skills: ["TypeScript", "JavaScript", "React", "Python", "C++", "HTML & CSS"] },
  { label: "Tools & services", skills: ["Supabase", "Stripe", "Resend", "GitHub", "Figma", "VS Code"] },
  {
    label: "UX & product",
    skills: ["UX research", "Wireframing", "Prototyping", "User flows", "Information architecture"],
  },
];
