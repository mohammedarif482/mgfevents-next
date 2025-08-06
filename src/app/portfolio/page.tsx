'use client';

import { useState, useEffect } from 'react';
// import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
// import Image from 'next/image';
import Link from 'next/link';

const portfolioCategories = [
  { id: 'all', name: 'All Events', count: 24 },
  { id: 'weddings', name: 'Weddings', count: 12 },
  { id: 'corporate', name: 'Corporate', count: 6 },
  { id: 'celebrations', name: 'Celebrations', count: 4 },
  { id: 'decorations', name: 'Decorations', count: 8 },
];

const portfolioItems = [
  {
    id: 1,
    title: 'Priya & Arjun Kerala Wedding',
    category: 'weddings',
    image: '/images/portfolio-wedding-1.jpg',
    location: 'Backwater Resort, Kumarakom',
    date: 'March 2024',
    description: 'A magical waterside wedding celebrating love with traditional Kerala customs and modern elegance.',
    client: 'Priya & Arjun',
    gallery: ['/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg'],
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 2,
    title: 'TechCorp Annual Summit',
    category: 'corporate',
    image: '/images/portfolio-corporate-1.jpg',
    location: 'Crowne Plaza, Kochi',
    date: 'February 2024',
    description: 'A three-day technology conference with 500+ attendees, featuring keynote speakers and networking sessions.',
    client: 'TechCorp India',
    gallery: ['/images/gallery-4.jpg', '/images/gallery-5.jpg', '/images/gallery-6.jpg'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Golden Anniversary Celebration',
    category: 'celebrations',
    image: '/images/portfolio-celebration-1.jpg',
    location: 'Heritage Villa, Munnar',
    date: 'January 2024',
    description: 'A heartwarming 50th anniversary celebration in the scenic hills of Munnar with family and friends.',
    client: 'The Menon Family',
    gallery: ['/images/gallery-7.jpg', '/images/gallery-8.jpg', '/images/gallery-9.jpg'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Meera & Vishnu Palace Wedding',
    category: 'weddings',
    image: '/images/portfolio-wedding-2.jpg',
    location: 'Bolgatty Palace, Kochi',
    date: 'December 2023',
    description: 'An elegant palace wedding blending traditional Kerala customs with contemporary style and luxury.',
    client: 'Meera & Vishnu',
    gallery: ['/images/gallery-10.jpg', '/images/gallery-11.jpg', '/images/gallery-12.jpg'],
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 5,
    title: 'Product Launch Gala',
    category: 'corporate',
    image: '/images/portfolio-corporate-2.jpg',
    location: 'Le Meridien, Kochi',
    date: 'November 2023',
    description: 'Innovative product launch event with interactive displays, live demonstrations, and networking.',
    client: 'InnovateTech Solutions',
    gallery: ['/images/gallery-13.jpg', '/images/gallery-14.jpg', '/images/gallery-15.jpg'],
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: 6,
    title: 'Birthday Extravaganza',
    category: 'celebrations',
    image: '/images/portfolio-celebration-2.jpg',
    location: 'Ramada Resort, Kochi',
    date: 'October 2023',
    description: 'A magical themed birthday party that brought childhood dreams to life with creative decorations.',
    client: 'The Sharma Family',
    gallery: ['/images/gallery-16.jpg', '/images/gallery-17.jpg', '/images/gallery-18.jpg'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 7,
    title: 'Floral Paradise Wedding Decor',
    category: 'decorations',
    image: '/images/portfolio-decor-1.jpg',
    location: 'Taj Malabar, Kochi',
    date: 'September 2023',
    description: 'Breathtaking floral arrangements and lighting design that transformed the venue into a paradise.',
    client: 'Ananya & Karthik',
    gallery: ['/images/gallery-19.jpg', '/images/gallery-20.jpg', '/images/gallery-21.jpg'],
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 8,
    title: 'Corporate Award Ceremony',
    category: 'corporate',
    image: '/images/portfolio-corporate-3.jpg',
    location: 'Grand Hyatt, Kochi',
    date: 'August 2023',
    description: 'Prestigious award ceremony celebrating excellence with elegant staging and professional presentation.',
    client: 'Excellence Awards 2023',
    gallery: ['/images/gallery-22.jpg', '/images/gallery-23.jpg', '/images/gallery-24.jpg'],
    color: 'from-indigo-500 to-blue-600'
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            Our Portfolio
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Explore our collection of successfully executed events that showcase our creativity, attention to detail, and commitment to excellence
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, _index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {/* Placeholder gradient background */}
                  <div className={`w-full h-full bg-gradient-to-br ${item.color}`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Gradient Overlay for Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent h-32"></div>
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {item.client}
                    </div>
                    <span className="text-primary-600 font-medium">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Portfolio Details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header Image */}
              <div className={`h-64 bg-gradient-to-br ${selectedItem.color} rounded-t-3xl flex items-center justify-center`}>
                <h2 className="text-3xl font-bold text-white text-center px-6">{selectedItem.title}</h2>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">{selectedItem.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Date</h3>
                    <p className="text-gray-600">{selectedItem.date}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                    <p className="text-gray-600">{selectedItem.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                    <p className="text-gray-600 capitalize">{selectedItem.category}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    Plan Similar Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss your vision and create an unforgettable experience that will be remembered for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg"
            >
              Start Planning Your Event
            </Link>
            <Link
              href="/services"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}