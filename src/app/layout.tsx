import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { generateOrganizationLD } from '@/lib/seo'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MGF Events - Premier Event Management Services in Kerala',
    template: '%s | MGF Events',
  },
  description: 'MGF Events offers exceptional event management services in Kozhikode, Kerala. From weddings to corporate events, we create unforgettable experiences.',
  keywords: ['event management kerala', 'wedding planners kozhikode', 'corporate events kerala', 'mgf events'],
  authors: [{ name: 'MGF Events' }],
  creator: 'MGF Events',
  
  // Add these PWA and mobile meta tags:
  manifest: '/manifest.json',
  themeColor: '#ec4899',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MGF Events',
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.mgfevent.com',
    siteName: 'MGF Events',
    title: 'MGF Events - Premier Event Management Services in Kerala',
    description: 'Transform your vision into reality with MGF Events.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MGF Events - Premier Event Management Services in Kerala',
    images: ['/images/og-image.jpg'],
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
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationLD()),
          }}
        />
      </body>
    </html>
  )
}