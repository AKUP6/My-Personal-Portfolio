import React from 'react'

const navItems = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' }
]

export default function NavBar({ activeSection }) {
  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">My Portfolio</div>
        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Button clicked:', item.id)
                    handleClick(item.id)
                  }}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}


