import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services - MGF Events Kerala',
  description: 'Comprehensive event management services including wedding planning, corporate events, venue decoration, catering, and photography in Kerala.',
  openGraph: {
    title: 'Our Services - MGF Events Kerala',
    description: 'Comprehensive event management services in Kerala',
  },
};

const services = [
  {
    id: 'wedding-planning',
    title: 'Wedding Planning',
    description: 'Complete wedding planning and coordination services with personalized attention to every detail of your special day.',
    longDescription: 'From intimate ceremonies to grand celebrations, we create magical weddings that reflect your unique love story with traditional Kerala charm and modern elegance. Our comprehensive wedding planning service covers every aspect of your special day.',
    features: [
      'Venue Selection & Booking',
      'Decoration Design & Setup',
      'Catering Coordination',
      'Photography & Videography',
      'Entertainment Arrangements',
      'Guest Management',
      'Timeline Coordination',
      'Vendor Management'
    ],
    price: 'Starting from ₹2 Lakhs',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Professional corporate event management including conferences, seminars, product launches, and team building activities.',
    longDescription: 'Elevate your business gatherings with our professional corporate event management services. We specialize in creating impactful corporate experiences that align with your brand and objectives.',
    features: [
      'Conference Planning',
      'Team Building Activities',
      'Product Launch Events',
      'Award Ceremonies',
      'Corporate Retreats',
      'Seminars & Workshops',
      'Exhibition Management',
      'Networking Events'
    ],
    price: 'Starting from ₹1.5 Lakhs',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'decoration',
    title: 'Event Decoration',
    description: 'Transform any venue into a stunning space with our creative decoration services, from floral arrangements to lighting design.',
    longDescription: 'Our creative decoration team transforms ordinary venues into extraordinary spaces. We specialize in floral arrangements, lighting design, and thematic decorations that perfectly match your vision.',
    features: [
      'Floral Design & Arrangements',
      'Lighting Setup & Design',
      'Theme Creation & Execution',
      'Stage Design & Backdrop',
      'Centerpiece Design',
      'Draping & Fabric Work',
      'Props & Furniture Rental',
      'Custom Installations'
    ],
    price: 'Starting from ₹50,000',
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 'catering',
    title: 'Catering Services',
    description: 'Delicious cuisine that delights your guests with authentic Kerala flavors and international dishes prepared by expert chefs.',
    longDescription: 'Treat your guests to an unforgettable culinary experience with our comprehensive catering services. We offer authentic Kerala cuisine alongside international dishes, all prepared by our expert chefs.',
    features: [
      'Traditional Kerala Cuisine',
      'International Menu Options',
      'Live Cooking Counters',
      'Special Dietary Requirements',
      'Buffet & Plated Service',
      'Beverage Packages',
      'Custom Menu Creation',
      'Professional Service Staff'
    ],
    price: 'Starting from ₹800 per person',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'photography',
    title: 'Photography & Videography',
    description: 'Capture every precious moment with our professional photography and videography services, creating timeless memories.',
    longDescription: 'Preserve your special moments forever with our professional photography and videography services. Our skilled team captures every emotion and detail, creating timeless memories you\'ll treasure.',
    features: [
      'Wedding Photography',
      'Event Videography',
      'Drone Coverage',
      'Cinematic Highlight Videos',
      'Same Day Photo Edits',
      'Photo Album Creation',
      'Digital Gallery Delivery',
      'Professional Editing'
    ],
    price: 'Starting from ₹75,000',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'venue-consultation',
    title: 'Venue Consultation',
    description: 'Find the perfect venue from our curated selection of unique locations across Kerala, from heritage properties to modern spaces.',
    longDescription: 'Let us help you find the perfect venue for your event. We have partnerships with the finest venues across Kerala, from heritage properties to modern banquet halls and outdoor locations.',
    features: [
      'Venue Sourcing & Selection',
      'Site Visits & Inspections',
      'Permit & License Handling',
      'Layout Planning & Design',
      'Vendor Coordination',
      'Contract Negotiation',
      'Timeline Management',
      'On-site Coordination'
    ],
    price: 'Consultation fees apply',
    color: 'from-teal-500 to-cyan-600'
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            Our Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive event management services tailored to make your special moments unforgettable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Header */}
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <h2 className="text-3xl font-bold text-white text-center">{service.title}</h2>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-600">
                      {service.price}
                    </div>
                    <Link
                      href="/contact"
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your vision and create an unforgettable experience together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}