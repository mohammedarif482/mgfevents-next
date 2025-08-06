/* components/contacts-redesigned.tsx */
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactRedesigned() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
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
    } catch {
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Gestalt Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Got a wedding in the works?
          </h2>
          <p className="text-xl text-red-400 font-medium">
            Let's make some magic happen!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Gestalt Style */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Consult an Expert</h3>
                <p className="text-gray-600">Expert guidance for stress-free decisions</p>
              </div>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800 font-medium">Thank you! We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Event Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-900 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
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

                {/* Event Date and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-900 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 text-gray-900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
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

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell us about your event
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 resize-none text-gray-900 placeholder-gray-500"
                    placeholder="Share your vision, special requirements, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Get Free Consultation'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - Gestalt Style */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Expert Guidance Card */}
              <div className="bg-red-600 rounded-3xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Expert guidance</h3>
                    <p className="text-red-100">for stress-free decisions</p>
                  </div>
                </div>
                <p className="text-red-50 leading-relaxed">
                  Backed by Experience from 2,500+ Weddings. Our expert team is here to guide you through every step of your special day.
                </p>
              </div>

              {/* Office Locations */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Meet our experts in person</h3>
                <div className="text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">OFFICES</div>
                
                <div className="space-y-6">
                  {[
                    { city: 'Kozhikode', address: 'MGF Events, Business District, Kozhikode' },
                    { city: 'Kochi', address: 'Marine Drive, Ernakulam, Kochi' },
                    { city: 'Thiruvananthapuram', address: 'Technopark, Trivandrum' }
                  ].map((office) => (
                    <div key={office.city} className="group">
                      <h4 className="font-bold text-gray-900 text-base mb-1">{office.city}</h4>
                      <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                      <Link href="#" className="text-red-600 hover:text-red-700 font-medium text-sm group-hover:underline inline-flex items-center">
                        Get Directions 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 XXXXX XXXXX</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@mgfevent.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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