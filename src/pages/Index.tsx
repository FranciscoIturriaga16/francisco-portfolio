import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
