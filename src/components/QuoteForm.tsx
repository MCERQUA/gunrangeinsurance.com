'use client'

import { useState } from 'react'

export default function QuoteForm() {
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
        <h3 className="text-xl font-heading font-bold text-primary mb-2">Quote Request Received!</h3>
        <p className="text-muted">A specialist will contact you within 24 hours with your customized quote.</p>
      </div>
    )
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>Do not fill this field: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-1">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-1">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
            placeholder="john@myrange.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-semibold text-foreground mb-1">Business Name *</label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
          placeholder="Eagle Eye Shooting Range"
        />
      </div>

      <div>
        <label htmlFor="coverageType" className="block text-sm font-semibold text-foreground mb-1">Coverage Needed *</label>
        <select
          id="coverageType"
          name="coverageType"
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white"
        >
          <option value="">Select coverage type...</option>
          <option value="gun-range-liability">Gun Range Liability Insurance</option>
          <option value="firearms-instructor">Firearms Instructor Insurance</option>
          <option value="range-safety-officer">Range Safety Officer Insurance</option>
          <option value="indoor-range">Indoor Shooting Range Insurance</option>
          <option value="outdoor-range">Outdoor Shooting Range Insurance</option>
          <option value="ffl-dealer">Retail Gun Store (FFL) Insurance</option>
          <option value="shooting-club">Shooting Club Insurance</option>
          <option value="lead-abatement">Lead Abatement & Environmental Insurance</option>
          <option value="multiple">Multiple / Full Package</option>
        </select>
      </div>

      <div>
        <label htmlFor="annualRevenue" className="block text-sm font-semibold text-foreground mb-1">Approximate Annual Revenue</label>
        <select
          id="annualRevenue"
          name="annualRevenue"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white"
        >
          <option value="">Select range...</option>
          <option value="under-100k">Under $100,000</option>
          <option value="100k-250k">$100,000 - $250,000</option>
          <option value="250k-500k">$250,000 - $500,000</option>
          <option value="500k-1m">$500,000 - $1,000,000</option>
          <option value="over-1m">Over $1,000,000</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1">Additional Details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"
          placeholder="Describe your facility, number of lanes, current coverage situation, or any specific needs..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary text-white font-heading font-bold py-4 rounded-lg hover:bg-red-800 transition-colors text-lg"
      >
        Request My Free Quote
      </button>

      <p className="text-xs text-muted text-center">
        By submitting, you consent to be contacted by Contractors Choice Agency. No obligation.
      </p>
    </form>
  )
}
