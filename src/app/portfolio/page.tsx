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
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/1.jpg',
    location: 'Backwater Resort, Kumarakom',
    date: 'March 2024',
    description: 'A magical waterside wedding celebrating love with traditional Kerala customs and modern elegance. The ceremony featured traditional Kerala music, dance performances, and stunning backwater views.',
    client: 'Priya & Arjun',
    height: 'h-80'
  },
  {
    id: 2,
    title: 'Floral Decoration Showcase',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/2.jpeg',
    location: 'Taj Malabar, Kochi',
    date: 'April 2024',
    description: 'Breathtaking floral arrangements and creative venue decorations that transformed the ambience into a dreamy paradise.',
    client: 'Ananya & Karthik',
    height: 'h-92'
  },
  {
    id: 3,
    title: 'Stage & Theme Decor Setup',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/3.png',
    location: 'Lulu Convention Centre, Thrissur',
    date: 'March 2024',
    description: 'Modern stage setups and immersive theme design with elegant lighting and creative backdrops.',
    client: 'Corporate Excellence Awards',
    height: 'h-84'
  },
  {
    id: 4,
    title: 'Meera & Vishnu Palace Wedding',
    category: 'weddings',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/4.png',
    location: 'Bolgatty Palace, Kochi',
    date: 'December 2023',
    description: 'An elegant palace wedding blending traditional Kerala customs with contemporary style and luxury. The venue was decorated with jasmine flowers and traditional Kerala lamps.',
    client: 'Meera & Vishnu',
    height: 'h-88'
  },
  {
    id: 5,
    title: 'Product Launch Gala',
    category: 'corporate',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/5.png',
    location: 'Le Meridien, Kochi',
    date: 'November 2023',
    description: 'Innovative product launch event with interactive displays, live demonstrations, and networking opportunities.',
    client: 'InnovateTech Solutions',
    height: 'h-84'
  },
  {
    id: 6,
    title: 'TechCorp Annual Summit',
    category: 'corporate',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/6.png',
    location: 'Crowne Plaza, Kochi',
    date: 'February 2024',
    description: 'A three-day technology conference with 500+ attendees, featuring keynote speakers, networking sessions, and interactive workshops.',
    client: 'TechCorp India',
    height: 'h-96'
  },
  {
    id: 7,
    title: 'Investor Meet 2024',
    category: 'corporate',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/7.png',
    location: 'Grand Hyatt, Kochi',
    date: 'May 2024',
    description: 'Annual investor meeting with professional stage design, interactive sessions, and impactful presentations.',
    client: 'Visionary Holdings',
    height: 'h-80'
  },
  {
    id: 8,
    title: 'Corporate Award Ceremony',
    category: 'corporate',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/8.png',
    location: 'Grand Hyatt, Kochi',
    date: 'August 2023',
    description: 'Prestigious award ceremony celebrating excellence with elegant staging and professional presentation.',
    client: 'Excellence Awards 2023',
    height: 'h-80'
  },
  {
    id: 9,
    title: 'CEO Farewell Celebration',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/9.png',
    location: 'Taj Green Cove, Kovalam',
    date: 'July 2023',
    description: 'A heartfelt farewell party with cultural performances, speeches, and celebrations honoring leadership.',
    client: 'GlobalTech Pvt Ltd',
    height: 'h-72'
  },
  {
    id: 10,
    title: 'Startup Networking Night',
    category: 'corporate',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/10.png',
    location: 'Infopark, Kochi',
    date: 'June 2023',
    description: 'Interactive networking event for startup founders and investors with live pitches and panel discussions.',
    client: 'Startup Kerala',
    height: 'h-76'
  },
  {
    id: 11,
    title: 'Luxury Wedding Decor',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/11.jpg',
    location: 'Lake Palace, Alleppey',
    date: 'May 2023',
    description: 'Elegant floral setups with golden accents and royal Kerala-inspired decor themes.',
    client: 'Ramesh & Anitha',
    height: 'h-88'
  },
  {
    id: 12,
    title: 'Traditional Mandap Setup',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/12.jpg',
    location: 'Heritage Grounds, Kochi',
    date: 'April 2023',
    description: 'Classic mandap designs with jasmine garlands and intricate traditional elements.',
    client: 'Eventia Weddings',
    height: 'h-92'
  },
  {
    id: 13,
    title: 'Stage Lighting & Decor',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/13.jpg',
    location: 'CIAL Convention Centre, Kochi',
    date: 'March 2023',
    description: 'Dynamic lighting with premium stage backdrops and flower installations.',
    client: 'Kerala Fashion Week',
    height: 'h-84'
  },
  {
    id: 14,
    title: 'Festive Hall Decoration',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/14.jpg',
    location: 'Ramada Resort, Kochi',
    date: 'February 2023',
    description: 'Festival-inspired hall decoration with vibrant flowers, colorful drapes, and lanterns.',
    client: 'Cultural Fest 2023',
    height: 'h-76'
  },
  {
    id: 15,
    title: 'Theme Party Decor',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/15.jpg',
    location: 'Holiday Inn, Kochi',
    date: 'January 2023',
    description: 'Creative theme-based decorations with custom props, centerpieces, and lighting.',
    client: 'The Thomas Family',
    height: 'h-72'
  },
  {
    id: 16,
    title: 'Birthday Extravaganza',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/16.jpg',
    location: 'Ramada Resort, Kochi',
    date: 'October 2023',
    description: 'A magical themed birthday party that brought childhood dreams to life with creative decorations, interactive games, and entertainment that delighted guests of all ages.',
    client: 'The Sharma Family',
    height: 'h-76'
  },
  {
    id: 17,
    title: 'Golden Anniversary Celebration',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/17.jpg',
    location: 'Heritage Villa, Munnar',
    date: 'January 2024',
    description: 'A heartwarming 50th anniversary celebration in the scenic hills of Munnar with family and friends.',
    client: 'The Menon Family',
    height: 'h-72'
  },
  {
    id: 18,
    title: 'Family Reunion Party',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/18.jpg',
    location: 'Bekal Beach Resort, Kasargod',
    date: 'September 2023',
    description: 'A vibrant family reunion with cultural programs, beachside games, and entertainment.',
    client: 'The Nair Family',
    height: 'h-80'
  },
  {
    id: 19,
    title: 'Intimate House Wedding',
    category: 'weddings',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/19.JPG',
    location: 'Private Villa, Kochi',
    date: 'August 2023',
    description: 'A cozy home wedding with traditional rituals and a warm family atmosphere.',
    client: 'Rahul & Neha',
    height: 'h-84'
  },
  {
    id: 20,
    title: 'Destination Wedding in Wayanad',
    category: 'weddings',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/20.JPG',
    location: 'Wayanad Resort, Kerala',
    date: 'July 2023',
    description: 'A grand destination wedding surrounded by misty mountains and lush greenery.',
    client: 'Aditya & Sneha',
    height: 'h-92'
  },
  {
    id: 21,
    title: 'Engagement Celebration',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/21.JPG',
    location: 'Casino Hotel, Kochi',
    date: 'June 2023',
    description: 'An elegant engagement ceremony with floral themes and a cozy family gathering.',
    client: 'Akash & Meera',
    height: 'h-80'
  },
  {
    id: 22,
    title: 'Luxury Reception Decor',
    category: 'decorations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/22.jpg',
    location: 'Le Meridien, Kochi',
    date: 'May 2023',
    description: 'Opulent reception hall decor with chandeliers, floral installations, and ambient lighting.',
    client: 'Elite Weddings',
    height: 'h-92'
  },
  {
    id: 23,
    title: 'Naming Ceremony Celebration',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/23.jpg',
    location: 'Private Hall, Thrissur',
    date: 'April 2023',
    description: 'A beautiful naming ceremony with pastel decor, family traditions, and blessings.',
    client: 'The Iyer Family',
    height: 'h-72'
  },
  {
    id: 24,
    title: 'Housewarming Party',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/24.jpg',
    location: 'Kochi',
    date: 'March 2023',
    description: 'Warm housewarming celebration with friends, food, and laughter.',
    client: 'The George Family',
    height: 'h-76'
  },
  {
    id: 25,
    title: 'Farewell Get-Together',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/25.jpg',
    location: 'Trivandrum Club',
    date: 'February 2023',
    description: 'A memorable farewell party with live music, fun games, and emotional goodbyes.',
    client: 'The Alumni Group',
    height: 'h-80'
  },
  {
    id: 26,
    title: 'Graduation Celebration',
    category: 'celebrations',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/portfolio/26.jpg',
    location: 'Kochi',
    date: 'January 2023',
    description: 'Joyful graduation party celebrating achievements with friends and family.',
    client: 'Class of 2023',
    height: 'h-84'
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
            backgroundImage: "url('https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/WBN4.jpg')"
          }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-against">
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
  ? 'bg-[#E55E27] text-white shadow-lg transform scale-105'
  : 'bg-gray-50 text-gray-700 hover:bg-[#E55E27]/10 hover:text-[#E55E27] shadow-md hover:shadow-lg'
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
                    // alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  {/* <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold capitalize shadow-lg">
                      {item.category}
                    </span>
                  </div> */}

                  {/* Bottom Overlay with Text */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6"> */}
                    {/* <h3 className="text-white text-lg font-bold mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-2">
                      {item.location}
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                     */}
                    {/* Client and Date */}
                    {/* <div className="flex items-center justify-between text-xs text-white/70">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {item.client}
                      </div>
                      <span className="text-white/80 font-medium">{item.date}</span>
                    </div> */}
                  {/* </div> */}

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
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full bg-black rounded-lg overflow-hidden">
            
            {/* Main Image */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={currentItem.image}
                // alt={currentItem.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-60 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 sm:w-14 sm:h-14 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors touch-manipulation"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 sm:w-14 sm:h-14 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors touch-manipulation"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Details Overlay - Bottom */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-8">
              <div className="max-w-4xl mx-auto text-white"> */}
                {/* Category Badge */}
                {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white mb-2 sm:mb-4">
                  {currentItem.category.charAt(0).toUpperCase() + currentItem.category.slice(1)}
                </div> */}

                {/* Title */}
                {/* <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 sm:mb-4">
                  {currentItem.title}
                </h2> */}

                {/* Location, Date, and Client */}
                {/* <div className="flex flex-wrap items-center gap-2 sm:gap-6 text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {currentItem.location}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {currentItem.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {currentItem.client}
                  </div>
                </div>

                {/* Description */}
                {/* <p className="text-sm sm:text-lg leading-relaxed text-gray-200 mb-4 sm:mb-6">
                  {currentItem.description}
                </p> */} 

                {/* CTA Button */}
                {/* <Link href="/contact" onClick={closeModal}>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold transition-colors text-sm sm:text-base">
                    Plan Similar Event
                  </button>
                </Link>
              </div>
            </div> */}

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 text-white/90 text-xs sm:text-sm">
              {currentIndex + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
      {/* CTA Section - Gestalt Style */}
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
         It's Time to Write Your Next Chapter of Memories.
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s discuss your vision and create an unforgettable experience that will be remembered for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-colors font-semibold text-lg"
              style={{ backgroundColor: '#E55E27' }}
            >
              Start Planning Your Event
            </Link>
            <Link
              href="/services"
              className="border-2 px-8 py-4 rounded-2xl transition-colors font-semibold text-lg hover:text-white"
              style={{ 
                borderColor: '#E55E27', 
                color: '#E55E27' 
              }}

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