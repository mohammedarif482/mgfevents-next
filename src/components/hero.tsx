'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero-wedding-kerala.jpg',
    title: 'Dream Weddings Come True',
    subtitle: 'Creating magical moments with traditional Kerala charm and modern elegance',
    cta: 'Plan Your Wedding',
    href: '/services/wedding-planning',
    overlay: 'from-black/60 via-black/30 to-transparent'
  },
  {
    id: 2,
    image: '/images/hero-corporate-events.jpg',
    title: 'Corporate Excellence',
    subtitle: 'Professional event management that elevates your business gatherings',
    cta: 'Explore Corporate Services',
    href: '/services/corporate-events',
    overlay: 'from-primary-900/60 via-primary-600/30 to-transparent'
  },
  {
    id: 3,
    image: '/images/hero-celebrations.jpg',
    title: 'Unforgettable Celebrations',
    subtitle: 'From birthdays to anniversaries, we make every occasion special',
    cta: 'Celebrate With Us',
    href: '/services',
    overlay: 'from-secondary-900/60 via-secondary-600/30 to-transparent'
  },
];

export default function Hero() {
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
          {/* Placeholder colored background for now */}
          <div className={`w-full h-full bg-gradient-to-br ${
            index === 0 ? 'from-primary-600 to-primary-800' :
            index === 1 ? 'from-secondary-600 to-secondary-800' :
            'from-purple-600 to-purple-800'
          }`} />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlay}`}></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light leading-relaxed max-w-4xl mx-auto opacity-90">
            {heroSlides[currentSlide].subtitle}
          </p>


          {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
  <Link
    href={heroSlides[currentSlide].href}
    className="group bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20"
  >
    <span className="mr-2">{heroSlides[currentSlide].cta}</span>
    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
  </Link>
  <Link
    href="/portfolio"
    className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 backdrop-blur-sm"
  >
    View Our Work
  </Link>
</div>

     
          {/* Stats Row - Meragi Style */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">500+</div>
              <div className="text-sm md:text-base uppercase tracking-wide opacity-80">Events Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">10+</div>
              <div className="text-sm md:text-base uppercase tracking-wide opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">100%</div>
              <div className="text-sm md:text-base uppercase tracking-wide opacity-80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}