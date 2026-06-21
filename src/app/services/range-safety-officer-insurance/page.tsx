import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Range Safety Officer (RSO) Insurance | RSO Liability Coverage',
  description: 'Liability insurance for Range Safety Officers (RSOs). Individual and staff RSO coverage for on-range supervision, safety enforcement, and incident response. Get a quote.',
}

export default function RSOInsurancePage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Range Safety Officer Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Range Safety Officer (RSO) Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              When something goes wrong at a shooting range, the RSO is often named in the lawsuit alongside the range owner. Dedicated liability coverage for Range Safety Officers protects you personally from the consequences of supervising an inherently high-risk environment.
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
              <h2>The Liability Reality for Range Safety Officers</h2>
              <p>
                Range Safety Officers occupy one of the most demanding positions in the shooting sports industry. You are responsible for enforcing safety rules, identifying dangerous behavior, clearing malfunctions, and responding to medical emergencies — all while monitoring multiple shooters simultaneously. When an incident occurs, plaintiff attorneys frequently name the RSO personally, alleging failure to supervise, failure to intervene, or improper clearance of a malfunction.
              </p>
              <p>
                A range&apos;s general liability policy protects the business entity — but individual RSOs, whether employees or independent contractors, may have limited protection under the range&apos;s policy. Staff RSOs employed by the range may receive some protection as covered persons, but this coverage can be disputed, insufficient, or exclude specific circumstances. Independent RSOs and those working multiple ranges need their own policy.
              </p>

              <h2>What RSO Insurance Covers</h2>

              <h3>Personal Liability for Supervision Decisions</h3>
              <p>
                Covers claims alleging that your supervision decisions — or failure to act — contributed to an injury. Examples include:
              </p>
              <ul>
                <li>Failure to remove an unsafe shooter from the line</li>
                <li>Allowing a prohibited firearm configuration on the range</li>
                <li>Malfunction clearance that resulted in accidental discharge</li>
                <li>Failure to call a ceasefire when unsafe conditions were present</li>
                <li>Range commands that a plaintiff claims were unclear or incorrect</li>
              </ul>

              <h3>Emergency Response Liability</h3>
              <p>
                If you administer first aid or CPR following a range injury, you may face liability for how you responded — even under Good Samaritan protections, which vary by state. RSO insurance provides defense coverage for emergency response claims and peace of mind that your instinct to help will not become a personal financial liability.
              </p>

              <h3>Independent RSO Operations</h3>
              <p>
                RSOs who work as independent contractors across multiple facilities, including private shoots, competitions, and club events, face exposure at locations where no range GL policy exists. Your personal RSO liability policy travels with you to every assignment, closing gaps that would otherwise leave you personally exposed.
              </p>

              <h3>Employment Practices Protection</h3>
              <p>
                For RSOs in supervisory roles who manage range staff or volunteers, employment practices liability protection can be added to address wrongful termination, discrimination, and harassment claims related to the supervision of personnel.
              </p>

              <h2>Staff RSO vs. Independent RSO — Coverage Differences</h2>
              <p>
                Staff RSOs employed by a range are typically covered as &quot;employees&quot; under the range&apos;s GL policy for acts within the scope of employment. However, this coverage has important limitations:
              </p>
              <ul>
                <li>Coverage applies only at the employing range — off-premises RSO work is not covered</li>
                <li>The range&apos;s insurer may seek contribution from the RSO personally in subrogation</li>
                <li>Claims arising from outside scope of employment are excluded</li>
                <li>The range&apos;s policy may have insufficient limits to protect both the business and named individual defendants</li>
              </ul>
              <p>
                Independent contractor RSOs have no coverage under the range&apos;s policy and are specifically excluded as non-employees. A standalone RSO liability policy is essential.
              </p>

              <h2>NRA Range Safety Officer Certification and Insurance</h2>
              <p>
                The NRA Range Safety Officer certification is the most widely recognized RSO credential in the industry. NRA-certified RSOs may be able to access certain group or association liability programs. However, these programs vary significantly in scope, limits, and the breadth of activities covered.
              </p>
              <p>
                CCA can review any existing NRA or state association programs you participate in and identify gaps that warrant individual coverage. In most cases, the cost of a personal RSO liability policy is modest and provides significantly broader protection than association group programs.
              </p>

              <h2>Typical Coverage Structure and Pricing</h2>
              <p>
                RSO liability policies are typically structured as:
              </p>
              <ul>
                <li>$1,000,000 per occurrence / $2,000,000 aggregate for individual RSOs</li>
                <li>Defense costs typically included in addition to limits</li>
                <li>Annual premiums ranging from $400 to $1,500 for individual RSOs</li>
                <li>Higher limits and group policies available for ranges insuring their RSO staff collectively</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">RSO Coverage Includes</h3>
                <ul className="space-y-3">
                  {[
                    'Personal supervision liability',
                    'Malfunction clearance liability',
                    'Emergency response coverage',
                    'Independent contractor RSO coverage',
                    'Multi-location coverage',
                    'Defense costs included',
                    'NRA-certified RSO options',
                    'Group staff policies available',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get RSO Coverage</h3>
                <p className="text-red-100 text-sm mb-4">Individual policies from $400/year. Group rates available.</p>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-6 py-3 rounded block text-center hover:bg-gray-100 transition-colors">
                  Request Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Related Coverage</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Firearms Instructor Insurance', href: '/services/firearms-instructor-insurance' },
                    { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
                    { name: 'Indoor Range Insurance', href: '/services/indoor-shooting-range-insurance' },
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
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Protect Yourself as an RSO</h2>
          <p className="text-muted text-lg mb-8">Get a personalized quote for Range Safety Officer liability insurance.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
