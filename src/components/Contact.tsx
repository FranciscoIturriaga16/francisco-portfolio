import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 animate-fade-in">Get In Touch</h2>
        
        <div className="glass-card p-6 sm:p-8 md:p-12 animate-slide-up">
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="space-y-6">
            <a
              href="mailto:iturriaga.francisco@gmail.com"
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="break-all">iturriaga.francisco@gmail.com</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/francisco-iturriaga-515080289"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span>LinkedIn Profile</span>
            </a>
            
            {/* GitHub link disabled for now */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
