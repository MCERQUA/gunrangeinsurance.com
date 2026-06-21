import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Award, Users, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Contractors Choice Agency | Shooting Range Insurance Specialists',
  description: 'Contractors Choice Agency specializes in insurance for gun ranges, shooting facilities, and firearms professionals. 20+ years experience, licensed in all 50 states.',
}

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              About Contractors Choice Agency
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The insurance agency built specifically for the shooting sports industry. Not a side market, not an afterthought — shooting ranges and firearms professionals are our specialty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why We Specialize in Shooting Range Insurance</h2>
              <p className="text-muted leading-relaxed mb-4">
                Contractors Choice Agency was founded on a simple observation: shooting range operators, firearms instructors, and FFL dealers were being consistently underserved by the mainstream insurance market. Standard commercial brokers routinely produced inadequate policies — policies that looked complete on the declarations page but contained exclusions that would deny coverage in precisely the scenarios ranges actually face.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Our founders came from the firearms industry. They understood range operations from the inside — the lead management challenges, the RSO liability concerns, the complexity of combining retail, training, and range operations under one roof. They built CCA to serve the market that standard insurance consistently failed.
              </p>
              <p className="text-muted leading-relaxed">
                Today, CCA is one of the few agencies in the United States with dedicated expertise in shooting range insurance, firearms instructor coverage, and FFL dealer programs. We work exclusively with specialty carriers and surplus lines markets that understand firearms industry risks and design coverage forms for them.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Award, stat: '20+', label: 'Years in Industry' },
                  { icon: MapPin, stat: '50', label: 'States Licensed' },
                  { icon: Users, stat: '1,000+', label: 'Ranges Insured' },
                  { icon: Shield, stat: 'A+', label: 'Carrier Ratings' },
                ].map(({ icon: Icon, stat, label }) => (
                  <div key={stat} className="text-center">
                    <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <p className="text-4xl font-heading font-black text-primary">{stat}</p>
                    <p className="text-muted text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Our Commitment to the Shooting Sports Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Industry Knowledge',
                  desc: 'Our agents have hands-on knowledge of range operations, firearm industry terminology, regulatory requirements, and the specific claims that arise in this niche. We speak your language.',
                },
                {
                  title: 'Specialty Market Access',
                  desc: 'We place business exclusively with A-rated specialty carriers and surplus lines markets that understand shooting range risks — not standard carriers that exclude them through buried policy language.',
                },
                {
                  title: 'Comprehensive Programs',
                  desc: 'From a single-lane indoor pistol range to a large outdoor multi-use facility with retail, training, and gunsmithing operations, we build complete insurance programs — not piecemeal policies.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="card">
                  <CheckCircle className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-primary text-xl mb-3">{title}</h3>
                  <p className="text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-3">Ready to Work With Specialists?</h2>
            <p className="text-red-100 mb-6">Get a free, no-obligation quote from the team that knows shooting range insurance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
                Get a Free Quote
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-heading font-semibold px-8 py-3 rounded hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
