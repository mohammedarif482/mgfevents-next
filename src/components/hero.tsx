/* components/hero-redesigned.tsx */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    title: 'Dream Weddings Come True',
    subtitle: 'Creating magical moments with traditional Kerala charm and modern elegance',
    cta: 'Plan Your Wedding',
    href: '/services/wedding-planning',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop&crop=faces'
  },
  {
    id: 2,
    title: 'Corporate Excellence',
    subtitle: 'Professional event management that elevates your business gatherings',
    cta: 'Explore Corporate Services',
    href: '/services/corporate-events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop&crop=faces'
  },
  {
    id: 3,
    title: 'Unforgettable Celebrations',
    subtitle: 'From birthdays to anniversaries, we make every occasion special',
    cta: 'Celebrate With Us',
    href: '/services',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop&crop=faces'
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
      <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-4xl mx-auto opacity-95">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons - Gestalt Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href={heroSlides[currentSlide].href}
              className="group bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20 inline-flex items-center"
            >
              <span className="mr-2">{heroSlides[currentSlide].cta}</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Row - Gestalt Style */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">500+</div>
              <div className="text-sm md:text-base uppercase tracking-wide opacity-90 font-medium">Events Planned</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">10+</div>
              <div className="text-sm md:text-base uppercase tracking-wide opacity-90 font-medium">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">100%</div>
              <div className="text-sm md:text-base uppercase tracking-wide opacity-90 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Gestalt Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Gestalt Style */}
      <div className="absolute bottom-8 right-8 z-30 animate-bounce">
        <div className="flex flex-col items-center text-white/80 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <span className="text-xs mb-2 font-medium">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}