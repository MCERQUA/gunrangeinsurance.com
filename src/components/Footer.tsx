import Link from 'next/link'
import { Shield, Phone, Mail, MapPin } from 'lucide-react'

const services = [
  { name: 'Gun Range Liability Insurance', href: '/services/gun-range-liability-insurance' },
  { name: 'Firearms Instructor Insurance', href: '/services/firearms-instructor-insurance' },
  { name: 'Range Safety Officer Insurance', href: '/services/range-safety-officer-insurance' },
  { name: 'Indoor Shooting Range Insurance', href: '/services/indoor-shooting-range-insurance' },
  { name: 'Outdoor Shooting Range Insurance', href: '/services/outdoor-shooting-range-insurance' },
  { name: 'Retail Gun Store (FFL) Insurance', href: '/services/retail-gun-store-ffl-insurance' },
  { name: 'Shooting Club Insurance', href: '/services/shooting-club-insurance' },
  { name: 'Lead Abatement Insurance', href: '/services/lead-abatement-environmental-insurance' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <span className="font-heading font-bold text-white text-lg leading-tight block">GunRange</span>
                <span className="font-heading font-bold text-accent text-lg leading-tight block -mt-1">Insurance.com</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Specialized insurance solutions for gun ranges, shooting facilities, and firearms professionals. Licensed in all 50 states.
            </p>
            <p className="text-xs text-gray-400">
              Powered by Contractors Choice Agency
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-4">Coverage Types</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-300 hover:text-accent text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-4">More Coverage</h3>
            <ul className="space-y-2">
              {services.slice(4).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-300 hover:text-accent text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:8005550100" className="text-gray-300 hover:text-accent text-sm transition-colors">
                  (800) 555-0100
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@contractorschoiceagency.com" className="text-gray-300 hover:text-accent text-sm transition-colors">
                  info@contractorschoiceagency.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Licensed in All 50 States</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/quote" className="btn-secondary text-sm px-5 py-2.5 inline-block">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GunRangeInsurance.com | Contractors Choice Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-gray-400 hover:text-accent text-sm transition-colors">About</Link>
            <Link href="/blog" className="text-gray-400 hover:text-accent text-sm transition-colors">Resources</Link>
            <Link href="/contact" className="text-gray-400 hover:text-accent text-sm transition-colors">Contact</Link>
            <Link href="/quote" className="text-gray-400 hover:text-accent text-sm transition-colors">Get Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
