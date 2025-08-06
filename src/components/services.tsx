/* components/services-redesigned.tsx */
'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Wedding Planning',
    description: 'From intimate ceremonies to grand celebrations, we create magical weddings that reflect your unique love story with traditional Kerala charm.',
    icon: '💍',
    features: ['Venue Selection', 'Decoration Design', 'Catering Coordination', 'Photography'],
    href: '/services/wedding-planning',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 2,
    title: 'Corporate Events',
    description: 'Professional corporate event management including conferences, seminars, product launches, and team building activities.',
    icon: '🏢',
    features: ['Conference Planning', 'Team Building', 'Product Launches', 'Award Ceremonies'],
    href: '/services/corporate-events',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Event Decoration',
    description: 'Transform any venue into a stunning space with our creative decoration services, from floral arrangements to lighting design.',
    icon: '🎨',
    features: ['Floral Design', 'Lighting Setup', 'Theme Creation', 'Stage Design'],
    href: '/services/decoration',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    id: 4,
    title: 'Catering Services',
    description: 'Delicious cuisine that delights your guests with authentic Kerala flavors and international dishes prepared by expert chefs.',
    icon: '🍽️',
    features: ['Kerala Cuisine', 'International Menu', 'Live Counters', 'Special Diets'],
    href: '/services/catering',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 5,
    title: 'Photography & Video',
    description: 'Capture every precious moment with our professional photography and videography services, creating timeless memories.',
    icon: '📸',
    features: ['Wedding Photography', 'Drone Coverage', 'Cinematic Videos', 'Same Day Edits'],
    href: '/services/photography',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 6,
    title: 'Venue Consultation',
    description: 'Find the perfect venue from our curated selection of unique locations across Kerala, from heritage properties to modern spaces.',
    icon: '🏛️',
    features: ['Venue Sourcing', 'Site Visits', 'Permit Handling', 'Layout Planning'],
    href: '/services/venue-consultation',
    gradient: 'from-teal-500 to-cyan-600'
  },
];

export default function ServicesRedesigned() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Gestalt Style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thoughtful services,<br />
            <span className="text-red-600">priceless moments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            lovingly crafted just for you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                hoveredService === service.id ? 'shadow-2xl -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Icon Header */}
              <div className={`h-48 bg-gradient-to-br ${service.gradient} relative flex items-center justify-center`}>
                <div className="text-6xl opacity-90">
                  {service.icon}
                </div>
                
                {/* Hover Overlay */}
                {hoveredService === service.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300">
                    <Link
                      href={service.href}
                      className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group/link"
                >
                  Explore Service
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Gestalt Style */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Got an event in the works?
            </h3>
            <p className="text-xl mb-8 text-red-100">
              Let's make some magic happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Consult an Expert
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl transition-colors font-medium text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}