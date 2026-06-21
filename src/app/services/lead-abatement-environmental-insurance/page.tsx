import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lead Abatement & Environmental Insurance for Shooting Ranges',
  description: 'Environmental liability and lead abatement insurance for indoor and outdoor shooting ranges. Covers regulatory cleanup costs, third-party lead exposure claims, and groundwater contamination.',
}

export default function LeadAbatementPage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Lead Abatement &amp; Environmental Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Lead Abatement &amp; Environmental Liability Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Every round fired at a shooting range produces lead residue. Over time, this creates one of the most significant and under-insured liabilities in the shooting range industry. Environmental liability and lead abatement coverage fills the gap left by pollution exclusions in standard GL policies.
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
              <h2>Why Standard Insurance Does Not Cover Lead at Shooting Ranges</h2>
              <p>
                The pollution exclusion is one of the most misunderstood and consequential provisions in commercial general liability insurance. Originally drafted to exclude industrial pollution events, courts have applied this exclusion broadly to include lead contamination from shooting range operations.
              </p>
              <p>
                Under most standard ISO-form GL policies, lead from spent ammunition qualifies as a &quot;pollutant&quot; because it is a solid or particulate contaminant that can cause bodily injury or environmental damage. The pollution exclusion bars coverage for bodily injury, property damage, and cleanup costs arising from lead contamination — including patron lead exposure claims that would otherwise appear to fall squarely within the bodily injury insuring agreement.
              </p>
              <p>
                The result: a range owner who believes they are fully covered for a patron&apos;s blood lead level claim discovers during litigation that their GL carrier is denying the claim as a pollution exclusion. Environmental liability coverage for shooting ranges closes this gap.
              </p>

              <h2>Lead Exposure Liability at Indoor Ranges</h2>
              <p>
                Indoor ranges are the highest-risk environment for lead exposure claims. The enclosed space concentrates lead particulates in the breathing zone of shooters, instructors, RSOs, and range employees. Despite proper HVAC systems and ventilation protocols, lead exposure remains a measurable health risk in indoor shooting environments.
              </p>
              <p>
                Claims arising from indoor range lead exposure include:
              </p>
              <ul>
                <li>Patron elevated blood lead level claims after regular range visits</li>
                <li>Employee occupational lead exposure claims and workers&apos; comp crossover issues</li>
                <li>Child patron lead exposure claims, which courts treat with particular seriousness</li>
                <li>Hearing protection failure combined with lead exposure alleging compounded harm</li>
                <li>Instructor and RSO lead exposure from extended time in range environment</li>
              </ul>

              <h2>Soil and Groundwater Contamination at Outdoor Ranges</h2>
              <p>
                Outdoor ranges accumulate thousands of pounds of lead projectiles in the soil over their operational lifetime. EPA studies have documented significant lead contamination at many established outdoor shooting ranges, with lead concentrations exceeding regulatory action levels in berm soils, downrange soil, and in some cases, underlying groundwater.
              </p>
              <p>
                Regulatory cleanup orders from state environmental agencies or the EPA can mandate:
              </p>
              <ul>
                <li>Soil investigation and lead concentration mapping</li>
                <li>Excavation and proper disposal of contaminated soil</li>
                <li>Lead recovery operations at the berm and downrange areas</li>
                <li>Groundwater monitoring and treatment if contamination is detected</li>
                <li>Institutional controls and land use restrictions post-remediation</li>
                <li>Ongoing monitoring and compliance reporting for regulatory agencies</li>
              </ul>
              <p>
                These costs can range from tens of thousands to several million dollars for heavily contaminated large-acreage outdoor ranges. Without environmental insurance, these costs are borne entirely by the range owner.
              </p>

              <h2>What Environmental Liability Insurance Covers</h2>

              <h3>Regulatory Cleanup Costs (First-Party)</h3>
              <p>
                Covers the cost of investigating, remediating, and monitoring lead contamination on your own property when required by regulatory order or as a prudent remediation to prevent a regulatory action. This is the single largest financial exposure most shooting ranges face in the environmental category.
              </p>

              <h3>Third-Party Bodily Injury from Lead Exposure</h3>
              <p>
                Provides coverage for claims that lead from your range operations caused bodily injury to patrons, employees, neighbors, or other third parties. This fills the gap left by the pollution exclusion in your standard GL policy.
              </p>

              <h3>Third-Party Property Damage from Contamination</h3>
              <p>
                If lead from your outdoor range migrates to an adjacent property and causes measurable contamination, you may face liability for the property damage and cleanup costs on the neighboring parcel. Environmental coverage responds to these third-party property damage claims.
              </p>

              <h3>Legal Defense Costs</h3>
              <p>
                Environmental regulatory actions and third-party contamination suits generate significant legal defense costs. Environmental liability policies typically include dedicated defense cost coverage either within or in addition to the policy limits, depending on the carrier form.
              </p>

              <h3>Natural Resource Damage Claims</h3>
              <p>
                If contamination from your range affects wildlife, water bodies, or other natural resources that are subject to public trust protection, you may face natural resource damage claims from state agencies. Some environmental policies include this coverage.
              </p>

              <h2>Lead Abatement Best Practices That Reduce Your Premium</h2>
              <p>
                Insurers evaluate your lead management program when underwriting environmental coverage. Documented best practices can significantly reduce your premium:
              </p>
              <ul>
                <li>Regular air quality monitoring with documented results</li>
                <li>OSHA-compliant lead hygiene program for employees</li>
                <li>Annual or biennial lead recovery from berms and downrange areas</li>
                <li>Use of jacketed or copper-plated bullets to reduce airborne lead</li>
                <li>Industrial HVAC with HEPA filtration at indoor ranges</li>
                <li>Patron and employee blood lead level testing program</li>
                <li>Partnership with a licensed lead recycler for reclaimed projectiles</li>
              </ul>

              <h2>Combining Environmental Coverage with Your GL Policy</h2>
              <p>
                CCA structures environmental liability either as an endorsement to your primary GL policy or as a standalone environmental liability policy, depending on the carrier and the scope of coverage needed. For most ranges, a package that includes GL plus environmental provides the most seamless and cost-effective protection.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Environmental Coverage</h3>
                <ul className="space-y-3">
                  {[
                    'Regulatory cleanup costs',
                    'Third-party lead exposure claims',
                    'Groundwater contamination',
                    'Soil remediation costs',
                    'Property damage to neighbors',
                    'Legal defense costs',
                    'Natural resource damage',
                    'Ongoing monitoring costs',
                    'First-party & third-party combined',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get Environmental Coverage</h3>
                <p className="text-red-100 text-sm mb-4">Stop relying on GL coverage that excludes lead. Get real protection.</p>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-6 py-3 rounded block text-center hover:bg-gray-100 transition-colors">
                  Request Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Also Needed</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
                    { name: 'Indoor Range Insurance', href: '/services/indoor-shooting-range-insurance' },
                    { name: 'Outdoor Range Insurance', href: '/services/outdoor-shooting-range-insurance' },
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
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Close the Lead Liability Gap</h2>
          <p className="text-muted text-lg mb-8">Environmental liability insurance for shooting ranges — not just a GL with gaps. Get a quote from specialists.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
