import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ArrowRight, AlertTriangle, FileText } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Gun Range Liability Insurance | Shooting Range General Liability',
  description: 'Comprehensive general liability insurance for gun ranges and shooting facilities. Covers bodily injury, property damage, lead exposure, and defense costs. Get a quote today.',
}

export default function GunRangeLiabilityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Gun Range Liability Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Gun Range Liability Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The foundational coverage every shooting range needs — protecting against bodily injury claims, property damage, products liability, and the full spectrum of range-related incidents. Built specifically for firearms facilities by specialists who understand your exposures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-secondary px-8 py-4 text-lg">Get a Free Quote</Link>
              <a href="tel:8005550100" className="flex items-center gap-2 border-2 border-white text-white font-heading font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors text-lg">
                <Phone className="w-5 h-5" /> (800) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-content">
              <h2>Why Gun Ranges Need Specialized Liability Insurance</h2>
              <p>
                Operating a shooting range carries unique liability exposures that standard commercial general liability policies are not designed to cover — and often explicitly exclude. From the moment a customer enters your range, you face potential liability for firearms-related accidents, hearing loss claims, lead exposure, stray projectiles, and the failure of range safety systems.
              </p>
              <p>
                Standard GL carriers classify shooting ranges as high-risk operations and frequently decline, limit, or exclude firearms-related incidents from coverage. The result: range operators discover coverage gaps only when a claim occurs. Gun range liability insurance from a specialty carrier provides the comprehensive protection your operation actually requires.
              </p>

              <h2>What Gun Range General Liability Covers</h2>
              <h3>Bodily Injury Liability</h3>
              <p>
                If a patron, instructor, or third party suffers physical injury on your range premises, your general liability policy responds. This includes gunshot injuries from ricochet or target splatter, hearing damage from inadequate protection or equipment failure, trip-and-fall accidents on range property, and injuries occurring in waiting areas, retail spaces, and parking lots.
              </p>
              <p>
                Defense costs for bodily injury claims are often included within or in addition to your policy limits, depending on the form. Given the litigation costs associated with firearms-related injuries, this coverage is essential — attorney fees alone in a contested shooting injury claim can exceed $50,000 before trial.
              </p>

              <h3>Property Damage Liability</h3>
              <p>
                Property damage coverage responds when your range operations cause damage to third-party property. This includes damage to neighboring properties from stray projectiles, damage to customer vehicles in your parking lot, and property damage caused by your employees or contractors during off-premises work.
              </p>

              <h3>Products and Completed Operations Liability</h3>
              <p>
                If your range sells firearms, ammunition, accessories, or range-specific products, products liability coverage is critical. A claim alleging that ammunition you sold caused a malfunction or that hearing protection equipment you provided was defective falls under products liability — not your premises coverage. Many ranges overlook this until they face a suit.
              </p>

              <h3>Personal and Advertising Injury</h3>
              <p>
                Coverage for libel, slander, copyright infringement, and false arrest claims arising from your business operations. Increasingly important for ranges with active social media presences and online reviews.
              </p>

              <h3>Medical Payments</h3>
              <p>
                Medical payments coverage provides limited reimbursement for minor injuries on your premises regardless of fault — helping resolve small claims quickly without triggering litigation. Typical limits range from $5,000 to $25,000 per person.
              </p>

              <h2>Coverage Limits and Options</h2>
              <p>
                Most shooting range liability policies are structured with:
              </p>
              <ul>
                <li>$1,000,000 per occurrence / $2,000,000 aggregate (most common for small to mid-size ranges)</li>
                <li>$2,000,000 per occurrence / $4,000,000 aggregate (recommended for large facilities and training academies)</li>
                <li>Products/completed operations aggregate matching general aggregate</li>
                <li>Personal and advertising injury limits at $1,000,000 or higher</li>
                <li>Defense costs paid inside or outside limits depending on carrier form</li>
              </ul>
              <p>
                Umbrella and excess liability policies can extend your limits significantly for high-revenue ranges or those with high-profile training programs. CCA can structure umbrella coverage above your primary GL policy.
              </p>

              <h2>Special Endorsements for Shooting Ranges</h2>
              <h3>Assault and Battery Coverage</h3>
              <p>
                Many standard GL policies exclude assault and battery claims. On a shooting range where confrontational situations can occur between patrons, this exclusion creates a significant gap. Assault and battery endorsements — or specialty policies that include it — close this gap.
              </p>
              <h3>Lead Contamination Endorsement</h3>
              <p>
                Standard pollution exclusions apply to lead from spent ammunition. An environmental liability endorsement or standalone policy is required to cover lead abatement costs and third-party lead exposure bodily injury claims. See our <Link href="/services/lead-abatement-environmental-insurance" className="text-secondary hover:underline">Lead Abatement & Environmental Insurance</Link> page for details.
              </p>
              <h3>Additional Insured Endorsements</h3>
              <p>
                Ranges that rent to clubs, host competitions, or operate under management agreements regularly need to add additional insureds to their policy. Standard AI endorsements can typically be added for a nominal fee per entity.
              </p>

              <h2>What Is Not Covered</h2>
              <p>
                Understanding exclusions is as important as understanding coverage. Common exclusions in gun range liability policies include:
              </p>
              <ul>
                <li>Intentional acts — deliberate harm caused by you, your employees, or patrons</li>
                <li>Worker&apos;s compensation claims — separate policy required for employee injuries</li>
                <li>Professional liability — separate E&O/professional liability policy needed for instruction</li>
                <li>Pollution/environmental — separate coverage required for lead contamination</li>
                <li>Auto liability — commercial auto policy required for range vehicles and shuttles</li>
                <li>Liquor liability — if you serve alcohol at events, separate coverage required</li>
              </ul>

              <h2>How Much Does Gun Range Liability Insurance Cost?</h2>
              <p>
                Premium is determined by several factors unique to your operation:
              </p>
              <ul>
                <li>Annual gross revenue and number of shooters served</li>
                <li>Type of facility (indoor, outdoor, mixed use)</li>
                <li>Number of lanes, bays, and targets</li>
                <li>Services offered (retail, gunsmithing, training, rental)</li>
                <li>Membership structure vs. walk-in public access</li>
                <li>Loss history and prior claims</li>
                <li>Safety protocols, range officer staffing, and waiver practices</li>
              </ul>
              <p>
                Small indoor ranges with limited public access typically pay $3,000 to $7,000 annually for a $1M/$2M GL policy. Larger facilities with retail, training programs, and high patron volumes may pay $12,000 to $35,000 or more. Contact us for a precise quote.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Coverage at a Glance</h3>
                <ul className="space-y-3">
                  {[
                    'Bodily injury — patron and third-party',
                    'Property damage liability',
                    'Products & completed operations',
                    'Defense costs (inside or outside limits)',
                    'Medical payments',
                    'Personal & advertising injury',
                    'Additional insured endorsements',
                    'Assault & battery (by endorsement)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get a Quote Today</h3>
                <p className="text-red-100 text-sm mb-4">Speak with a shooting range insurance specialist within 24 hours.</p>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-6 py-3 rounded block text-center hover:bg-gray-100 transition-colors">
                  Request Quote
                </Link>
                <a href="tel:8005550100" className="mt-3 block text-center text-white text-sm font-semibold hover:underline">
                  Or call (800) 555-0100
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Related Coverage</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Lead Abatement Insurance', href: '/services/lead-abatement-environmental-insurance' },
                    { name: 'Indoor Range Insurance', href: '/services/indoor-shooting-range-insurance' },
                    { name: 'Outdoor Range Insurance', href: '/services/outdoor-shooting-range-insurance' },
                    { name: 'RSO Insurance', href: '/services/range-safety-officer-insurance' },
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

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Ready to Protect Your Range?</h2>
          <p className="text-muted text-lg mb-8">Get a customized gun range liability quote from specialists who understand your business.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
