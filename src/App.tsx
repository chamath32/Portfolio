import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ExpertiseSection } from './sections/ExpertiseSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { FooterSection } from './sections/FooterSection'

export function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const revealElements = document.querySelectorAll('.reveal')

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-glow-2" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <Navbar />

      <main className="container">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExpertiseSection />
        <ExperienceSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
