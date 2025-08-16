/* page.tsx */
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
  title: 'MGF Events - Best Wedding Planners & Event Management in Kerala |  Kozhikode',
  description: 'Leading event management company in Kerala specializing in traditional Kerala weddings, corporate events, and celebrations in Kozhikode. 10+ years experience, 500+ successful events.',
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
  "telephone": "+91 9387039393 | +91 9388039393",
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
          <h2 className="text-4xl font-bold mb-6 font-against" style={{color: '#E55E27'}}>
  Celebrations Beyond Imagination
</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
            MGF Events started <strong>over 20 years</strong> ago as Maha Ganapati Flowers, 
            a small flower vendor in Karnataka. We were the first to introduce fresh flower marketing in Calicut, 
            Kerala, and from these humble beginnings, 
            we grew into a trusted event management company known for<strong> creativity, precision, and a personal touch.</strong>


            </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Today, we bring your visions to life—whether 
        it’s <strong>dreamy weddings, corporate events, 
        or family celebrations.</strong>  Our expert team manages every detail, 
        from venue and décor to entertainment and hospitality, ensuring your event is flawlessly planned and beautifully executed. 
        With two decades of experience, MGF Events is dedicated to making every moment magical.

            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
           <strong>MGF Events </strong>– Where your moments become magical memories.
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