import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FFL Dealer Insurance | Retail Gun Store Insurance | Licensed Dealer Coverage',
  description: 'Insurance for FFL dealers and retail gun stores. Coverage for inventory, gunsmithing, products liability, theft, and dealer liability. Specialists in firearms retail insurance.',
}

export default function FFLDealerPage() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Retail Gun Store (FFL) Insurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Retail Gun Store &amp; FFL Dealer Insurance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Federal Firearms Licensees and retail gun stores operate in one of the most heavily regulated commercial environments in the United States. Insurance for your FFL business must address inventory exposure, products liability, compliance risk, gunsmith liability, and the unique theft exposure of firearms retail — all in a single coordinated program.
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
              <h2>Why FFL Dealers Need Specialty Insurance</h2>
              <p>
                Standard business owner policies (BOPs) and commercial package policies are not designed for firearms retailers. The products you sell are legally classified as deadly weapons, your inventory is a high-priority theft target, your business is subject to ATF regulatory oversight, and the liability claims you face — from defective ammunition to wrongful sale allegations — require coverage forms that standard commercial markets do not offer.
              </p>
              <p>
                Specialty FFL dealer insurance addresses the complete risk profile of a licensed firearms retailer, from the moment inventory enters your store through the point of sale and beyond. CCA places FFL business with carriers that understand the regulatory environment and industry-specific exposures.
              </p>

              <h2>Core Coverage Components for FFL Dealers</h2>

              <h3>Firearms Dealer General Liability</h3>
              <p>
                Commercial general liability for an FFL dealer must include products liability for firearms and ammunition sold and the handling of customer-owned firearms brought in for service. Key claims addressed include:
              </p>
              <ul>
                <li>Injury from a firearm sold by your store allegedly due to a product defect</li>
                <li>Injury from ammunition sold at your store</li>
                <li>In-store injuries to customers and visitors</li>
                <li>Property damage caused by your employees during deliveries or off-site work</li>
                <li>Demonstrations and dry-fire incidents on your premises</li>
              </ul>

              <h3>Firearms Inventory Insurance (Dealer Stock Policy)</h3>
              <p>
                Your firearm inventory is your largest asset and your highest-value theft target. Standard commercial property policies often underinsure firearms or apply sub-limits that are inadequate for serious dealers. A firearms dealer stock policy provides:
              </p>
              <ul>
                <li>Replacement cost coverage for your firearm and accessory inventory</li>
                <li>Coverage for firearms held for consignment and lay-away</li>
                <li>Coverage for customer firearms in for repair, consignment, or transfer</li>
                <li>Theft coverage including burglary, robbery, and employee dishonesty</li>
                <li>Coverage for inventory in transit (from distributor, from gun shows)</li>
              </ul>
              <p>
                Limits should reflect your maximum anticipated inventory value at any point in the year, including periods of high stock before holidays or buying seasons. Under-reporting inventory is a common and costly mistake among FFL dealers.
              </p>

              <h3>Gunsmith Liability</h3>
              <p>
                If your store offers gunsmithing services — repair, cleaning, customization, sight installation, trigger work, or modifications — you face professional liability exposure for the quality of that work. A firearm that malfunctions after service at your store can result in injury and significant litigation. Gunsmith liability coverage responds to claims arising from your professional services.
              </p>

              <h3>Safe and Vault Coverage</h3>
              <p>
                ATF regulations require secure storage of your inventory. Your safe and vault represent a significant investment. Specific coverage for these items — including the contents during a safe attack or forced entry attempt — should be addressed in your property policy.
              </p>

              <h3>ATF Compliance and Regulatory Defense</h3>
              <p>
                ATF inspections, compliance audits, and the potential for license revocation proceedings represent business-critical regulatory risks. Some specialty programs include regulatory defense cost coverage to assist with ATF administrative actions.
              </p>

              <h3>Wrongful Sale Allegations</h3>
              <p>
                FFL dealers can face civil suits alleging that a firearm was sold in violation of law — either knowingly or negligently. While these suits are often difficult to win against a dealer who followed proper NICS and transfer protocols, defense costs can be substantial. Products and completed operations coverage and, in some cases, specific errors and omissions forms address this exposure.
              </p>

              <h2>Gun Store with Attached Range</h2>
              <p>
                Many FFL dealers operate an attached shooting range for rentals, instruction, or customer use. This combination of retail and range operations creates a complex coverage need — the range liability must be addressed alongside the retail coverage without gaps or double-coverage that creates premium waste.
              </p>
              <p>
                CCA specializes in structuring single integrated programs for FFL dealers with ranges. Rather than managing two separate policies from two different carriers, a properly structured combined program covers both operations seamlessly.
              </p>

              <h2>Gun Show Endorsements</h2>
              <p>
                Dealers who participate in gun shows face off-premises inventory exposure and public event liability. Most dealer policies can be endorsed to include gun show operations, covering your inventory in transit and at the show venue, as well as liability for sales and customer interactions at gun show events.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">FFL Dealer Coverage</h3>
                <ul className="space-y-3">
                  {[
                    'General liability — products & premises',
                    'Firearms inventory (dealer stock)',
                    'Customer firearms in for service',
                    'Gunsmith professional liability',
                    'Theft including burglary & robbery',
                    'Employee dishonesty',
                    'Safe & vault coverage',
                    'Gun show endorsement available',
                    'Attached range coverage',
                    'Regulatory defense costs',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-3">Get FFL Dealer Quote</h3>
                <p className="text-red-100 text-sm mb-4">Complete programs for licensed dealers and gun stores.</p>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-6 py-3 rounded block text-center hover:bg-gray-100 transition-colors">
                  Request Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">Related Coverage</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
                    { name: 'Indoor Range Insurance', href: '/services/indoor-shooting-range-insurance' },
                    { name: 'Gunsmith Coverage', href: '/quote' },
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
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Protect Your FFL Dealership</h2>
          <p className="text-muted text-lg mb-8">Get a complete insurance package for your retail gun store from specialists who know the industry.</p>
          <Link href="/quote" className="btn-primary px-10 py-4 text-lg">Get My Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
