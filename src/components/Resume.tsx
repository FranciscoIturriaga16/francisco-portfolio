import { Download } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      role: "Independent Developer",
      company: "Independent Projects",
      period: "2024 – Present",
      description: "Designing and developing user-focused web and mobile applications from concept to implementation, with an emphasis on product development, usability, and scalable architecture.",
    },
    {
      role: "Independent Designer",
      company: "Product & UX Design",
      period: "2022 – Present",
      description: "Creating user-centered digital experiences through research, wireframing, prototyping, and interface design, focusing on clarity, accessibility, and thoughtful interaction.",
    },
    {
      role: "Operations and Technology Intern",
      company: "Banco Venezolano de Crédito",
      location: "Caracas, Venezuela",
      period: "2022",
      description: "Rotated across operational, technology, and client-facing teams, gaining exposure to internal systems, security processes, and real-world financial workflows.",
    },
    {
      role: "Digital Product Design Consultant",
      company: "Freelance",
      period: "Project-Based",
      description: "Designed presentations and digital materials for healthcare professionals, translating complex information into clear, structured visual narratives.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Florida",
      location: "Gainesville, FL",
      period: "Expected May 2027",
    },
    {
      degree: "Certificate in Digital Product Design (UX UI)",
      school: "Flatiron School",
      location: "New York",
      period: "11/2023",
    },
    {
      degree: "Undergraduate Coursework in Psychology",
      school: "Jacksonville University",
      location: "Jacksonville, FL",
      period: "12/2021",
    },
  ];

  const skillCategories = [
    {
      label: "Programming",
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "React"],
    },
    {
      label: "Tools",
      skills: ["Figma", "GitHub", "Visual Studio Code", "Supabase", "Stripe", "Resend"],
    },
    {
      label: "UX & Product",
      skills: ["UX UI Design", "Wireframing", "Prototyping", "User Flows", "Information Architecture"],
    },
    {
      label: "Languages",
      skills: ["English", "Spanish"],
    },
  ];

  return (
    <section id="resume" className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Resume</h2>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 mt-2 text-sm sm:text-base text-foreground underline hover:text-br1 transition-colors">
            View Complete Resume <Download size={16} />
          </a>
        </div>
        
        <div className="space-y-12">
        <div className="animate-slide-up">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-br1">Experience</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {experience.map((job, index) => (
                <div key={index} className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-lg sm:text-xl font-semibold">{job.role}</h4>
                  <p className="text-base sm:text-lg text-br1">{job.company}{job.location ? ` | ${job.location}` : ''} | {job.period}</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-br1">Education</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-lg sm:text-xl font-semibold">{edu.school}</h4>
                  <p className="text-base sm:text-lg text-br1">{edu.degree}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{edu.location} • {edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-br1">Skills</h3>
            <div className="space-y-4 sm:space-y-5">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <p className="text-sm sm:text-base font-semibold text-br1 mb-2">{category.label}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary rounded-full text-xs sm:text-sm font-medium hover:text-primary-foreground transition-all duration-150 ease-out hover:[background:linear-gradient(135deg,hsl(var(--primary)/0.65),hsl(var(--accent)/0.75),hsl(var(--primary)/0.55))]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
