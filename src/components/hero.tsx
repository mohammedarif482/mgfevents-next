/* components/hero-redesigned.tsx */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    title: 'Dreamy Weddings',
    subtitle: 'Creating magical moments with traditional Kerala charm and modern elegance',
    cta: 'Plan Your Wedding',
    href: '/services/wedding-planning',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/0029%202%201.png'
  },
  {
    id: 2,
    title: 'Corporate Excellence',
    subtitle: 'Professional event management that elevates your business gatherings',
    cta: 'Explore Corporate Services',
    href: '/services/corporate-events',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/DSCF5848.JPG'
  },
  {
    id: 3,
    title: 'Unforgettable Celebrations',
    subtitle: 'From birthdays to anniversaries, we make every occasion special',
    cta: 'Celebrate With Us',
    href: '/services',
    image: 'https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/DSC05448%20copy.jpg'
  },
];

export default function HeroRedesigned() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          />
        </div>
      ))}

      {/* Single Black Overlay - 20% opacity */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content - Gestalt Style */}
      <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Main Heading - Responsive font sizing */}
          <h1 className="font-bold mb-4 sm:mb-6 leading-tight font-against text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2">
            {heroSlides[currentSlide].title}
          </h1>
          
          {/* Subtitle - Responsive font sizing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 font-light leading-relaxed max-w-4xl mx-auto opacity-95 px-2">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons - Responsive sizing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-2">
            <Link
              href={heroSlides[currentSlide].href}
              className="group bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20 inline-flex items-center w-full sm:w-auto justify-center"
            >
              <span className="mr-2">{heroSlides[currentSlide].cta}</span>
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white/80 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-medium transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Row - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-2">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">1000+</div>
              <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide opacity-90 font-medium leading-tight">Events Planned</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">19+</div>
              <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide opacity-90 font-medium leading-tight">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">100%</div>
              <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide opacity-90 font-medium leading-tight">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}