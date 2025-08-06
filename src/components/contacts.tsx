'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            Got a wedding in the works?<br />
            <span className="text-primary-400">Let's make some magic happen!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Consult an Expert</h3>
              <p className="text-gray-600 mb-8">Expert guidance for stress-free decisions</p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-700">Thank you! We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-700">Something went wrong. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors bg-white"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1lakh">Under ₹1 Lakh</option>
                      <option value="1-3lakh">₹1-3 Lakhs</option>
                      <option value="3-5lakh">₹3-5 Lakhs</option>
                      <option value="5-10lakh">₹5-10 Lakhs</option>
                      <option value="above-10lakh">Above ₹10 Lakhs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your event
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors resize-vertical"
                    placeholder="Share your vision, special requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Offices */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-8">
              {/* Expert Guidance Card */}
              <div className="bg-primary-800 rounded-3xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Expert guidance</h3>
                    <p className="text-primary-200">for stress-free decisions</p>
                  </div>
                </div>
                <p className="text-primary-100 leading-relaxed">
                  Backed by Experience from 2,500+ Weddings. Our expert team is here to guide you through every step of your special day.
                </p>
              </div>

              {/* Office Locations - Meragi Style */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet our experts in person</h3>
                <div className="text-sm font-semibold text-gray-600 mb-6 uppercase tracking-wide">OFFICES</div>
                
                <div className="space-y-6">
                  <div className="group">
                    <h4 className="font-bold text-gray-900 text-lg">Kozhikode</h4>
                    <p className="text-gray-600 mb-2">MGF Events, Business District, Kozhikode</p>
                    <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline">
                      Get Directions →
                    </Link>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-bold text-gray-900 text-lg">Kochi</h4>
                    <p className="text-gray-600 mb-2">Marine Drive, Ernakulam, Kochi</p>
                    <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline">
                      Get Directions →
                    </Link>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-bold text-gray-900 text-lg">Thiruvananthapuram</h4>
                    <p className="text-gray-600 mb-2">Technopark, Trivandrum</p>
                    <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline">
                      Get Directions →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 XXXXX XXXXX</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@mgfevent.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Working Hours</div>
                      <div className="text-gray-600 text-sm">Mon-Fri: 9AM-6PM<br />Sat: 9AM-4PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}