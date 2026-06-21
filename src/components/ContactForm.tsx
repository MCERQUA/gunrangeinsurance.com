'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-heading font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-muted">We will respond within one business day.</p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Do not fill this field: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-1">Subject *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label htmlFor="contactMessage" className="block text-sm font-semibold text-foreground mb-1">Message *</label>
        <textarea
          id="contactMessage"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
          placeholder="Tell us about your insurance needs..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary text-white font-heading font-bold py-4 rounded-lg hover:bg-red-800 transition-colors text-lg"
      >
        Send Message
      </button>
    </form>
  )
}
