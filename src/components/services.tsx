// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import ServiceCard from './servicecard';

// const services = [
//   {
//     title: 'Wedding',
//     description: 'Capturing your special day with elegance and emotion.',
//     image: 'https://i.pinimg.com/1200x/42/7f/f4/427ff4ac3c8e44ef2ff989f3f44ca95e.jpg',
//   },
//   {
//     title: 'Fashion',
//     description: 'Showcasing style and trends with professional finesse.',
//     image: '/images/services/fashion.jpg',
//   },
//   {
//     title: 'Product',
//     description: 'Highlighting your products to stand out in the market.',
//     image: '/images/services/product.jpg',
//   },
//   {
//     title: 'Event',
//     description: 'Documenting moments from corporate to cultural events.',
//     image: '/images/services/event.jpg',
//   },
//   {
//     title: 'Portrait',
//     description: 'Capturing personalities with professional portraits.',
//     image: '/images/services/portrait.jpg',
//   },
// ];

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//     }, 3000); // Auto-scroll every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const container = carouselRef.current;
//     if (container) {
//       const scrollAmount = container.scrollWidth / services.length;
//       container.scrollTo({
//         left: scrollAmount * currentIndex,
//         behavior: 'smooth',
//       });
//     }
//   }, [currentIndex]);

//   return (
//     <section className="px-4 sm:px-8 py-12">
//       <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>

//       {/* Grid view for larger screens */}
//       <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </div>

//       {/* Carousel view for small screens */}
//       <div className="md:hidden">
//         <div
//           ref={carouselRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-4"
//         >
//           {services.map((service, index) => (
//             <div key={index} className="min-w-[80%] sm:min-w-[60%] flex-shrink-0">
//               <ServiceCard {...service} />
//             </div>
//           ))}
//         </div>

//         {/* Indicators */}
//         <div className="flex justify-center mt-4 gap-2">
//           {services.map((_, index) => (
//             <span
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
'use client';

import { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 1,
    title: 'Wedding Planning',
    description: 'From intimate ceremonies to grand celebrations, we create magical weddings that reflect your unique love story with traditional Kerala charm.',
    image: '/images/service-wedding.jpg',
    icon: '💍',
    features: ['Venue Selection', 'Decoration Design', 'Catering Coordination', 'Photography'],
    href: '/services/wedding-planning',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 2,
    title: 'Corporate Events',
    description: 'Professional corporate event management including conferences, seminars, product launches, and team building activities.',
    image: '/images/service-corporate.jpg',
    icon: '🏢',
    features: ['Conference Planning', 'Team Building', 'Product Launches', 'Award Ceremonies'],
    href: '/services/corporate-events',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Event Decoration',
    description: 'Transform any venue into a stunning space with our creative decoration services, from floral arrangements to lighting design.',
    image: '/images/service-decoration.jpg',
    icon: '🎨',
    features: ['Floral Design', 'Lighting Setup', 'Theme Creation', 'Stage Design'],
    href: '/services/decoration',
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 4,
    title: 'Catering Services',
    description: 'Delicious cuisine that delights your guests with authentic Kerala flavors and international dishes prepared by expert chefs.',
    image: '/images/service-catering.jpg',
    icon: '🍽️',
    features: ['Kerala Cuisine', 'International Menu', 'Live Counters', 'Special Diets'],
    href: '/services/catering',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 5,
    title: 'Photography & Video',
    description: 'Capture every precious moment with our professional photography and videography services, creating timeless memories.',
    image: '/images/service-photography.jpg',
    icon: '📸',
    features: ['Wedding Photography', 'Drone Coverage', 'Cinematic Videos', 'Same Day Edits'],
    href: '/services/photography',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 6,
    title: 'Venue Consultation',
    description: 'Find the perfect venue from our curated selection of unique locations across Kerala, from heritage properties to modern spaces.',
    image: '/images/service-venue.jpg',
    icon: '🏛️',
    features: ['Venue Sourcing', 'Site Visits', 'Permit Handling', 'Layout Planning'],
    href: '/services/venue-consultation',
    color: 'from-teal-500 to-cyan-600'
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Meragi Style */}
        <div 
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Thoughtful services,<br />
            <span className="text-primary-600">priceless moments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            lovingly crafted just for you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                {/* Placeholder gradient background */}
                <div className={`w-full h-full bg-gradient-to-br ${service.color}`} />
                
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-80">
                    {service.icon}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    hoveredService === service.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                      href={service.href}
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group/link"
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

        {/* Bottom CTA Section - Meragi Style */}
        <div 
          className={`text-center transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Got an event in the works?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s make some magic happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Consult an Expert
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition-colors font-medium text-lg"
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