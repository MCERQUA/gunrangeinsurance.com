import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Firearms Instructor Insurance | Professional Liability for Gun Instructors',
  description: 'Insurance for firearms instructors and trainers. Professional liability (E&O), general liability, and on-range coverage for NRA instructors, CCW trainers, and defensive shooting educators.',
}

export default function FirearmsInstructorPage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Firearms Instructor Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Firearms Instructor Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Purpose-built coverage for firearms instructors, trainers, and educators. Whether you teach CCW, NRA courses, tactical defensive shooting, or basic firearm safety — your instruction carries liability that requires dedicated protection.
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
              <h2>Why Firearms Instructors Need Their Own Insurance</h2>
              <p>
                Many firearms instructors assume they are covered under the range&apos;s policy where they teach. This is a dangerous misconception. A range&apos;s general liability policy protects the range owner — not the independent instructor. If a student suffers an injury and alleges your instruction was at fault, you face personal liability that the range&apos;s policy will not respond to.
              </p>
              <p>
                Firearms instruction is a professional service. Like a doctor, attorney, or accountant, you can be sued for errors in your professional advice and teaching methods — not just for on-range accidents. Professional liability (errors and omissions) coverage is the layer that protects your livelihood when a student claims your instruction caused them harm.
              </p>

              <h2>Coverage Components for Firearms Instructors</h2>

              <h3>Professional Liability / Errors and Omissions (E&O)</h3>
              <p>
                Professional liability coverage responds to claims that your instruction was negligent, that you taught incorrect techniques, that you failed to identify a student&apos;s safety deficiency, or that your curriculum caused a student harm. Examples of covered claims include:
              </p>
              <ul>
                <li>Student is injured while applying a technique you taught</li>
                <li>Student uses firearm incorrectly due to alleged incomplete instruction</li>
                <li>Claim that you certified a student who was not competent to carry</li>
                <li>Allegation that your course materials contained erroneous safety information</li>
                <li>Defense of a complaint to your certifying organization (NRA, USCCA, state licensing board)</li>
              </ul>

              <h3>General Liability — Premises and Operations</h3>
              <p>
                Even instructors who teach exclusively at established ranges need general liability in their own name. If a student trips over your equipment bag, if you accidentally damage range property, or if a third party is injured during a class you conducted, your personal GL policy responds — not the range&apos;s.
              </p>
              <p>
                Instructors who teach at multiple venues, private properties, or outdoor locations have additional exposure. Coverage follows you to wherever you conduct instruction, as long as the location falls within the policy&apos;s covered premises definitions.
              </p>

              <h3>On-Range / Firearms-Specific Liability</h3>
              <p>
                Specialty instructor policies include explicit coverage for on-range instruction activities including live-fire exercises, handling of student firearms, and demonstrations. This is a critical distinction — many standard professional liability policies exclude firearms activities entirely.
              </p>

              <h3>Equipment and Training Materials Coverage</h3>
              <p>
                Coverage for your instructional equipment — simulators, dummy rounds, target systems, first aid gear, classroom materials, and personal firearms used in demonstration — can be added via inland marine or equipment floater coverage.
              </p>

              <h2>Who Needs Firearms Instructor Insurance?</h2>
              <ul>
                <li>NRA-certified instructors (Basic Pistol, Personal Protection, Home Defense)</li>
                <li>USCCA certified instructors</li>
                <li>State-specific CCW/CHL instructors</li>
                <li>Defensive shooting and tactical trainers</li>
                <li>Law enforcement firearms trainers (off-duty or private instruction)</li>
                <li>Youth shooting sports coaches and 4-H Shooting Sports instructors</li>
                <li>Women-only and introductory shooting course instructors</li>
                <li>Online and classroom-only firearms safety educators</li>
              </ul>

              <h2>Coverage Limits and Pricing</h2>
              <p>
                Firearms instructor policies typically offer:
              </p>
              <ul>
                <li>$1,000,000 per occurrence / $2,000,000 aggregate general liability</li>
                <li>$1,000,000 per claim / $2,000,000 aggregate professional liability</li>
                <li>Policies can be structured on an annual or per-course basis</li>
              </ul>
              <p>
                Annual premiums for individual instructors typically range from $500 to $2,500 depending on the volume and type of instruction, number of students annually, and whether live-fire instruction is included. Instructors operating training academies or employing other instructors will have higher premiums based on organizational scale.
              </p>

              <h2>Coordinating Instructor Coverage with Range Policies</h2>
              <p>
                If you are a staff instructor at a range, your employer&apos;s policy may provide some coverage — but you should verify this in writing and understand exactly what is and is not included. Independent contractor instructors and those who teach at multiple locations should maintain their own policies regardless of any arrangement with host ranges.
              </p>
              <p>
                CCA can help structure your coverage to coordinate properly with any range policies and avoid coverage gaps or duplication.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">What&apos;s Covered</h3>
                <ul className="space-y-3">
                  {[
                    'Professional liability (E&O)',
                    'General liability — on and off range',
                    'Live-fire instruction liability',
                    'Student injury claims',
                    'Certification and curriculum defense',
                    'Equipment floater available',
                    'Multi-location coverage',
                    'Part-time instructor options',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get Instructor Coverage</h3>
                <p className="text-red-100 text-sm mb-4">Policies for instructors starting from $500/year.</p>
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
                    { name: 'Range Safety Officer Insurance', href: '/services/range-safety-officer-insurance' },
                    { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
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
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Protect Your Instruction Business</h2>
          <p className="text-muted text-lg mb-8">Get a tailored quote for firearms instructor insurance from specialists who understand your work.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
