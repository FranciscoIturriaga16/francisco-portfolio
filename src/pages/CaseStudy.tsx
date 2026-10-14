import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mockupImage from "@/assets/better-school-choice-mockup.png";
import mobileImage from "@/assets/better-school-choice-mobile.png";
import wireframesImage from "@/assets/better-school-choice-wireframes.png";
import havenFolio1 from "@/assets/haven-folio-1.png";
import havenFolio2 from "@/assets/haven-folio-2.png";
import havenFolio3 from "@/assets/haven-folio-3.png";
import havenFolio4 from "@/assets/haven-folio-4.png";
import havenFolio5 from "@/assets/haven-folio-5.png";
import havenFolio6 from "@/assets/haven-folio-6.png";

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Project content data
  const projectContent: Record<string, any> = {
    "better-school-choice": {
      title: "Better School Choice",
      sections: [
        {
          content: (
            <>
              <h1 className="text-5xl font-bold mb-4">Better School Choice</h1>
            </>
          )
        },
        {
          title: "The Problem",
          subtitle: "What are we trying to solve?",
          content: (
            <p className="text-lg leading-relaxed">
              Searching for schools for their kids has always been a difficult task for parents. It is hard for parents to find all the necessary information and resources without it being extremely time-consuming.
            </p>
          )
        },
        {
          content: (
            <div className="space-y-6">
              <div className="bg-muted/30 p-8 rounded-lg border border-border">
                <p className="text-xl italic mb-2">
                  <strong>Q:</strong> How many combined hours did you work on this school choice?
                </p>
                <p className="text-xl italic text-muted-foreground">
                  <strong>A:</strong> I couldn't even begin. I sent hundreds of emails, did a dozen visits . . . it was a part-time job!
                </p>
              </div>
            </div>
          )
        },
        {
          title: "The Goal",
          subtitle: "What are we trying to improve?",
          content: (
            <p className="text-lg leading-relaxed">
              The goal of Better School Choice is to help parents find the perfect school for their children without it being exhausting. I am trying give the parents all the information and resources within one site. I also want to give parents a collaborative space where they can keep track of their preferences, findings, and progress.
            </p>
          )
        },
        {
          title: "The Audience",
          subtitle: "Who is this product for?",
          content: (
            <p className="text-lg leading-relaxed">
              This product was originally targeted to help parents looking for schools for the first time. The process can be extremely overwhelming specially for first-time parents. After having the product tested with parents that had already gone through the process, I realized how much they appreciate having a tool that facilitates what they already had to go through. Those parents were the ones that appreciated the idea and goal of this product the most. It is also a good way to get the children involved and allow them to collaborate with the process.
            </p>
          )
        },
        {
          title: "Discovery",
          subtitle: "What did we learn?",
          content: (
            <div className="space-y-6">
              <img 
                src={wireframesImage} 
                alt="Better School Choice wireframes and research" 
                className="w-full h-auto"
              />
              <p className="text-lg leading-relaxed">
                To come up with this wonderful product, a lot of research was done. I studied six different interview transcripts from OurKids. The information I received from the parents interviewed lead me to create the "Better School Choice Grading System", which is how the schools are ranked and rated within the site. I also studied five different competitors which were, Schoolahoop, Step Up for Students, Niche, Greatschool.org, and City-data.com. Studying them helped me confirm which features were necessary. It also allowed me to mix some features from different sites such as the scholarship system. Lastly, it helped me see what opportunities I had to be innovative. 
                <br/><br/>
                After creating a low-fidelity prototype, I tested it with parents and received some great feedback on not only the prototype itself, but the idea of the product. I realized that all parents would appreciate this product and the possibility to involve their children in the search.
              </p>
            </div>
          )
        },
        {
          title: "Solutions",
          subtitle: "What features are needed?",
          content: (
            <p className="text-lg leading-relaxed">
              The charm of Better School Choice is to have all the tools within the same site and account. Here, parents will have the opportunity to find schools, make a list of favorites, apply, contact, and compare. All those possibilities while keeping track of information and progress in a very organized way. Multiple devices will be able to sign in to the same account, so both parents and children will be able to do research at the same time and see what the others have discovered. I found those features to be the most necessary without adding any extras to an already overwhelming process.
            </p>
          )
        },
        {
          content: (
            <div className="w-full">
              <img 
                src={mobileImage} 
                alt="Better School Choice mobile application screens" 
                className="w-full h-auto"
              />
            </div>
          )
        },
        {
          title: "Results",
          subtitle: "The final product.",
          content: (
            <p className="text-lg leading-relaxed">
              When designing Better School Choice, the main goal was to be efficient. While the design can seem simple, there is a purpose to it. I considered even the slightest waste of time an image can create. It was a challenge to keep the site friendly while trying to avoid any extra animations, illustrations, and imagery. At the end, the site achieved a balance that will keep the focus on achieving the task at hand.
            </p>
          )
        },
        {
          content: (
            <div className="w-full">
              <img 
                src={mockupImage} 
                alt="Better School Choice application mockups showing Flatiron School page and homepage" 
                className="w-full h-auto"
              />
            </div>
          )
        }
      ]
    },
    "haven": {
      title: "HAVEN",
      sections: [
        {
          content: (
            <>
              <h1 className="text-5xl font-bold mb-4">HAVEN</h1>
            </>
          )
        },
        {
          title: "The Problem",
          subtitle: "What are we trying to solve?",
          content: (
            <p className="text-lg leading-relaxed">
              Many neighborhoods, clubs, and residential communities depend on outdated tools or third parties to manage their operations. Administrators often rely on developers or manual processes to set up facility reservations, events, or payment systems. Members struggle with scattered communication, outdated calendars, and multiple logins for different communities. The result is confusion, wasted time, and missed opportunities for connection.
            </p>
          )
        },
        {
          content: (
            <div className="w-full flex justify-center gap-4">
              <img src={havenFolio6} alt="HAVEN My Communities" className="max-h-[400px] w-auto h-auto rounded-lg" />
              <img src={havenFolio5} alt="HAVEN Community Events" className="max-h-[400px] w-auto h-auto rounded-lg" />
              <img src={havenFolio4} alt="HAVEN Usage Trends" className="max-h-[400px] w-auto h-auto rounded-lg" />
            </div>
          )
        },
        {
          content: (
            <div className="space-y-6">
              <div className="bg-muted/30 p-8 rounded-lg border border-border">
                <p className="text-xl italic mb-2">
                  <strong>Q:</strong> How do you currently manage reservations and community updates?
                </p>
                <p className="text-xl italic text-muted-foreground">
                  <strong>A:</strong> We juggle spreadsheets, calls, and separate apps. It works, but it is far from simple.
                </p>
              </div>
            </div>
          )
        },
        {
          title: "The Goal",
          subtitle: "What are we trying to improve?",
          content: (
            <p className="text-lg leading-relaxed">
              HAVEN was created to give communities independence and simplicity. The goal is to build a single platform where administrators can create and manage their own communities without the need for a developer. Within minutes, they can manage facilities, events, pricing, members, guests, dining, announcements, and insights—all from one dashboard.
              <br/><br/>
              At the same time, members can access every community they belong to through a single account, easily switching between them to book courts, join events, invite guests, and stay informed.
            </p>
          )
        },
        {
          title: "The Audience",
          subtitle: "Who is this product for?",
          content: (
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                HAVEN serves two audiences that depend on one another:
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Administrators</strong> who need a simple, professional way to run their community without relying on outside technical help.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Members</strong> who want an easy, unified way to interact with all the communities they are part of.
              </p>
              <p className="text-lg leading-relaxed">
                The primary users include property managers, club administrators, and HOA board members, while the secondary users are the members who participate in daily community activities.
              </p>
            </div>
          )
        },
        {
          title: "Discovery",
          subtitle: "What did we learn?",
          content: (
            <p className="text-lg leading-relaxed">
              Through early research and interviews, I learned that administrators are frustrated by how fragmented their systems are. Many rely on multiple disconnected platforms or expensive custom-built websites. Members, on the other hand, want convenience and accessibility. They prefer having everything—bookings, events, and announcements—in one place.
              <br/><br/>
              To understand what was missing, I analyzed platforms like ClubExpress, Mindbody, and CourtReserve. While they offered good tools for single organizations, none provided a way for users to manage multiple communities from one account. This insight became the foundation for HAVEN's multi-community structure.
              <br/><br/>
              After designing low-fidelity prototypes and testing them with both user groups, it became clear that flexibility and control were key. Admins wanted to feel empowered to manage everything themselves, and members wanted a modern experience that felt effortless.
            </p>
          )
        },
        {
          title: "Solutions",
          subtitle: "What features are needed?",
          content: (
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                HAVEN integrates everything communities need into one cohesive system.
              </p>
              <div>
                <p className="text-xl font-semibold mb-3">For Administrators:</p>
                <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4">
                  <li>Create and customize their own community without developer assistance</li>
                  <li>Manage facilities, events, pricing, and memberships from one dashboard</li>
                  <li>Track bookings, payments, and member activity with real-time insights</li>
                  <li>Publish announcements, dining updates, and guest policies instantly</li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-semibold mb-3">For Members:</p>
                <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4">
                  <li>Access all communities through a single HAVEN account</li>
                  <li>Easily switch between communities to book, register, or invite guests</li>
                  <li>Manage reservations and payments in one place</li>
                  <li>Stay informed through announcements and event updates</li>
                  <li>Optionally create a new community of their own</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          content: (
            <div className="w-full flex justify-center">
              <img src={havenFolio1} alt="HAVEN Admin Dashboard" className="max-h-[400px] w-auto h-auto rounded-lg" />
            </div>
          )
        },
        {
          content: (
            <p className="text-lg leading-relaxed">
              Every feature was designed to make complex community operations feel simple. The focus is on clarity, autonomy, and a sense of connection.
            </p>
          )
        },
        {
          title: "Results",
          subtitle: "The final product.",
          content: (
            <p className="text-lg leading-relaxed">
              HAVEN is currently in active development. The app's design and build prioritize scalability, ensuring that a small tennis club can use it as easily as a large residential community. Administrators have full control through a dashboard that updates in real time, while members enjoy an intuitive, mobile-friendly interface.
            </p>
          )
        },
        {
          content: (
            <div className="w-full flex justify-center">
              <img src={havenFolio3} alt="HAVEN Book Now facilities and events" className="max-h-[400px] w-auto h-auto rounded-lg" />
            </div>
          )
        },
        {
          content: (
            <p className="text-lg leading-relaxed">
              The platform continues to evolve with new features focused on analytics, dining reservations, and advanced payment management. HAVEN's ultimate goal is to become the all-in-one operating system for communities—empowering both administrators and members to stay organized, connected, and engaged.
            </p>
          )
        }
      ]
    },
    "the-versus": {
      title: "The-Versus",
      sections: [
        {
          content: (
            <>
              <h1 className="text-5xl font-bold mb-4">The‑Versus</h1>
            </>
          )
        },
        {
          title: "Overview",
          subtitle: "",
          content: (
            <p className="text-lg leading-relaxed">
              The‑Versus is a soccer debate platform that turns "who's better?" arguments into structured matchups people can vote on, share, and revisit. Instead of debates disappearing in group chats or comment sections, each matchup becomes a clear, permanent page with a live result.
              <br/><br/>
              My role: Product + UX design + content system design + operations.
            </p>
          )
        },
        {
          title: "The Problem",
          subtitle: "Why debates need structure.",
          content: (
            <p className="text-lg leading-relaxed">
              Soccer debates are everywhere, but the experience is fragmented. Great matchups get buried, repeated, and rarely end with a clear snapshot of what people actually think. Most online debate spaces also trade structure for noise—so even when the topic is good, the conversation isn't.
            </p>
          )
        },
        {
          title: "The Goal",
          subtitle: "What are we building toward?",
          content: (
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Build a simple product where soccer debates feel:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4">
                <li><strong>Clear</strong> — A vs B, easy to understand instantly</li>
                <li><strong>Fast</strong> — voting is frictionless</li>
                <li><strong>Shareable</strong> — a debate link is worth sending to friends</li>
                <li><strong>Lasting</strong> — debates don't disappear, they become pages people can revisit</li>
              </ul>
              <p className="text-lg leading-relaxed">
                V1 focuses on the core experience—publishing, browsing, and voting—while keeping the product stable and easy to maintain.
              </p>
            </div>
          )
        },
        {
          title: "The Audience",
          subtitle: "Who is this product for?",
          content: (
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">The‑Versus is for:</p>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4">
                <li>Casual fans who enjoy quick matchups</li>
                <li>Hardcore fans who care about context, eras, and "prime vs prime" discussions</li>
                <li>Creators and community builders who want a debate format that spreads naturally through links</li>
              </ul>
              <p className="text-lg leading-relaxed">
                A key insight is that users don't just want to argue—they want an easy way to package a debate and share it.
              </p>
            </div>
          )
        },
        {
          title: "Discovery",
          subtitle: "What did we learn?",
          content: (
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">Building and operating The‑Versus made a few things clear:</p>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4">
                <li><strong>Structure drives engagement.</strong> The clearer the matchup, the better the participation.</li>
                <li><strong>Visuals matter.</strong> Good images aren't decoration—they increase trust and clicks.</li>
                <li><strong>Reliability is part of UX.</strong> If publishing and media are inconsistent, the whole product feels unfinished.</li>
                <li><strong>Discoverability is growth.</strong> If debates can't be found through search, the platform depends too heavily on manual promotion.</li>
              </ul>
            </div>
          )
        },
        {
          title: "Solutions",
          subtitle: "How is the product designed?",
          content: (
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">The product is designed around a few principles:</p>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4">
                <li>A structured matchup format that reduces friction and keeps debates high-signal</li>
                <li>A library-style experience where debates can be browsed and revisited</li>
                <li>Sharing built into the flow so debates travel through group chats and social platforms</li>
                <li>A repeatable publishing workflow that can be streamlined and partially automated with an assistant to maintain consistency at scale</li>
              </ul>
            </div>
          )
        },
        {
          title: "Results",
          subtitle: "The outcome.",
          content: (
            <p className="text-lg leading-relaxed">
              The‑Versus creates a clean, repeatable debate experience that is easy to participate in and easy to share. Instead of one-off arguments, it produces a growing collection of matchups that can be revisited over time, setting the foundation for long-term discoverability and monetization without adding unnecessary complexity early.
            </p>
          )
        }
      ]
    },
    "early-money-habits": {
      title: "Build Early Money Habits",
      sections: [
        {
          content: (
            <>
              <h1 className="text-5xl font-bold mb-4">Build Early Money Habits</h1>
            </>
          )
        },
        {
          title: "The Project",
          subtitle: "Giving financial education to children",
          content: (
            <p className="text-lg leading-relaxed">
              For this project I created a responsive wireframe for a website for parents to learn about and sign up for a course designed to build early money habits for children ages 10-12.
            </p>
          )
        },
        {
          title: "The Goal",
          subtitle: "Why financial education matters",
          content: (
            <p className="text-lg leading-relaxed">
              Financial literacy is a crucial life skill that's often overlooked in traditional education. This project aims to provide parents with the resources they need to teach their children about money management from an early age, setting them up for financial success in the future.
            </p>
          )
        },
        {
          title: "Approach",
          subtitle: "Designing for parents and children",
          content: (
            <p className="text-lg leading-relaxed">
              The design needed to appeal to parents while being mindful that the content would ultimately benefit their children. I focused on creating a clean, trustworthy interface that clearly communicated the value of the program and made enrollment straightforward.
            </p>
          )
        }
      ]
    },
    "haydn": {
      title: "HAYDN",
      sections: [
        {
          content: (
            <>
              <h1 className="text-5xl font-bold mb-4">HAYDN</h1>
            </>
          )
        },
        {
          title: "The Project",
          subtitle: "AI tool for writers, bloggers, and journalists",
          content: (
            <p className="text-lg leading-relaxed">
              HAYDN is the AI tool for writers, bloggers, and journalists that makes you a better writer than yourself. For this project I was asked to create a mobile app designed for Android, and to create a website that would be uniquely functional across different sized devices (desktop, tablet, and mobile).
            </p>
          )
        },
        {
          title: "The Challenge",
          subtitle: "Multi-platform design",
          content: (
            <p className="text-lg leading-relaxed">
              The challenge was to design a new landing page for their marketing website and prototype new feature ideas for the mobile app. The design needed to work seamlessly across all device sizes while maintaining a consistent brand experience.
            </p>
          )
        },
        {
          title: "Solution",
          subtitle: "Responsive and intuitive",
          content: (
            <p className="text-lg leading-relaxed">
              I created a responsive design system that adapted to different screen sizes while maintaining functionality and usability. The mobile app focused on making AI-powered writing assistance accessible on the go, while the website emphasized the product's capabilities and benefits.
            </p>
          )
        }
      ]
    }
  };

  const currentProject = projectContent[projectId || ""];
  const sections = currentProject?.sections || [];

  // If project not found, redirect to home
  if (!currentProject) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <Navigation />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-lg mb-8">The case study you're looking for doesn't exist yet.</p>
            <button 
              onClick={handleBackToProjects}
              className="text-primary hover:underline"
            >
              ← Back to Projects
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4 mb-8">
          <button 
            onClick={handleBackToProjects}
            className="text-primary hover:underline inline-block"
          >
            ← Back to Projects
          </button>
        </div>
        <div className="space-y-0">
          {sections.map((section, index) => {
            const bgColor = index % 2 === 0 ? 'bg-background' : 'bg-accent/15';
            const borderColor = index % 2 === 0 ? 'border-border' : 'border-accent/40';
            
            return (
              <div 
                key={index} 
                className={`${bgColor} ${borderColor} border-y py-12 transition-colors duration-300`}
              >
                <div className="max-w-5xl mx-auto px-8">
                  {section.title && (
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                      {section.subtitle && (
                        <h3 className="text-xl text-muted-foreground">{section.subtitle}</h3>
                      )}
                    </div>
                  )}
                  <div>{section.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
