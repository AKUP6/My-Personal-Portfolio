import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! This demo form does not send yet.')
  }

  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-details">
          <p><strong>Email:</strong> my.email@example.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/matthew-li-b88072383" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              placeholder="How can I help?"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <div className="form-actions">
            <button type="submit" className="btn">Send</button>
          </div>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  )
}


