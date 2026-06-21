import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Indoor Shooting Range Insurance | Indoor Range Liability Coverage',
  description: 'Specialized insurance for indoor shooting ranges. Covers general liability, lead contamination, ventilation failures, property damage, and more. Licensed in all 50 states.',
}

export default function IndoorRangePage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Indoor Shooting Range Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Indoor Shooting Range Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Indoor shooting ranges face unique insurance challenges — from lead contamination and ventilation liability to patron injury claims and property protection for specialized range infrastructure. CCA structures coverage that addresses the specific exposures of enclosed shooting facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-secondary px-8 py-4 text-lg">Get a Free Quote</Link>
              <a href="tel:8005550100" className="flex items-center gap-2 border-2 border-white text-white font-heading font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" /> (800) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-content">
              <h2>The Distinct Risk Profile of Indoor Ranges</h2>
              <p>
                An indoor shooting range is not simply a shooting range that happens to be inside a building. The enclosed environment creates a distinct and compounded risk profile that demands coverage specifically tailored to the facility. Lead concentration in the air, bullet trap systems, ventilation infrastructure, sound attenuation, and the density of activity within a confined space all create exposures that outdoor ranges do not face.
              </p>
              <p>
                Standard commercial property and general liability policies designed for retail or light industrial occupancies are inadequate for indoor range operations. The firearms exclusions in most standard GL forms, combined with the pollution exclusions that apply to lead, leave indoor range operators with significant uninsured exposures under off-the-shelf commercial insurance packages.
              </p>

              <h2>Key Coverage Areas for Indoor Ranges</h2>

              <h3>General Liability — Indoor-Specific Exposures</h3>
              <p>
                Indoor range GL must be structured to address on-range bodily injury without the firearms and pollution exclusions that standard carriers apply. Key covered claims include:
              </p>
              <ul>
                <li>Patron injuries from ricochets, splatter, and malfunctions within the range</li>
                <li>Hearing loss claims from patrons alleging inadequate hearing protection or equipment failure</li>
                <li>Injuries in common areas, rental counters, classrooms, and retail spaces</li>
                <li>Slip-and-fall incidents in the firing line area and beyond</li>
                <li>Patron-on-patron incidents that occurred within your supervised facility</li>
              </ul>

              <h3>Lead Contamination Liability</h3>
              <p>
                Indoor ranges generate lead dust with every round fired. Over time, lead accumulates in air handling systems, on surfaces, in changing rooms, and in parking areas near HVAC exhausts. The liability exposures from lead contamination include:
              </p>
              <ul>
                <li>Patron claims for elevated blood lead levels attributed to range exposure</li>
                <li>Employee lead exposure claims and regulatory violations</li>
                <li>OSHA penalties for lead levels exceeding permissible exposure limits</li>
                <li>Regulatory-mandated cleanup costs and soil/structure remediation</li>
                <li>Third-party claims from adjacent businesses or properties affected by exhausted lead</li>
              </ul>
              <p>
                Environmental liability endorsements or standalone environmental policies address these exposures. CCA can package environmental coverage alongside your core GL and property policy.
              </p>

              <h3>Property Insurance for Range Infrastructure</h3>
              <p>
                Indoor range buildings and their improvements are specialized structures with significant per-square-foot value. Proper property coverage must include:
              </p>
              <ul>
                <li>Building coverage at replacement cost value, accounting for specialized construction</li>
                <li>Bullet trap systems (mechanical traps can cost $50,000 to $500,000+)</li>
                <li>HVAC and ventilation systems designed for lead management</li>
                <li>Target retrieval systems, lighting, baffles, and ballistic ceiling materials</li>
                <li>Firearms rental inventory and gunsmithing equipment</li>
                <li>Retail inventory including firearms, ammunition, and accessories</li>
                <li>Electronic systems including point-of-sale, surveillance, and membership management</li>
              </ul>

              <h3>Business Interruption Insurance</h3>
              <p>
                An indoor range that is forced to close for lead remediation, structural repair, or equipment failure faces immediate revenue loss. Business interruption coverage reimburses your lost income and continuing expenses during a covered shutdown period. Given the cost and time required for lead remediation closures, this coverage can be the difference between a range surviving a major loss and closing permanently.
              </p>

              <h3>Equipment Breakdown Coverage</h3>
              <p>
                Mechanical and electrical breakdown of critical range systems — HVAC, ventilation fans, bullet trap motors, target retrieval systems — is not covered under standard property insurance, which excludes mechanical breakdown from the definition of &quot;covered cause of loss.&quot; Equipment breakdown coverage addresses sudden failures of these systems.
              </p>

              <h2>OSHA Lead Standard Compliance and Insurance</h2>
              <p>
                OSHA&apos;s General Industry Lead Standard (29 CFR 1910.1025) establishes permissible exposure limits, air monitoring requirements, medical surveillance, and hygiene practices for indoor range employees. Non-compliance can result in significant fines and regulatory actions. While insurance does not cover OSHA fines directly, maintaining compliance reduces your liability exposure and demonstrates the due diligence that can mitigate claims.
              </p>
              <p>
                Some specialty environmental policies include regulatory response cost coverage that can assist with agency-ordered remediation costs. CCA can identify these provisions in available policy forms.
              </p>

              <h2>Pricing for Indoor Range Insurance</h2>
              <p>
                Indoor range insurance premiums are influenced by:
              </p>
              <ul>
                <li>Number of shooting lanes and total square footage</li>
                <li>Public access vs. members-only structure</li>
                <li>Ventilation system quality and maintenance records</li>
                <li>Lead management program documentation</li>
                <li>Annual revenue and number of rounds fired</li>
                <li>Retail and gunsmithing operations</li>
                <li>Training programs and instructor staff</li>
                <li>Claims history</li>
              </ul>
              <p>
                A small 8-10 lane indoor range might pay $8,000-$15,000 annually for a comprehensive package. Larger 25+ lane commercial ranges with retail operations typically fall in the $20,000-$50,000 range for full coverage packages.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Indoor Range Coverage</h3>
                <ul className="space-y-3">
                  {[
                    'General liability — on-range incidents',
                    'Lead contamination liability',
                    'Property — building & improvements',
                    'Bullet trap & ventilation systems',
                    'Firearms rental inventory',
                    'Business interruption',
                    'Equipment breakdown',
                    'Products liability for retail',
                    'OSHA compliance support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get Indoor Range Quote</h3>
                <p className="text-red-100 text-sm mb-4">Comprehensive packages for indoor shooting facilities.</p>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-6 py-3 rounded block text-center hover:bg-gray-100 transition-colors">
                  Request Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Related Pages</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Outdoor Range Insurance', href: '/services/outdoor-shooting-range-insurance' },
                    { name: 'Lead Abatement Insurance', href: '/services/lead-abatement-environmental-insurance' },
                    { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-secondary hover:underline text-sm flex items-center gap-1">
                        <ArrowRight className="w-3 h-3" /> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Protect Your Indoor Range</h2>
          <p className="text-muted text-lg mb-8">Indoor ranges have unique needs. Let specialists build your coverage.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
