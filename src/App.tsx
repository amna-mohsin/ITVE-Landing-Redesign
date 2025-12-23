import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PaginationDots from './components/PaginationDots'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProgramsSection from './components/sections/ProgramsSection'
import StudentPortalSection from './components/sections/StudentPortalSection'
import WhyChooseSection from './components/sections/WhyChooseSection'
import CTASection from './components/sections/CTASection'

interface Section {
  id: string
  label: string
}

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  const sections: Section[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "portal", label: "Student Portal" },
    { id: "why-choose", label: "Why Choose Us" },
    { id: "cta", label: "Contact" },
    { id: "footer", label: "Footer" },
  ]

  // Handle dot navigation click
  const handleDotClick = (index: number) => {
    const section = sectionsRef.current[index]
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveSection(index)
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = window.scrollY + rect.top
          const sectionBottom = sectionTop + rect.height

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div>
        <div ref={(el) => (sectionsRef.current[0] = el)} className="scroll-mt-32">
          <HeroSection />
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)} className="scroll-mt-32">
          <AboutSection />
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)} className="scroll-mt-32">
          <ProgramsSection />
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)} className="scroll-mt-32">
          <StudentPortalSection />
        </div>
        <div ref={(el) => (sectionsRef.current[4] = el)} className="scroll-mt-32">
          <WhyChooseSection />
        </div>
        <div ref={(el) => (sectionsRef.current[5] = el)} className="scroll-mt-32">
          <CTASection />
        </div>
        <div
          id="footer"
          ref={(el) => (sectionsRef.current[6] = el)}
          className="snap-section footer-section bg-background-light scroll-mt-32"
        >
          <Footer />
        </div>
      </div>

      <PaginationDots
        sections={sections}
        activeSection={activeSection}
        onDotClick={handleDotClick}
        onScrollTop={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        onScrollBottom={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        }
      />
    </div>
  )
}

export default App

