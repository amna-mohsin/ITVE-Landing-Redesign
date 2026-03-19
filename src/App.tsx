import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PaginationDots from './components/PaginationDots'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProgramsSection from './components/sections/ProgramsSection'
import StudentPortalSection from './components/sections/StudentPortalSection' // The Section
import StudentPortal from './components/sections/StudentPortal' // The Page
import WhyChooseSection from './components/sections/WhyChooseSection'
import CTASection from './components/sections/CTASection'

interface Section {
  id: string
  label: string
}

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  const sections: Section[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "portal", label: "Portal Section" }, // Matches StudentPortalSection
    { id: "why-choose", label: "Why Choose Us" },
    { id: "cta", label: "Contact" },
    { id: "footer", label: "Footer" },
  ]

  // Logic for standalone Page routing (Snippet 1)
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname
      setCurrentPage(path === '/student-portal' ? 'student-portal' : 'home')
    }
    window.addEventListener('popstate', handleNavigation)
    handleNavigation()
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (!link) return

      const url = new URL(link.href, window.location.origin)
      
      if (url.pathname === '/student-portal') {
        e.preventDefault()
        window.history.pushState({}, '', '/student-portal')
        setCurrentPage('student-portal')
        window.scrollTo(0, 0)
      } else if (url.pathname === '/' && !url.hash) {
        e.preventDefault()
        window.history.pushState({}, '', '/')
        setCurrentPage('home')
        window.scrollTo(0, 0)
      }
    }
    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [])

  // Logic for Scrolling (Snippet 2)
  const handleDotClick = (index: number) => {
    const section = sectionsRef.current[index]
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(index)
    }
  }

  useEffect(() => {
    if (currentPage !== 'home') return
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
    handleScroll() 
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  // RENDER STANDALONE PORTAL PAGE
  if (currentPage === 'student-portal') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-grow">
          <StudentPortal />
        </main>
        <Footer />
      </div>
    )
  }

  // RENDER HOME PAGE WITH SECTIONS
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
          className="scroll-mt-32 snap-section footer-section bg-background-light"
        >
          <Footer />
        </div>
      </div>

      <PaginationDots 
        sections={sections} 
        activeSection={activeSection} 
        onDotClick={handleDotClick}
        onScrollTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onScrollBottom={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
      />
    </div>
  )
}

export default App