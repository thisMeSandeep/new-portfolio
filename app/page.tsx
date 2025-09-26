import About from "@/components/About"
import ContactSection from "@/components/ContactSection"
import DevelopmentApproach from "@/components/DevelopmentApproach"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

const page = () => {
  return (
    <div>
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