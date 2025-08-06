// portfolio/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
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
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop&crop=faces',
    location: 'Backwater Resort, Kumarakom',
    date: 'March 2024',
    description: 'A magical waterside wedding celebrating love with traditional Kerala customs and modern elegance. The ceremony featured traditional Kerala music, dance performances, and stunning backwater views.',
    client: 'Priya & Arjun',
    gallery: ['/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg'],
    height: 'h-80'
  },
  {
    id: 2,
    title: 'TechCorp Annual Summit',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1200&fit=crop&crop=faces',
    location: 'Crowne Plaza, Kochi',
    date: 'February 2024',
    description: 'A three-day technology conference with 500+ attendees, featuring keynote speakers, networking sessions, and interactive workshops that brought together industry leaders.',
    client: 'TechCorp India',
    gallery: ['/images/gallery-4.jpg', '/images/gallery-5.jpg', '/images/gallery-6.jpg'],
    height: 'h-96'
  },
  {
    id: 3,
    title: 'Golden Anniversary Celebration',
    category: 'celebrations',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=1200&fit=crop&crop=faces',
    location: 'Heritage Villa, Munnar',
    date: 'January 2024',
    description: 'A heartwarming 50th anniversary celebration in the scenic hills of Munnar with family and friends. The event included a renewal of vows ceremony and traditional entertainment.',
    client: 'The Menon Family',
    gallery: ['/images/gallery-7.jpg', '/images/gallery-8.jpg', '/images/gallery-9.jpg'],
    height: 'h-72'
  },
  {
    id: 4,
    title: 'Meera & Vishnu Palace Wedding',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop&crop=faces',
    location: 'Bolgatty Palace, Kochi',
    date: 'December 2023',
    description: 'An elegant palace wedding blending traditional Kerala customs with contemporary style and luxury. The venue was decorated with jasmine flowers and traditional Kerala lamps.',
    client: 'Meera & Vishnu',
    gallery: ['/images/gallery-10.jpg', '/images/gallery-11.jpg', '/images/gallery-12.jpg'],
    height: 'h-88'
  },
  {
    id: 5,
    title: 'Product Launch Gala',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1200&fit=crop&crop=faces',
    location: 'Le Meridien, Kochi',
    date: 'November 2023',
    description: 'Innovative product launch event with interactive displays, live demonstrations, and networking opportunities. The event successfully introduced the new product line to key stakeholders.',
    client: 'InnovateTech Solutions',
    gallery: ['/images/gallery-13.jpg', '/images/gallery-14.jpg', '/images/gallery-15.jpg'],
    height: 'h-84'
  },
  {
    id: 6,
    title: 'Birthday Extravaganza',
    category: 'celebrations',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop&crop=faces',
    location: 'Ramada Resort, Kochi',
    date: 'October 2023',
    description: 'A magical themed birthday party that brought childhood dreams to life with creative decorations, interactive games, and entertainment that delighted guests of all ages.',
    client: 'The Sharma Family',
    gallery: ['/images/gallery-16.jpg', '/images/gallery-17.jpg', '/images/gallery-18.jpg'],
    height: 'h-76'
  },
  {
    id: 7,
    title: 'Floral Paradise Wedding Decor',
    category: 'decorations',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?w=800&h=1200&fit=crop&crop=faces',
    location: 'Taj Malabar, Kochi',
    date: 'September 2023',
    description: 'Breathtaking floral arrangements and lighting design that transformed the venue into a paradise. The decor featured exotic flowers, ambient lighting, and elegant centerpieces.',
    client: 'Ananya & Karthik',
    gallery: ['/images/gallery-19.jpg', '/images/gallery-20.jpg', '/images/gallery-21.jpg'],
    height: 'h-92'
  },
  {
    id: 8,
    title: 'Corporate Award Ceremony',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop&crop=faces',
    location: 'Grand Hyatt, Kochi',
    date: 'August 2023',
    description: 'Prestigious award ceremony celebrating excellence with elegant staging and professional presentation. The event recognized outstanding achievements across various categories.',
    client: 'Excellence Awards 2023',
    gallery: ['/images/gallery-22.jpg', '/images/gallery-23.jpg', '/images/gallery-24.jpg'],
    height: 'h-80'
  }
];

export default function PortfolioPageRedesigned() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const openModal = (itemId: number) => {
    const index = filteredItems.findIndex(item => item.id === itemId);
    setCurrentIndex(index);
    setSelectedItem(itemId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(filteredItems[nextIndex].id);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedItem(filteredItems[prevIndex].id);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedItem !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedItem, currentIndex, filteredItems.length]);

  const currentItem = selectedItem ? filteredItems.find(item => item.id === selectedItem) : null;

  return (
    <div>
      <Header />
      
      {/* Hero Section - Gestalt Style */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?w=1920&h=1080&fit=crop&crop=center')"
          }}
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of successfully executed events that showcase our creativity, attention to detail, and commitment to excellence
          </p>
        </div>
      </section>

      {/* Category Filter - Gestalt Style */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Pinterest Masonry Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredItems.map((item, _index) => (
              <div
                key={item.id}
                className={`group relative break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer`}
                style={{ 
                  marginBottom: '24px'
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => openModal(item.id)}
              >
                {/* Image Container with Overlay Text */}
                <div className={`relative ${item.height} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold capitalize shadow-lg">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Overlay with Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <h3 className="text-white text-lg font-bold mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-2">
                      {item.location}
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Client and Date */}
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {item.client}
                      </div>
                      <span className="text-white/80 font-medium">{item.date}</span>
                    </div>
                  </div>

                  {/* Hover Overlay with CTA */}
                  <div 
                    className={`absolute inset-0 bg-black/40 transition-all duration-300 flex items-center justify-center ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedItem && currentItem && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Full Screen Image */}
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover"
          />

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-60 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Details Overlay - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
            <div className="max-w-4xl mx-auto text-white">
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white mb-4">
                {currentItem.category.charAt(0).toUpperCase() + currentItem.category.slice(1)}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                {currentItem.title}
              </h2>

              {/* Location, Date, and Client */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {currentItem.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentItem.date}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {currentItem.client}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                {currentItem.description}
              </p>

              {/* CTA Button */}
              <Link href="/contact" onClick={closeModal}>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold transition-colors">
                  Plan Similar Event
                </button>
              </Link>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white/90 text-sm">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}

      {/* CTA Section - Gestalt Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s discuss your vision and create an unforgettable experience that will be remembered for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700 transition-colors font-semibold text-lg"
            >
              Start Planning Your Event
            </Link>
            <Link
              href="/services"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-2xl transition-colors font-semibold text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}