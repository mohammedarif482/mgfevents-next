import { Metadata } from 'next';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contacts';
import Footer from '@/components/footer';

// Enhanced metadata with local SEO
export const metadata: Metadata = {
  title: 'MGF Events - Best Wedding Planners & Event Management in Kerala | Kochi, Kozhikode, Trivandrum',
  description: 'Leading event management company in Kerala specializing in traditional Kerala weddings, corporate events, and celebrations in Kochi, Kozhikode, Trivandrum. 10+ years experience, 500+ successful events.',
  keywords: [
    'wedding planners Kerala',
    'event management Kochi', 
    'Kerala wedding planners',
    'corporate events Kozhikode',
    'event organizers Trivandrum',
    'destination wedding Kerala',
    'backwater wedding planners',
    'traditional Kerala wedding',
    'MGF events Kerala'
  ],
  alternates: {
    canonical: 'https://www.mgfevent.com'
  },
  openGraph: {
    title: 'MGF Events - Kerala\'s Premier Wedding & Event Planners',
    description: 'Transform your special day with Kerala\'s most trusted event management company. Specializing in traditional weddings, corporate events & celebrations.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.mgfevent.com',
    siteName: 'MGF Events Kerala',
    images: [{
      url: '/images/mgf-events-kerala-wedding-og.jpg',
      width: 1200,
      height: 630,
      alt: 'MGF Events - Kerala Wedding Planners and Event Management'
    }]
  }
};

// Add structured data for better local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  "name": "MGF Events",
  "description": "Premier wedding planning and event management services in Kerala",
  "url": "https://www.mgfevent.com",
  "telephone": "+91-XXXXX-XXXXX",
  "email": "info@mgfevent.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Business District",
    "addressLocality": "Kozhikode",
    "addressRegion": "Kerala", 
    "postalCode": "673001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.2588",
    "longitude": "75.7804"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Kochi"
    },
    {
      "@type": "City", 
      "name": "Kozhikode"
    },
    {
      "@type": "City",
      "name": "Trivandrum"
    },
    {
      "@type": "City",
      "name": "Thrissur"
    }
  ],
  "priceRange": "₹₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Planning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kerala Wedding Planning"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Management"
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <Header />
      <Hero />
      
      {/* Add SEO-rich About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kerala's Most Trusted Event Management Company
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since 2014, MGF Events has been Kerala's premier choice for <strong>wedding planning</strong>, 
              <strong>corporate event management</strong>, and <strong>celebration coordination</strong>. 
              Based in Kozhikode and serving clients across Kochi, Trivandrum, Thrissur, and beyond, 
              we specialize in creating authentic Kerala experiences while incorporating modern elegance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our expertise in <strong>traditional Kerala weddings</strong>, from intimate backwater ceremonies 
              to grand palace celebrations, combined with our knowledge of local venues, vendors, and customs, 
              makes us the perfect partner for your special day. We've successfully managed over 500 events, 
              earning the trust of families and businesses throughout Kerala.
            </p>
          </div>
        </div>
      </section>
      
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}