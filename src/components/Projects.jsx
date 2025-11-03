import React from 'react'
import placeholder from '../../images/placeholder.jpg'

const projects = [
  {
    title: 'Project 1',
    image: 'https://via.placeholder.com/1200x600.png?text=Project+1',
    description:
      "I don't have any projects yet, but stay tuned!"
  },
  {
    title: 'Project 2',
    image: 'https://via.placeholder.com/1200x600.png?text=Project+2',
    description:
      "I don't have any projects yet, but stay tuned!"
  },
  {
    title: 'Project 3',
    image: 'https://via.placeholder.com/1200x600.png?text=Project+3',
    description:
      "I don't have any projects yet, but stay tuned!",
  }
]

export default function Projects() {
  return (
    <section className="section projects-section">
      <div className="container">
        <h2 className="section-title light">Projects</h2>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <article key={idx} className="project-card">
              <div className="project-media">
                <img src={placeholder} alt={`${p.title} preview`} />
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-actions">
                  <a href="https://github.com/">
                    <button className="btn">View</button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


