import type { Metadata } from 'next'
import { Shield, CheckCircle } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Gun Range Insurance Quote | Contractors Choice Agency',
  description: 'Request a free, no-obligation gun range insurance quote. Specialized coverage for shooting ranges, firearms instructors, FFL dealers, and RSOs. Response within 24 hours.',
}

export default function QuotePage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-300">
              No obligation. A specialist will contact you within 24 hours with customized coverage options for your shooting facility or firearms business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">Coverage Quote Request</h2>
                <p className="text-muted mb-8">Complete the form below and a specialist will prepare a customized quote for your operation.</p>
                <QuoteForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <Shield className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-primary text-lg mb-3">Why Choose CCA?</h3>
                <ul className="space-y-3">
                  {[
                    'Specialists in shooting range insurance',
                    'Licensed in all 50 states',
                    '20+ years industry experience',
                    'A-rated carrier partners',
                    'Same-day binding available',
                    'No obligation quote process',
                    'Dedicated claims advocacy',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-heading font-bold text-white text-lg mb-2">Need Help Now?</h3>
                <p className="text-gray-300 text-sm mb-4">Speak directly with a specialist about your coverage needs.</p>
                <a href="tel:8005550100" className="font-heading font-bold text-accent text-xl hover:underline">
                  (800) 555-0100
                </a>
                <p className="text-gray-400 text-xs mt-1">Mon-Fri 8AM-6PM CT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
