'use client';

import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
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
    image: '/images/portfolio-wedding-1.jpg',
    location: 'Backwater Resort, Kumarakom',
    date: '2024',
    description: 'A magical waterside wedding celebrating love with traditional Kerala customs.',
    client: 'Priya & Arjun',
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    id: 2,
    title: 'Tech Summit 2024',
    category: 'corporate',
    image: '/images/portfolio-corporate-1.jpg',
    location: 'Crowne Plaza, Kochi',
    date: '2024',
    description: 'A three-day technology conference with 500+ attendees from across India.',
    client: 'TechCorp India',
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 3,
    title: 'Golden Anniversary',
    category: 'celebrations',
    image: '/images/portfolio-celebration-1.jpg',
    location: 'Heritage Villa, Munnar',
    date: '2024',
    description: 'A heartwarming 50th anniversary celebration in the hills of Munnar.',
    client: 'The Menon Family',
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: 4,
    title: 'Meera & Vishnu Wedding',
    category: 'weddings',
    image: '/images/portfolio-wedding-2.jpg',
    location: 'Bolgatty Palace, Kochi',
    date: '2024',
    description: 'An elegant palace wedding blending tradition with contemporary style.',
    client: 'Meera & Vishnu',
    color: 'from-purple-500/20 to-violet-500/20'
  },
  {
    id: 5,
    title: 'Engagement Ceremony',
    category: 'corporate',
    image: '/images/portfolio-engagement.jpg',
    location: 'Beach Resort, Kovalam',
    date: '2024',
    description: 'A romantic beachside engagement with sunset views and intimate setting.',
    client: 'Ananya & Karthik',
    color: 'from-teal-500/20 to-cyan-500/20'
  },
  {
    id: 6,
    title: 'Grand Reception',
    category: 'reception',
    image: '/images/portfolio-reception.jpg',
    location: 'Grand Ballroom, Trivandrum',
    date: '2024',
    description: 'A lavish reception celebration with traditional performances and modern entertainment.',
    client: 'The Kumar Family',
    color: 'from-emerald-500/20 to-green-500/20'
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
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

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Meragi Style */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Inspired by your dreams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Best-selling event designs that have captured hearts
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index % 3 === 1 ? 'md:mt-8' : ''}`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                {/* Placeholder gradient background */}
                <div className={`w-full h-full bg-gradient-to-br ${item.color} ${item.color.replace('/20', '/40')}`} />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {item.category === 'corporate' ? 'Engagement' : 
                     item.category === 'celebrations' ? 'Haldi & Mehendi' :
                     item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-black/60 transition-all duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                      href={`/portfolio/${item.id}`}
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
                    >
                      View Details
                    </Link>
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

        {/* Bottom CTA - Meragi Style */}
        <div 
          className={`text-center transition-all duration-1000 delay-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              A legacy of love
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Meragi Weddings
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors font-semibold text-lg group"
            >
              Explore Complete Portfolio
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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
      </div>
    </section>
  );
}