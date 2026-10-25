import React from 'react'
import yarty from '../../images/yarty.png'
import maestro from '../../images/maestro.gif'
import yaleMeals from '../../images/yalemeals.jpg'
import mnistAccuracy from '../../images/mnist_accuracy.png'

const projects = [
  {
    title: 'Yarty (iOS App)',
    image: yarty,
    description:
      "A real-time social heatmap for Yale students. See where people are gathering on campus, discover events, and set smart alerts, with location always anonymized and only aggregated data shown.",
    repo: 'https://www.yarty.app/',
    repoLabel: 'Visit Site'
  },
  {
    title: 'Maestro: AI Composition Companion',
    image: maestro,
    description:
      'An AI companion for MuseScore that turns a text request, or a hummed melody, into notes written directly on your score in under 15 seconds. It reads the existing score for context, supports the full musical vocabulary (chords, dynamics, tuplets, lyrics and more), and works with MuseScore\'s native undo. Built as a hackathon project.',
    repo: 'https://github.com/TidalTunes/Maestro',
    demo: 'https://devpost.com/software/maestro-ef7jbn',
    demoLabel: 'Devpost'
  },
  {
    title: 'YaleMeals (iOS App)',
    image: yaleMeals,
    description:
      'An iOS app giving Yale students real-time dining menus and community ratings across all 14 residential colleges, Slifka, and Commons. Includes dietary filters, favorites with alerts, hall open/closed status, walking times, and nutrition tracking. I work on the app as part of the team behind it.',
    repo: 'https://apps.apple.com/us/app/yalemeals/id6755962674',
    repoLabel: 'View on App Store'
  },
  {
    title: 'MNIST Digit Recognition with Kernel Smoothing',
    image: mnistAccuracy,
    description:
      'A handwritten digit classifier built from scratch with Gaussian kernel smoothing (Nadaraya-Watson) in NumPy. Tuned the kernel bandwidth h with leave-one-out cross-validation, reaching roughly 93% accuracy, and wrapped it in a small Flask demo.',
    repo: 'https://github.com/AKUP6/MNIST_Predictor_Kernel_Smoothing',
    demo: 'https://youtu.be/q4gfm7ERARw'
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
                <img src={p.image} alt={`${p.title} preview`} />
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-actions">
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <button className="btn">{p.repoLabel || 'View Code'}</button>
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <button className="btn">{p.demoLabel || 'Watch Demo'}</button>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


