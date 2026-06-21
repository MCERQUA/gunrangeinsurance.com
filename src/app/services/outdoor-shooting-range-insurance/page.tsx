import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Outdoor Shooting Range Insurance | Outdoor Range Liability Coverage',
  description: 'Insurance for outdoor shooting ranges. Covers stray projectile liability, noise complaints, environmental liability, property damage, and range operations. Get a quote today.',
}

export default function OutdoorRangePage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Outdoor Shooting Range Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Outdoor Shooting Range Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Outdoor shooting ranges carry exposures that indoor facilities do not — stray projectile liability, noise nuisance claims, soil lead contamination, and the jurisdictional complexity of large property operations. CCA builds coverage packages that address the full scope of outdoor range liability.
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
              <h2>Outdoor Range Exposures Require Specialized Coverage</h2>
              <p>
                Outdoor shooting ranges — whether rifle ranges, multi-bay pistol ranges, sporting clays facilities, or trap and skeet ranges — operate with a set of liability exposures that extend far beyond the firing line. The open-air environment means that projectiles, noise, lead, and environmental impacts affect areas well beyond your property line, creating third-party liability that standard policies are not designed to address.
              </p>

              <h2>Stray Projectile and Errant Round Liability</h2>
              <p>
                One of the highest-severity risks for outdoor ranges is an errant round that travels beyond the range boundary. Even well-maintained ranges with proper backstops and berm configurations face this risk from ricochets, shoot-throughs, or shooter error. Coverage must explicitly include projectile travel liability and not exclude it under a firearms or expected/intended injury exclusion.
              </p>
              <p>
                Claims arising from errant rounds can include bodily injury to persons on adjacent properties, property damage to neighboring structures or vehicles, injury to livestock or damage to agricultural operations near the range, and claims from hunters on adjacent land during club matches.
              </p>
              <p>
                The per-occurrence and aggregate limits you choose for projectile liability should reflect the density of development near your range. Ranges near residential areas or roads should carry higher limits than truly remote rural facilities.
              </p>

              <h2>Noise Liability and Nuisance Claims</h2>
              <p>
                As suburban and exurban development expands into historically rural areas, many established outdoor ranges find themselves increasingly surrounded by residential neighbors who were not present when the range was founded. Noise nuisance claims — including claims for property value diminishment, loss of quiet enjoyment, and interference with daily life — represent a growing litigation trend against outdoor ranges.
              </p>
              <p>
                Most standard GL policies exclude nuisance claims or cap coverage for non-physical injury claims. Specialty outdoor range policies can include nuisance defense coverage, and CCA can advise on how your state&apos;s shooting range protection statutes affect your exposure.
              </p>

              <h2>Soil and Environmental Contamination</h2>
              <p>
                Outdoor ranges accumulate spent lead projectiles in the soil over time. As lead weathers, it can leach into groundwater and spread through stormwater runoff. Regulatory agencies — including state environmental departments and the EPA — have the authority to order investigation and remediation of lead-contaminated soils at shooting range sites.
              </p>
              <p>
                Environmental liability coverage for outdoor ranges should include:
              </p>
              <ul>
                <li>Regulatory-mandated investigation and remediation costs</li>
                <li>Third-party bodily injury from soil or groundwater contamination</li>
                <li>Third-party property damage from contamination migrating to adjacent parcels</li>
                <li>Defense costs in regulatory proceedings</li>
                <li>Natural resource damage claims</li>
              </ul>

              <h2>Premises Liability on Large Properties</h2>
              <p>
                Outdoor ranges often encompass significant acreage with varied terrain. Trails, wooded areas, vehicle access roads, target ranges at varying distances, and outbuildings all create premises liability exposures. Visitors injured while traversing non-range areas of your property can bring premises liability claims under state landowner liability frameworks.
              </p>
              <p>
                It is essential that your GL policy covers the entire legal parcel you own or control, not just the active range areas. Confirm that coverage extends to parking areas, access roads, maintenance buildings, and undeveloped portions of your property.
              </p>

              <h2>Sporting Clays, Trap, and Skeet Specific Coverage</h2>
              <p>
                Clay target ranges have unique exposures not present at rifle and pistol ranges. Mechanical traps can malfunction and injure both operators and participants. Shot pellets travel in a wide pattern that affects a large area. Lead shot accumulation in soil can be a significant environmental concern, particularly at facilities near water bodies.
              </p>
              <p>
                Coverage for clay target range machinery, trap house structures, equipment liability, and sporting clay course liability should be specifically addressed in your policy.
              </p>

              <h2>Competition and Event Coverage</h2>
              <p>
                Many outdoor ranges host competitions — IDPA matches, 3-gun events, precision rifle competitions, NRL Hunter events, and club championships. These events bring additional participants, spectators, and media presence that increase your liability exposure. Event liability endorsements or separate event policies ensure that organized competitions and charity shoots are properly covered.
              </p>

              <h2>Property Coverage for Outdoor Range Infrastructure</h2>
              <p>
                Outdoor range property includes structures and improvements that require specific valuation:
              </p>
              <ul>
                <li>Covered firing line structures and pavilions</li>
                <li>Earthwork berms and backstops (difficult to value but expensive to reconstruct)</li>
                <li>Target frames, steel targets, and automated target systems</li>
                <li>Club house, restroom facilities, and storage buildings</li>
                <li>Golf cart and ATV fleet for range operations</li>
                <li>Trap houses and clay target launching equipment</li>
                <li>Fencing, gates, and security infrastructure</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Outdoor Range Coverage</h3>
                <ul className="space-y-3">
                  {[
                    'Stray projectile liability',
                    'Noise nuisance defense',
                    'Soil lead contamination',
                    'Environmental remediation costs',
                    'Large premises liability',
                    'Sporting clays & trap coverage',
                    'Competition event coverage',
                    'Property for range infrastructure',
                    'Adjacent property owner claims',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get Outdoor Range Quote</h3>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-6 py-3 rounded block text-center hover:bg-gray-100 transition-colors">
                  Request Quote
                </Link>
                <a href="tel:8005550100" className="mt-3 block text-center text-white text-sm font-semibold hover:underline">
                  Or call (800) 555-0100
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Related Pages</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Indoor Range Insurance', href: '/services/indoor-shooting-range-insurance' },
                    { name: 'Lead Abatement Insurance', href: '/services/lead-abatement-environmental-insurance' },
                    { name: 'Shooting Club Insurance', href: '/services/shooting-club-insurance' },
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
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Insure Your Outdoor Range Today</h2>
          <p className="text-muted text-lg mb-8">Get a comprehensive outdoor range quote from specialists who understand your operation.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
