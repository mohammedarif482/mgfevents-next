'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Priya Nair',
    event: 'Wedding Celebration',
    content: 'Outstanding experience with MGF Events. They are thorough professionals & are sure to make your event memorable for all your guests & peaceful for you!',
    rating: 5,
    location: 'Kochi, Kerala',
    image: '/images/testimonial-priya.jpg',
    bgColor: 'from-pink-500 to-rose-600'
  },
  {
    id: 2,
    name: 'Rajesh Kumar', 
    event: 'Corporate Conference',
    content: 'Incredible attention to detail and flawless execution. MGF Events transformed our annual conference into an unforgettable experience for 500+ attendees.',
    rating: 5,
    location: 'Thiruvananthapuram, Kerala',
    image: '/images/testimonial-rajesh.jpg',
    bgColor: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    name: 'Meera Menon',
    event: 'Golden Anniversary',
    content: 'The team at MGF Events is simply amazing! They organized our parents\' 50th anniversary with such care and attention. Every moment was magical.',
    rating: 5,
    location: 'Munnar, Kerala',
    image: '/images/testimonial-meera.jpg',
    bgColor: 'from-purple-500 to-violet-600'
  },
  {
    id: 4,
    name: 'Arjun Pillai',
    event: 'Product Launch',
    content: 'Professional service from start to finish. MGF Events handled our product launch with creativity and precision that impressed all our stakeholders.',
    rating: 5,
    location: 'Kozhikode, Kerala',
    image: '/images/testimonial-arjun.jpg',
    bgColor: 'from-green-500 to-emerald-600'
  },
  {
    id: 5,
    name: 'Kavya Krishnan',
    event: 'Birthday Celebration',
    content: 'From concept to execution, MGF Events delivered beyond our imagination. Our daughter\'s birthday party was a fairy tale come to life!',
    rating: 5,
    location: 'Kottayam, Kerala',
    image: '/images/testimonial-kavya.jpg',
    bgColor: 'from-orange-500 to-red-600'
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Customer stories,<br />
            <span className="text-primary-600">unforgettable memories</span>
          </h2>
        </div>

        {/* Main Testimonial Display */}
        <div 
          className={`relative max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="currentColor" className="text-primary-600" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Client Image */}
              <div className="lg:col-span-1 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white mb-6">
                  {/* Placeholder with gradient */}
                  <div className={`w-full h-full bg-gradient-to-br ${testimonials[currentTestimonial].bgColor} flex items-center justify-center`}>
                    <span className="text-white text-4xl font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-primary-600 font-semibold mb-1">
                    {testimonials[currentTestimonial].event}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Quote Icon */}
                <div className="text-primary-200 mb-6">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-6">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Attribution */}
                <div className="text-right">
                  <div className="text-primary-600 font-semibold">
                    {testimonials[currentTestimonial].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`group relative p-1 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'ring-4 ring-primary-600 ring-opacity-30 scale-110' 
                  : 'hover:ring-2 hover:ring-primary-300 hover:scale-105'
              }`}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                {/* Placeholder with gradient */}
                <div className={`w-full h-full bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <span className="text-white text-lg font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {testimonial.name}
              </div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Events Completed</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
            <div className="text-gray-600 font-medium">Repeat Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}