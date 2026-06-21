import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Award, Users, Star, CheckCircle, ArrowRight, Phone,
  Target, Building2, MapPin, Zap, Lock, FileText, Truck, Leaf
} from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Gun Range Insurance | Specialized Shooting Range Coverage',
  description: 'Comprehensive insurance for gun ranges and shooting facilities. General liability, property, lead abatement, firearms instructor & RSO coverage. Licensed in all 50 states. Get your free quote today.',
}

const services = [
  {
    title: 'Gun Range Liability Insurance',
    description: 'Comprehensive general liability coverage for shooting ranges protecting against bodily injury, property damage, and firearms-related incidents.',
    href: '/services/gun-range-liability-insurance',
    icon: Shield,
  },
  {
    title: 'Firearms Instructor Insurance',
    description: 'Professional liability and general liability coverage for firearms instructors and trainers offering classes and certifications.',
    href: '/services/firearms-instructor-insurance',
    icon: Target,
  },
  {
    title: 'Range Safety Officer Insurance',
    description: 'Dedicated liability protection for RSOs and range officers overseeing shooting activities and enforcing safety protocols.',
    href: '/services/range-safety-officer-insurance',
    icon: Lock,
  },
  {
    title: 'Indoor Shooting Range Insurance',
    description: 'Tailored coverage for indoor facilities including ventilation liability, lead contamination, and property protection.',
    href: '/services/indoor-shooting-range-insurance',
    icon: Building2,
  },
  {
    title: 'Outdoor Shooting Range Insurance',
    description: 'Specialized coverage for outdoor ranges addressing unique risks like projectile travel, noise liability, and environmental concerns.',
    href: '/services/outdoor-shooting-range-insurance',
    icon: MapPin,
  },
  {
    title: 'Retail Gun Store (FFL) Insurance',
    description: 'Complete insurance packages for FFL dealers including gunsmith coverage, inventory protection, and dealer liability.',
    href: '/services/retail-gun-store-ffl-insurance',
    icon: FileText,
  },
  {
    title: 'Shooting Club Insurance',
    description: 'Group coverage for shooting sports clubs and associations, including member liability and event coverage.',
    href: '/services/shooting-club-insurance',
    icon: Users,
  },
  {
    title: 'Lead Abatement & Environmental',
    description: 'Environmental liability and cleanup cost coverage for lead contamination from spent ammunition at shooting ranges.',
    href: '/services/lead-abatement-environmental-insurance',
    icon: Leaf,
  },
]

const testimonials = [
  {
    quote: 'After my previous insurer dropped us because of our range, CCA stepped in with a policy that actually covers everything we need. Their agents understand shooting ranges inside and out.',
    author: 'Mike Patterson',
    role: 'Owner, Eagle Eye Shooting Range',
    location: 'Phoenix, AZ',
  },
  {
    quote: 'I teach concealed carry classes and needed instructor insurance that covers both the classroom and range sessions. CCA designed the perfect policy and the price was very reasonable.',
    author: 'Sarah Brennan',
    role: 'Certified Firearms Instructor',
    location: 'Nashville, TN',
  },
  {
    quote: 'Our outdoor range had unique liability concerns that mainstream insurers had never seen. CCA put together a package that handles everything from noise complaints to environmental liability.',
    author: 'Dave Kowalski',
    role: 'Director, Lakewood Rifle & Pistol Club',
    location: 'Denver, CO',
  },
  {
    quote: 'As an FFL dealer with an attached range, finding one policy to cover both was impossible until we found CCA. One call, one agent, one policy. Exactly what we needed.',
    author: 'James Nguyen',
    role: 'Owner, Patriot Arms & Indoor Range',
    location: 'Dallas, TX',
  },
]

const faqs = [
  {
    question: 'What does general liability insurance cover for a shooting range?',
    answer: 'General liability for a shooting range covers bodily injury to patrons and third parties, property damage caused by range operations, products liability for ammunition and equipment sold, personal and advertising injury, and legal defense costs. Most policies also cover incidents that occur during firearms training activities on your premises.',
  },
  {
    question: 'Is lead abatement coverage included in standard range insurance?',
    answer: 'Standard general liability policies typically exclude pollution and environmental liability, which includes lead contamination from spent ammunition. Shooting ranges require a separate environmental liability endorsement or standalone policy to cover lead abatement costs, regulatory fines, and third-party bodily injury from lead exposure. CCA specializes in combining this coverage with your core policy.',
  },
  {
    question: 'Do firearms instructors need their own insurance separate from the range?',
    answer: 'Yes. Firearms instructors carry personal liability that extends beyond the range premises coverage. If you teach at multiple locations or operate your own training business, you need professional liability (errors & omissions) and general liability in your own name. This covers you for training methodology claims, student injuries attributed to your instruction, and off-premises teaching.',
  },
  {
    question: 'What is the typical cost of gun range insurance?',
    answer: 'Premiums vary based on facility type (indoor vs. outdoor), annual revenue, square footage, number of lanes, services offered (training, gunsmithing, retail), claims history, and desired coverage limits. A small indoor range might pay $3,000-$8,000 annually while a large multi-use facility could pay $15,000-$40,000 or more. Contact us for a precise quote based on your operation.',
  },
  {
    question: 'Does range insurance cover events and competitions?',
    answer: 'Coverage for organized events and competitions depends on your policy. Some policies include incidental events coverage, while others require an endorsement or separate event liability policy. USPSA matches, 3-gun competitions, and charity shoots often require additional insured endorsements for sanctioning bodies. We can structure your policy to include these events.',
  },
  {
    question: 'Can I get coverage if my range was dropped by another insurer?',
    answer: 'Yes. CCA specializes in hard-to-place shooting range accounts. We work with surplus lines markets and specialty carriers that understand the firearms industry. Being declined by a standard carrier does not disqualify you, though we will need full information about any past losses or claims to find the right market.',
  },
  {
    question: 'Does my range need to be licensed or NRA-affiliated to get coverage?',
    answer: 'Licensing and affiliation requirements vary by carrier and state. Most policies do not require NRA range affiliation, though membership with NSSF or your state shooting sports association may be viewed favorably. State licensing requirements for your type of operation must be met for coverage to apply.',
  },
]

const coverageItems = [
  { label: 'General Liability', desc: 'Bodily injury and property damage claims from range operations' },
  { label: 'Products Liability', desc: 'Claims arising from firearms, ammunition, or accessories sold' },
  { label: 'Professional Liability', desc: 'Training errors and omissions for instructors and RSOs' },
  { label: 'Property Insurance', desc: 'Building, equipment, firearms inventory, and range improvements' },
  { label: 'Lead Abatement', desc: 'Regulatory cleanup costs and third-party lead exposure claims' },
  { label: 'Defense Costs', desc: 'Legal fees paid in addition to liability limits — critical for range claims' },
]

const facilityTypes = [
  { type: 'Indoor Pistol & Rifle Ranges', detail: 'Commercial, members-only, or mixed-use facilities' },
  { type: 'Outdoor Rifle Ranges', detail: 'Multi-bay rifle, pistol, and shotgun facilities' },
  { type: 'Sporting Clays & Trap Ranges', detail: 'Clay target shooting operations and leagues' },
  { type: 'Firearms Instructor Businesses', detail: 'CCW, NRA, USCCA, and defensive training' },
  { type: 'Shooting Clubs & Associations', detail: 'Non-profit and membership-based clubs' },
  { type: 'FFL Dealers & Gun Stores', detail: 'Retail dealers with or without attached ranges' },
  { type: 'Range Safety Officers', detail: 'Independent and staff RSOs' },
  { type: 'Gunsmithing Operations', detail: 'Repair, custom, and service facilities' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://gunrangeinsurance.com/#organization',
      name: 'Contractors Choice Agency — GunRangeInsurance.com',
      url: 'https://gunrangeinsurance.com',
      telephone: '(800) 555-0100',
      email: 'info@contractorschoiceagency.com',
      areaServed: 'US',
      knowsAbout: ['shooting range insurance', 'gun range liability', 'firearms instructor insurance', 'FFL dealer insurance'],
    },
    {
      '@type': 'InsuranceAgency',
      '@id': 'https://gunrangeinsurance.com/#agency',
      name: 'Contractors Choice Agency',
      description: 'Specialized insurance for shooting ranges, gun ranges, firearms instructors, and FFL dealers. Licensed in all 50 states.',
      url: 'https://gunrangeinsurance.com',
      telephone: '(800) 555-0100',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-primary shield-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-800 opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 text-accent" />
                Specialized Shooting Range Insurance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                Insurance Built for
                <span className="text-accent block">Gun Ranges &</span>
                Shooting Facilities
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                General liability, lead abatement, firearms instructor coverage, and FFL protection — all from specialists who know the shooting industry. Licensed in all 50 states. 20+ years experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/quote" className="btn-secondary text-center px-8 py-4 text-lg">
                  Get a Free Quote
                </Link>
                <a href="tel:8005550100" className="flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold px-8 py-4 rounded hover:bg-white hover:text-primary transition-colors text-lg">
                  <Phone className="w-5 h-5" />
                  (800) 555-0100
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {['Licensed All 50 States', 'No Obligation Quote', 'Same-Day Response', 'Former Industry Insiders'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="font-heading font-bold text-primary text-2xl mb-2 text-center">Get Your Free Quote</h2>
                <p className="text-muted text-center text-sm mb-6">No obligation. Response within 24 hours.</p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: MapPin, stat: 'All 50 States', label: 'Licensed & Authorized' },
              { icon: Award, stat: '20+ Years', label: 'Industry Experience' },
              { icon: Star, stat: 'A+ Rated', label: 'Carrier Partners' },
              { icon: Users, stat: '1,000+', label: 'Ranges Insured' },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={stat} className="flex flex-col items-center">
                <Icon className="w-6 h-6 text-secondary mb-2" />
                <p className="font-heading font-black text-primary text-2xl">{stat}</p>
                <p className="text-muted text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Complete Coverage for Every Shooting Facility</h2>
            <p className="section-subheading mx-auto">
              From single-lane indoor pistol ranges to large multi-use outdoor facilities — we have the specialized coverage your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-lg shadow-sm border border-border p-6 hover:shadow-md hover:border-secondary/30 transition-all duration-200 flex flex-col"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-primary text-base mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow">{service.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-secondary font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why CCA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading">Why Gun Range Owners Choose CCA</h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Most insurance brokers treat shooting ranges as high-risk afterthoughts. At Contractors Choice Agency, gun ranges and firearms businesses are our specialty — not a side market.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: 'Firearms Industry Specialists',
                    desc: 'Our agents have hands-on knowledge of range operations, liability exposures, and the insurance markets that cover them.',
                  },
                  {
                    icon: Zap,
                    title: 'Fast, Custom Quotes',
                    desc: 'No generic policies. We structure coverage around your specific facility type, revenue, and risk profile.',
                  },
                  {
                    icon: Shield,
                    title: 'Specialty Carrier Access',
                    desc: 'We place business with A-rated specialty markets that actually understand shooting range exposures — not standard carriers that exclude them.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Claims Advocacy',
                    desc: 'When a claim occurs, we advocate for you throughout the process — not just at policy issuance.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">{title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-indoor-range.png"
                  alt="Professional indoor shooting range facility"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/firearms-instructor.png"
                    alt="Firearms instructor and student at shooting range"
                    width={280}
                    height={200}
                    className="w-full object-cover h-40"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/outdoor-shooting-range.png"
                    alt="Outdoor shooting range facility"
                    width={280}
                    height={200}
                    className="w-full object-cover h-40"
                  />
                </div>
              </div>
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Coverage Highlights</h3>
                <div className="space-y-3">
                  {coverageItems.map(({ label, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary text-sm">{label}</p>
                        <p className="text-muted text-xs">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <Link href="/quote" className="btn-primary w-full text-center block">
                    Get Your Coverage Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Cover */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Who We Cover</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every type of shooting facility and firearms professional deserves specialized insurance protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilityTypes.map(({ type, detail }) => (
              <div key={type} className="bg-white/10 rounded-lg p-5 border border-white/20">
                <Shield className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{type}</h3>
                <p className="text-gray-400 text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Getting Covered Is Simple</h2>
            <p className="section-subheading mx-auto">
              Three steps from first contact to active protection for your shooting facility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Request Your Quote',
                desc: 'Complete our short online form or call us. Tell us about your facility type, size, services, and current coverage situation.',
              },
              {
                step: '02',
                title: 'Review Your Options',
                desc: 'A specialist reviews your account and presents customized coverage options from our specialty markets. We explain exactly what is and is not covered.',
              },
              {
                step: '03',
                title: 'Get Covered Today',
                desc: 'Approve your policy and receive certificates of insurance immediately. Most policies can be bound same-day for qualified applicants.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading font-black text-white text-xl">{step}</span>
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-3">{title}</h3>
                <p className="text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/quote" className="btn-primary px-10 py-4 text-lg">
              Start Your Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Range Owners Trust CCA</h2>
            <p className="section-subheading mx-auto">
              Hear from shooting range owners and firearms professionals who found the right coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-xl shadow-sm border border-border p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{t.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm">{t.author}</p>
                    <p className="text-muted text-xs">{t.role} — {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading mx-auto">
              Common questions about gun range and shooting facility insurance.
            </p>
          </div>
          <FAQAccordion items={faqs} />
          <div className="text-center mt-10">
            <p className="text-muted mb-4">Have more questions? Our specialists are standing by.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8005550100" className="btn-primary px-8 py-3">
                Call (800) 555-0100
              </a>
              <Link href="/contact" className="btn-outline px-8 py-3">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-white/30 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
            Protect Your Range. Protect Your Business.
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            One incident without proper coverage can end a shooting range business. Get the specialized protection you need from the only agency that puts shooting ranges first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-10 py-4 rounded hover:bg-gray-100 transition-colors text-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:8005550100" className="border-2 border-white text-white font-heading font-semibold px-10 py-4 rounded hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              (800) 555-0100
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
