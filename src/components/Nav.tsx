'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, Phone } from 'lucide-react'

const services = [
  { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
  { name: 'Firearms Instructor', href: '/services/firearms-instructor-insurance' },
  { name: 'Range Safety Officer', href: '/services/range-safety-officer-insurance' },
  { name: 'Indoor Shooting Range', href: '/services/indoor-shooting-range-insurance' },
  { name: 'Outdoor Shooting Range', href: '/services/outdoor-shooting-range-insurance' },
  { name: 'Retail Gun Store (FFL)', href: '/services/retail-gun-store-ffl-insurance' },
  { name: 'Shooting Club', href: '/services/shooting-club-insurance' },
  { name: 'Lead Abatement & Environmental', href: '/services/lead-abatement-environmental-insurance' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-secondary" />
            <div>
              <span className="font-heading font-bold text-primary text-lg leading-tight block">GunRange</span>
              <span className="font-heading font-bold text-secondary text-lg leading-tight block -mt-1">Insurance.com</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button
                className="font-heading font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Coverage
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border border-border py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-surface hover:text-secondary transition-colors font-body"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog" className="font-heading font-semibold text-primary hover:text-secondary transition-colors">
              Resources
            </Link>
            <Link href="/about" className="font-heading font-semibold text-primary hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-heading font-semibold text-primary hover:text-secondary transition-colors">
              Contact
            </Link>
            <a href="tel:8005550100" className="flex items-center gap-2 text-primary font-heading font-semibold">
              <Phone className="w-4 h-4 text-secondary" />
              (800) 555-0100
            </a>
            <Link href="/quote" className="btn-primary text-sm px-5 py-2.5">
              Get a Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted font-semibold mb-2">Coverage</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-2 text-sm text-foreground hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <Link href="/blog" className="block py-2 font-semibold text-primary" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link href="/about" className="block py-2 font-semibold text-primary" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2 font-semibold text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
            <a href="tel:8005550100" className="block py-2 font-semibold text-secondary">(800) 555-0100</a>
            <Link href="/quote" className="btn-primary block text-center" onClick={() => setIsOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
