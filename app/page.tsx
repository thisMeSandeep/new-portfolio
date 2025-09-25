import About from "@/components/About"
import DevelopmentApproach from "@/components/DevelopmentApproach"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <DevelopmentApproach />
    </div>
  )
}

export default page