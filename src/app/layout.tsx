import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: {
    default: 'Gun Range Insurance | Shooting Range Liability Coverage | CCA',
    template: '%s | GunRangeInsurance.com',
  },
  description: 'Specialized insurance for gun ranges, shooting facilities, firearms instructors, and FFL dealers. Get comprehensive coverage from industry experts licensed in all 50 states.',
  keywords: ['gun range insurance', 'shooting range insurance', 'firearms instructor insurance', 'range safety officer insurance', 'FFL dealer insurance', 'range liability insurance'],
  openGraph: {
    type: 'website',
    siteName: 'GunRangeInsurance.com',
    url: 'https://gunrangeinsurance.com',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <SmoothScroll />
        <Nav />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
