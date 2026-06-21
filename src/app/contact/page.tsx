import type { Metadata } from 'next'
import { Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Gun Range Insurance Specialists',
  description: 'Contact Contractors Choice Agency for gun range insurance questions. Speak with a specialist about your shooting facility coverage needs.',
}

export default function ContactPage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Contact Our Specialists
          </h1>
          <p className="text-xl text-gray-300">
            Questions about coverage, pricing, or your current policy? We are here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="card">
                <Phone className="w-6 h-6 text-secondary mb-3" />
                <h3 className="font-heading font-bold text-primary mb-2">Phone</h3>
                <a href="tel:8005550100" className="text-secondary font-semibold text-lg hover:underline">
                  (800) 555-0100
                </a>
                <p className="text-muted text-sm mt-1">Speak directly with a specialist</p>
              </div>

              <div className="card">
                <Mail className="w-6 h-6 text-secondary mb-3" />
                <h3 className="font-heading font-bold text-primary mb-2">Email</h3>
                <a href="mailto:info@contractorschoiceagency.com" className="text-secondary font-semibold hover:underline break-all">
                  info@contractorschoiceagency.com
                </a>
                <p className="text-muted text-sm mt-1">We respond within one business day</p>
              </div>

              <div className="card">
                <Clock className="w-6 h-6 text-secondary mb-3" />
                <h3 className="font-heading font-bold text-primary mb-2">Hours</h3>
                <p className="text-foreground text-sm">Monday &ndash; Friday</p>
                <p className="font-semibold text-primary">8:00 AM &ndash; 6:00 PM CT</p>
                <p className="text-muted text-sm mt-2">After-hours messages responded to next business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
