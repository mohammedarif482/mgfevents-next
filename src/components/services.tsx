/* components/services-redesigned.tsx */
'use client';

import React from 'react';

// Individual Service Card Component
const ServiceCard = ({ 
  title, 
  description, 
  features, 
  backgroundImage, 
  buttonText = "Explore Service" 
}: {
  title: string;
  description: string;
  features: string[];
  backgroundImage: string;
  buttonText?: string;
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300" style={{ height: '32rem' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `url("${backgroundImage}")`
        }}
      />
      
      {/* Overlay with Precise Gradient Control */}
      <div className="absolute inset-0">
        {/* Black gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.1) 40%, transparent 60%)'
          }}
        ></div>
        
        {/* Backdrop blur that fades off at 70% */}
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            mask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.3) 60%, transparent 70%)',
            WebkitMask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.3) 60%, transparent 70%)'
          }}
        ></div>
        
        {/* Soft flowing shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full mt-0.5"></div>
            <div className="w-1 h-1 bg-white/20 rounded-full mt-1"></div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-8">
        
        {/* Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            {title}
          </h3>
          <div className="w-12 h-0.5 bg-white/60"></div>
        </div>

        {/* Description */}
        <p className="text-white/90 text-sm leading-relaxed mb-6 font-light">
          {description}
        </p>

        {/* Feature List */}
        <div className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-white/85">
              <svg className="w-4 h-4 mr-3 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full text-left text-white/90 py-3.5 px-0 font-semibold text-sm hover:text-white transition-all duration-300 group">
          <div className="flex items-center">
            <span>{buttonText}</span>
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Top decorative corner */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div className="absolute top-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
        <div className="absolute top-6 left-6 w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
};

// Main Services Component (Replaces ServicesRedesigned)
export default function ServicesRedesigned() {
  const services = [
    {
      title: "Wedding Planning",
      description: "From intimate ceremonies to grand celebrations, our comprehensive wedding planning services reflect your unique love story with meticulous attention to every detail.",
      features: [
        "Venue Selection",
        "Decoration Design", 
        "Complete Coordination",
        "Timeline Management"
      ],
      backgroundImage: "https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/0035%201.png"
    },
    {
      title: "Event Management",
      description: "Professional event management for corporate gatherings, celebrations, and special occasions. We handle every aspect to ensure your event runs seamlessly.",
      features: [
        "Corporate Events",
        "Birthday Parties",
        "Anniversary Celebrations",
        "Event Coordination"
      ],
      backgroundImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Destination Weddings",
      description: "Make your dream destination wedding a reality. We specialize in creating magical experiences in stunning locations with complete logistical support.",
      features: [
        "Location Scouting",
        "Travel Coordination",
        "Local Vendor Management",
        "Guest Accommodation"
      ],
      backgroundImage: "https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/DSC01883%201.png"
    },
    {
      title: "Event Decor",
      description: "Exquisite floral arrangements that capture the essence of your celebration. From bridal bouquets to venue decorations, we create stunning floral artistry.",
      features: [
        "Bridal Bouquets",
        "Venue Decorations",
        "Centerpieces",
        "Custom Arrangements"
      ],
      backgroundImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Corporate Events",
      description: "From impactful conferences to grand celebrations, our corporate event services are designed to strengthen your brand presence and create lasting impressions with seamless execution.",
      features: [
       "Venue Management",

"Stage & Theme Design",

"End-to-End Coordination",

"Schedule & Program Management"
      ],
      backgroundImage: "https://jiclyt3rslmxxd7w.public.blob.vercel-storage.com/IMG_4909.JPG"
    },
    {
      title: "Catering Services",
      description: "Delicious cuisine tailored to your taste and style. From traditional Kerala dishes to international cuisine, we create memorable dining experiences.",
      features: [
        "Traditional Kerala Cuisine",
        "International Menus",
        "Custom Catering",
        "Live Cooking Stations"
      ],
      backgroundImage: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Consistent with your contact form style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-against">
            Complete Wedding Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to execution, we provide comprehensive services to make your special day absolutely perfect
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              backgroundImage={service.backgroundImage}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">           
 <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">             
   <h3 className="text-2xl font-bold text-gray-900 mb-4 ">               
     Ready to Start Planning Your Perfect Event?             
   </h3>             
   <p className="text-gray-600 mb-6">               
     Let our expert team help you create unforgettable memories. Contact us for a free consultation.             
   </p>             
   <div className="flex flex-col sm:flex-row gap-4 justify-center">               
     <button className="text-white px-8 py-3 rounded-2xl font-semibold transition-colors duration-200" 
             style={{backgroundColor: '#E55E27'}} 
             onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#d14d1f'}
             onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E55E27'}>                 
       Get Free Consultation               
     </button>               
     <button className="border-2 px-8 py-3 rounded-2xl font-semibold transition-all duration-200" 
             style={{borderColor: '#E55E27', color: '#E55E27'}}
             onMouseEnter={(e) => {
               const target = e.target as HTMLButtonElement;
               target.style.backgroundColor = '#E55E27';
               target.style.color = 'white';
             }}
             onMouseLeave={(e) => {
               const target = e.target as HTMLButtonElement;
               target.style.backgroundColor = 'transparent';
               target.style.color = '#E55E27';
             }}>                 
       View  Portfolio               
     </button>             
   </div>           
 </div>         
</div>
      </div>
    </section>
  );
}