import React from 'react'
import headshot from '../../images/headshot.jpg'

export default function Welcome() {
  const handleArrowClick = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="section welcome-section">
      <div className="container welcome">
        <div className="welcome-text">
          <h1 className="title">Hi, I'm Matthew Li</h1>
          <p className="subtitle">Web Designer • Musician • Software Engineer • Entrepreneur</p>
        </div>
        <div className="welcome-headshot">
          <img
            src={headshot}
            alt="Matthew Li headshot"
          />
        </div>
      </div>
      <div className="welcome-arrow-container" onClick={handleArrowClick}>
        <div className="welcome-arrow">↓</div>
        <div className="welcome-arrow-text">see my work</div>
      </div>
    </section>
  )
}


