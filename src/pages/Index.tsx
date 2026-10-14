import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { container } from "@/components/common/styles";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Contact from "@/components/home/Contact";

const Index = () => (
  <>
    <SiteHeader />
    <main id="main" className={container}>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
    <SiteFooter showNote />
  </>
);

export default Index;
