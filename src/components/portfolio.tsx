/* components/portfolio-redesigned.tsx */
'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const portfolioCategories = [
  { id: 'all', name: 'All Events', count: 50 },
  { id: 'weddings', name: 'Wedding', count: 25 },
  { id: 'corporate', name: 'Engagement', count: 15 },
  { id: 'celebrations', name: 'Haldi & Mehendi', count: 8 },
  { id: 'reception', name: 'Reception', count: 12 },
];

const portfolioItems = [
  {
    id: 1,
    title: 'Priya & Arjun Wedding',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop&crop=faces',
    location: 'Backwater Resort, Kumarakom',
    date: '2024',
    description: 'A magical waterside wedding celebrating love with traditional Kerala customs. The ceremony was held during sunset with traditional Kerala music and dance performances.',
    client: 'Priya & Arjun',
    height: 'h-80'
  },
  {
    id: 2,
    title: 'Tech Summit 2024',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1200&fit=crop&crop=faces',
    location: 'Crowne Plaza, Kochi',
    date: '2024',
    description: 'A three-day technology conference with 500+ attendees from across India. Featured keynote speakers, networking sessions, and product demonstrations.',
    client: 'TechCorp India',
    height: 'h-96'
  },
  {
    id: 3,
    title: 'Golden Anniversary',
    category: 'celebrations',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=1200&fit=crop&crop=faces',
    location: 'Heritage Villa, Munnar',
    date: '2024',
    description: 'A heartwarming 50th anniversary celebration in the hills of Munnar. The event included a renewal of vows ceremony and family gathering.',
    client: 'The Menon Family',
    height: 'h-72'
  },
  {
    id: 4,
    title: 'Meera & Vishnu Wedding',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop&crop=faces',
    location: 'Bolgatty Palace, Kochi',
    date: '2024',
    description: 'An elegant palace wedding blending tradition with contemporary style. The venue was decorated with jasmine flowers and traditional Kerala lamps.',
    client: 'Meera & Vishnu',
    height: 'h-88'
  },
  {
    id: 5,
    title: 'Engagement Ceremony',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop&crop=faces',
    location: 'Beach Resort, Kovalam',
    date: '2024',
    description: 'A romantic beachside engagement with sunset views and intimate setting. The ceremony was followed by a candlelight dinner.',
    client: 'Ananya & Karthik',
    height: 'h-80'
  },
  {
    id: 6,
    title: 'Grand Reception',
    category: 'reception',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?w=800&h=1200&fit=crop&crop=faces',
    location: 'Grand Ballroom, Trivandrum',
    date: '2024',
    description: 'A lavish reception celebration with traditional performances and modern entertainment. Featured live music and dance performances.',
    client: 'The Kumar Family',
    height: 'h-84'
  },
  {
    id: 7,
    title: 'Corporate Gala Night',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1200&fit=crop&crop=faces',
    location: 'Hotel Taj, Kochi',
    date: '2024',
    description: 'An elegant corporate gala with live entertainment and networking. The event included awards ceremony and business presentations.',
    client: 'Innovation Corp',
    height: 'h-76'
  },
  {
    id: 8,
    title: 'Haldi Ceremony',
    category: 'celebrations',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop&crop=faces',
    location: 'Private Villa, Alleppey',
    date: '2024',
    description: 'A colorful haldi ceremony filled with joy, laughter and tradition. The celebration included traditional games and music.',
    client: 'Kavya & Rohit',
    height: 'h-80'
  },
  {
    id: 9,
    title: 'Beach Wedding',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&h=1200&fit=crop&crop=faces',
    location: 'Marari Beach Resort',
    date: '2024',
    description: 'A dreamy beach wedding with waves as the backdrop. The ceremony was decorated with tropical flowers and bamboo arches.',
    client: 'Nisha & Arjun',
    height: 'h-92'
  }
];

export default function PortfolioRedesigned() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
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
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Gestalt Style */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Inspired by your dreams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Best-selling event designs that have captured hearts
          </p>
        </div>

        {/* Category Filter - Gestalt Style */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Pinterest-Style Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
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
                    {item.category === 'corporate' ? 'Engagement' : 
                     item.category === 'celebrations' ? 'Haldi & Mehendi' :
                     item.category}
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

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-3 rounded-2xl hover:border-red-600 hover:text-red-600 transition-all duration-200 font-medium">
            Load More Projects
          </button>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedItem && currentItem && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-60 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-auto max-h-[80vh] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Details */}
            <div className="text-white space-y-6">
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                {currentItem.category === 'corporate' ? 'Engagement' : 
                 currentItem.category === 'celebrations' ? 'Haldi & Mehendi' :
                 currentItem.category.charAt(0).toUpperCase() + currentItem.category.slice(1)}
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {currentItem.title}
              </h2>

              {/* Location and Date */}
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {currentItem.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentItem.date}
                </div>
              </div>

              {/* Client */}
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {currentItem.client}
              </div>

              {/* Description */}
              <p className="text-xl leading-relaxed text-gray-200">
                {currentItem.description}
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors">
                  Contact Us for Similar Event
                </button>
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </section>
  );
}