import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Welcome from './components/Welcome.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [activeSection, setActiveSection] = useState('welcome')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll('section[data-observe]')
    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <NavBar activeSection={activeSection} />
      <main>
        <section id="welcome" data-observe>
          <Welcome />
        </section>
        <section id="projects" data-observe>
          <Projects />
        </section>
        <section id="contact" data-observe>
          <Contact />
        </section>
      </main>
    </div>
  )
}


