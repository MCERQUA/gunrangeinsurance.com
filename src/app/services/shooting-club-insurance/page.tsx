import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shooting Club Insurance | Gun Club Liability & Member Coverage',
  description: 'Insurance for shooting clubs and associations. Member liability, event coverage, officer protection, and club property insurance for rifle clubs, pistol clubs, and sporting clay associations.',
}

export default function ShootingClubPage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Shooting Club Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Shooting Club Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Shooting clubs, rifle clubs, pistol leagues, and sporting clay associations face distinct insurance requirements as member-based organizations. CCA offers comprehensive coverage designed for the unique legal and operational structure of shooting sports clubs and associations.
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
              <h2>Why Shooting Clubs Need Their Own Insurance</h2>
              <p>
                Shooting clubs, whether organized as non-profit corporations, unincorporated associations, or charitable organizations, are legal entities with their own liability exposure distinct from any range they may own or use. Member injuries, volunteer liability, director and officer decisions, and event operations all create risks that a range owner&apos;s policy — even one that adds the club as an additional insured — may not fully address.
              </p>
              <p>
                Many clubs operate under a misconception that their affiliation with the NRA, NSSF, or a state association provides adequate liability coverage. While some association programs offer basic coverage, these programs are rarely sufficient for clubs with significant membership, their own property, or active competition programs.
              </p>

              <h2>Coverage Components for Shooting Clubs</h2>

              <h3>General Liability for Club Operations</h3>
              <p>
                A shooting club&apos;s GL policy responds to bodily injury and property damage claims arising from club activities. This includes injuries to members during club shoots, injury to guests and non-members at club events, property damage caused by the club&apos;s activities, and incidents that occur on club-owned or leased range property.
              </p>

              <h3>Event Liability</h3>
              <p>
                Clubs that host matches, tournaments, charity shoots, and public events need event liability coverage that extends to organized competitions. Sanctioning body requirements — from USPSA to IDPA to local state organizations — frequently require specific certificate language and minimum liability limits.
              </p>
              <p>
                Event liability should cover:
              </p>
              <ul>
                <li>Competitor injuries during sanctioned matches</li>
                <li>Spectator and range officer injuries during events</li>
                <li>Vendor and sponsor activities at club events</li>
                <li>Cancellation and postponement costs for weather or venue failures (with appropriate endorsement)</li>
              </ul>

              <h3>Directors and Officers (D&O) Liability</h3>
              <p>
                Club boards, officers, and committee chairs can face personal liability for decisions made on behalf of the organization. D&O coverage protects individual volunteers and elected leaders from personal financial exposure arising from:
              </p>
              <ul>
                <li>Membership suspension or expulsion disputes</li>
                <li>Financial management decisions challenged by members</li>
                <li>Contract disputes and vendor disagreements</li>
                <li>Regulatory compliance failures</li>
                <li>Employment-related decisions if the club has paid staff</li>
              </ul>

              <h3>Member-to-Member Liability</h3>
              <p>
                If one member injures another during a club shoot, both the club and individual members may face liability. Club GL policies with member-to-member coverage close the gap that arises when the injured party is also a club member, which some policies exclude under the &quot;insured v. insured&quot; exclusion.
              </p>

              <h3>Volunteer Protection</h3>
              <p>
                Clubs depend on volunteer labor for range maintenance, match operation, safety officer roles, and event coordination. Volunteers acting on behalf of the club should be covered as protected parties under the club&apos;s GL policy. Confirm this explicitly — some policies cover only named insureds and omit volunteers.
              </p>

              <h3>Club Property Insurance</h3>
              <p>
                Clubs that own property — whether a club house, range equipment, club-owned steel targets, trailers, tools, or ATV/golf carts used on the range — need property coverage. Club property is frequently underinsured because volunteer leadership focuses on liability coverage without addressing the property exposure.
              </p>

              <h2>Non-Profit and Tax-Exempt Club Considerations</h2>
              <p>
                Many shooting clubs hold 501(c)(3) or 501(c)(7) tax-exempt status. These organizations have additional considerations — filing compliance, conflict of interest policies, and the requirement to serve a public benefit. An insurance program for a non-profit club should be coordinated with the organization&apos;s governance structure and bylaws.
              </p>

              <h2>Pricing for Club Insurance</h2>
              <p>
                Shooting club insurance premiums are based on:
              </p>
              <ul>
                <li>Number of active members and annual guest participation</li>
                <li>Type of shooting sports covered (pistol, rifle, shotgun, long-range)</li>
                <li>Number and size of events hosted per year</li>
                <li>Whether the club owns range property or leases a facility</li>
                <li>Claims history of the organization</li>
              </ul>
              <p>
                Small clubs with fewer than 100 members and limited event activity can typically obtain a basic GL policy for $1,500-$3,500 annually. Larger clubs with extensive competition programs, owned property, and D&O needs may pay $5,000-$15,000 for a complete program.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Club Coverage Includes</h3>
                <ul className="space-y-3">
                  {[
                    'General liability — member activities',
                    'Event and match coverage',
                    'Directors & officers liability',
                    'Member-to-member liability',
                    'Volunteer protection',
                    'Club property insurance',
                    'Sanctioning body certificates',
                    'Guest and non-member coverage',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get Club Coverage</h3>
                <p className="text-red-100 text-sm mb-4">Programs designed for shooting clubs and associations.</p>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-6 py-3 rounded block text-center hover:bg-gray-100 transition-colors">
                  Request Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Related Coverage</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
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

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Protect Your Shooting Club</h2>
          <p className="text-muted text-lg mb-8">Get a tailored quote for your club or association from specialists in shooting sports insurance.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
