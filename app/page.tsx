import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-96 bg-slate-50 dark:bg-slate-900 animate-pulse rounded-lg" />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="h-96 bg-slate-50 dark:bg-slate-900 animate-pulse rounded-lg" />,
});

const DevelopmentApproach = dynamic(() => import("@/components/DevelopmentApproach"), {
  loading: () => <div className="h-96 bg-slate-50 dark:bg-slate-900 animate-pulse rounded-lg" />,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="h-96 bg-slate-50 dark:bg-slate-900 animate-pulse rounded-lg" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="h-96 bg-slate-50 dark:bg-slate-900 animate-pulse rounded-lg" />,
});

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DevelopmentApproach />
      <Projects />
      <ContactSection />
    </div>
  )
}

export default page