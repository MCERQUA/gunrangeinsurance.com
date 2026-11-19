'use client'

import { useState } from 'react'
import AcordGapFields from './AcordGapFields'

const COVERAGE_TYPE_OPTIONS = [
  { value: 'general-liability', label: 'General Liability' },
  { value: 'workers-compensation', label: 'Workers Compensation' },
  { value: 'commercial-property', label: 'Commercial Property' },
  { value: 'commercial-auto', label: 'Commercial Auto' },
  { value: 'umbrella-excess-liability', label: 'Umbrella/Excess Liability' },
  { value: 'professional-liability-eo', label: 'Professional Liability/E&O' },
  { value: 'other', label: 'Other' },
]

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [coverageTypes, setCoverageTypes] = useState<string[]>([])
  const [coverageTypesError, setCoverageTypesError] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const toggleCoverageType = (value: string) => {
    setCoverageTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
    if (coverageTypesError) setCoverageTypesError(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (coverageTypes.length === 0) {
      setCoverageTypesError(true)
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)

    setSubmitError(false)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error('submit failed: ' + res.status)
    } catch {
      setSubmitError(true)
      return
    }

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
      {/* complete class field set — forms-required-fields.json */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Street address *</label>
        <input type="text" name="streetAddress" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">City *</label>
        <input type="text" name="city" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">State *</label>
        <input type="text" name="state" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">ZIP code *</label>
        <input type="text" name="zip" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Federal Employer ID Number (FEIN)</label>
        <input type="text" name="fein" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Year business started *</label>
        <input type="number" name="yearBusinessStarted" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Description of business *</label>
        <textarea name="businessDescription" required rows={3} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Prior insurance carrier name</label>
        <input type="text" name="currentCarrier" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Prior policy number</label>
        <input type="text" name="prior_policy_number" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Prior policy expiration date</label>
        <input type="date" name="currentPolicyExpiration" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Desired effective date *</label>
        <input type="date" name="desiredEffectiveDate" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Desired coverage limits</label>
        <input type="text" name="requestedLimits" placeholder="$1,000,000" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Claims in last 3 years (count)</label>
        <input type="number" name="lossCount" placeholder="0" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Claim details (if any)</label>
        <textarea name="lossDescription" rows={2} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground"></textarea>
      </div>

      {/* ACORD-125/126 gap-fill: business profile fields */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Business Entity Type *</label>
        <select name="entityType" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select entity type...</option>
          <option value="individual">Individual/Sole Proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="corporation">Corporation</option>
          <option value="llc">LLC</option>
          <option value="joint-venture">Joint Venture</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Number of Full-Time Employees *</label>
        <input type="number" name="fullTimeEmployees" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Number of Part-Time Employees</label>
        <input type="number" name="partTimeEmployees" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Approximate Annual Payroll</label>
        <select name="annualPayroll" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select range...</option>
          <option value="under-50k">Under $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k-250k">$100,000 - $250,000</option>
          <option value="250k-500k">$250,000 - $500,000</option>
          <option value="over-500k">Over $500,000</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Are You Currently Insured? *</label>
        <select name="currentlyInsured" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Any Losses or Claims in the Last 3 Years? *</label>
        <select name="lossesLast3Years" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Insurance Coverage Needed (select all that apply) *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border border-border rounded-lg p-3">
          {COVERAGE_TYPE_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                checked={coverageTypes.includes(opt.value)}
                onChange={() => toggleCoverageType(opt.value)}
                className="h-4 w-4"
              />
              {opt.label}
            </label>
          ))}
        </div>
        <input type="hidden" name="coverageTypes" value={coverageTypes.join(',')} />
        {coverageTypesError && (
          <p className="text-sm text-red-600 mt-1">Please select at least one coverage type.</p>
        )}
      </div>

      {/* ACORD-125/126 gap-fill: gun-range-specific fields */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Facility Type *</label>
        <select name="facilityType" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select facility type...</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="both">Both / Indoor & Outdoor</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Number of Lanes/Bays *</label>
        <input type="number" name="numberOfLanesBays" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Total Facility Square Footage</label>
        <input type="number" name="squareFootage" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Membership Structure</label>
        <select name="membershipModel" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select...</option>
          <option value="private-member-club">Private Member Club</option>
          <option value="public-walk-in">Public Walk-In</option>
          <option value="both">Both Members & Public</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Firearms/Ammunition Retail Sales On-Site (FFL)?</label>
        <select name="firearmsRetailOnPremises" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Do You Require Signed Liability Waivers From Range Users?</label>
        <select name="liabilityWaiverUsed" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-foreground mb-1">Is a Range Safety Officer Staffed On-Site?</label>
        <select name="rangeSafetyOfficerStaffed" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground bg-white">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <AcordGapFields />

      <p className="text-xs text-muted text-center">
        By submitting, you consent to be contacted by Contractors Choice Agency. No obligation.
      </p>
      <button
        type="submit"
        className="w-full bg-secondary text-white font-heading font-bold py-4 rounded-lg hover:bg-red-800 transition-colors text-lg"
      >
        Request My Free Quote
      </button>
      {submitError && (
        <p role="alert" className="text-sm text-red-600 text-center">
          We could not send your request. Please try again in a moment.
        </p>
      )}

</form>
  )
}
