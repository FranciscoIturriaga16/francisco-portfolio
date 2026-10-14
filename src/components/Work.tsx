import ProjectCard from "./ProjectCard";
import havenImage from "@/assets/haven-project.png";
import betterSchoolChoiceImage from "@/assets/better-school-choice-laptop.png";
import buildEarlyMoneyHabitsImage from "@/assets/build-early-money-habits.png";
import theVersusImage from "@/assets/the-versus-project.png";
import haydnImage from "@/assets/haydn-project.png";

const Work = () => {
  const projects = [
    {
      title: "HAVEN",
      subtitle: "Simplify community life and management.",
      description: "",
      image: havenImage,
      projectId: "haven",
      tags: ["React", "TypeScript", "Supabase"],
      role: "Design, Full-Stack Development",
      inDevelopment: true,
    },
    {
      title: "The-Versus",
      subtitle: "Compare anything, make better decisions.",
      description: "",
      image: theVersusImage,
      projectId: "the-versus",
      tags: ["React", "TypeScript"],
      role: "Design, Development",
      inDevelopment: true,
    },
    {
      title: "Better School Choice",
      subtitle: "Find the perfect school for your children!",
      description: "",
      image: betterSchoolChoiceImage,
      projectId: "better-school-choice",
      tags: ["UX Research", "Figma"],
      role: "UX Research & UX/UI Design",
    },
    {
      title: "Build Early Money Habits",
      subtitle: "Giving financial education to children.",
      description: "",
      image: buildEarlyMoneyHabitsImage,
      projectId: "early-money-habits",
      tags: ["Figma", "Wireframing"],
      role: "End-to-End Product Design",
    },
    {
      title: "HAYDN",
      subtitle: "Be a better writer than yourself.",
      description: "",
      image: haydnImage,
      projectId: "haydn",
      tags: ["Android", "Web", "Figma"],
      role: "UX/UI Design & Prototyping",
    },
  ];

  return (
    <section id="work" className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 animate-fade-in">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
