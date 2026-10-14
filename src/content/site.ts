export interface SiteImage {
  src: string;
  alt: string;
}

export interface SiteContent {
  name: string;
  email: string;
  linkedinUrl: string;
  /** Leave empty to hide every GitHub link on the site. */
  githubUrl: string;
  resumePath: string;
  /** Optional portrait for the About section. When null, the text takes the full width. */
  photo: SiteImage | null;
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
  };
  about: {
    paragraphs: string[];
    languages: string;
  };
  contact: {
    title: string;
    text: string;
  };
  footerNote: string;
}

export const site: SiteContent = {
  name: "Francisco Iturriaga",
  email: "iturriaga.francisco@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/francisco-iturriaga-515080289",
  githubUrl: "", // TODO: add GitHub URL
  resumePath: "/resume.pdf",
  // To add a photo: put the file in src/assets, import it at the top of this file,
  // then set photo: { src: myPhoto, alt: "Francisco Iturriaga" }.
  photo: null,
  hero: {
    badge: "CS @ University of Florida · Class of 2027",
    title: "Hi, I'm Francisco. I design and build products people",
    titleAccent: "enjoy using.",
    subtitle:
      "Designer and developer working across the whole process, from user research and prototypes in Figma to shipping React apps.",
  },
  about: {
    paragraphs: [
      "I'm a Computer Science student at the University of Florida with a UX/UI certificate from Flatiron School. I like owning a product from start to finish: talking to users, designing the flows, then writing the code.",
      "Right now I'm building HAVEN and The-Versus, and I'm open to software engineering and product design internships for Summer 2027.",
    ],
    languages: "Fluent in English and Spanish.",
  },
  contact: {
    title: "Have a project or role in mind? Let's talk.",
    text: "I'm always open to new projects, creative ideas, and opportunities to be part of your vision.",
  },
  footerNote: "Thanks for stopping by",
};
