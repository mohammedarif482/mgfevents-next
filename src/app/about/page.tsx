// about/page.tsx
'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: 'Meera George',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b172?w=400&h=600&fit=crop&crop=faces',
    bio: 'With over 15 years of experience in event management, Meera founded MGF Events with a vision to create extraordinary experiences. Her expertise in Kerala traditions combined with modern aesthetics makes every event unique and unforgettable.',
  },
  {
    id: 2,
    name: 'Arjun Nair',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=faces',
    bio: 'Arjun ensures flawless execution of every event with his meticulous planning and coordination skills. His 10+ years in hospitality brings operational excellence to our team, ensuring every detail is perfectly managed.',
  },
  {
    id: 3,
    name: 'Priya Menon',
    role: 'Design & Decor Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=faces',
    bio: 'Priya transforms venues into magical spaces with her creative vision and attention to detail. Her background in interior design adds artistic flair to every celebration, creating breathtaking visual experiences.',
  },
  {
    id: 4,
    name: 'Vishnu Kumar',
    role: 'Client Relations Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=faces',
    bio: 'Vishnu ensures every client feels heard and valued throughout their event journey. His dedication to customer satisfaction has earned us numerous loyal clients and long-lasting relationships.',
  }
];

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for perfection in every detail, ensuring your event exceeds expectations and creates lasting memories.'
  },
  {
    icon: '💫',
    title: 'Creativity',
    description: 'We bring fresh, innovative ideas to make your celebration truly unique and memorable for you and your guests.'
  },
  {
    icon: '🤝',
    title: 'Trust',
    description: 'We build lasting relationships through transparency, reliability, and honest communication with every client.'
  },
  {
    icon: '🎊',
    title: 'Passion',
    description: 'We pour our hearts into every event, celebrating your special moments as our own with genuine enthusiasm.'
  }
];

const milestones = [
  { year: '2010', event: 'MGF Events Founded', description: 'Started with a vision to redefine event management in Kerala' },
  { year: '2015', event: '500+ Events Completed', description: 'Reached our first major milestone of successful events' },
  { year: '2018', event: 'Corporate Division Launch', description: 'Expanded services to include corporate events and conferences' },
  { year: '2020', event: 'Digital Transformation', description: 'Adapted to hybrid and virtual events during challenging times' },
  { year: '2023', event: '1000+ Happy Clients', description: 'Celebrated over 1000 successful events and satisfied clients' },
  { year: '2024', event: 'Sustainable Events Initiative', description: 'Launched eco-friendly event solutions for conscious celebrations' }
];

export default function AboutPageRedesigned() {
  const [activeTeamMember, setActiveTeamMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div>
      <Header />
      
      {/* Hero Section - Gestalt Style */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop&crop=center')"
          }}
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About MGF Events
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Creating unforgettable experiences across Kerala for over a decade, we blend traditional charm with contemporary elegance to bring your vision to life
          </p>
        </div>
      </section>

      {/* Our Story Section - Gestalt Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded in 2010 by Meera George, MGF Events began as a small dream to create extraordinary celebrations that honor Kerala&apos;s rich cultural heritage while embracing modern sophistication. What started as a passion project has grown into one of Kerala&apos;s most trusted event management companies.
                </p>
                <p>
                  Our journey has been marked by countless magical moments – from intimate backwater weddings to grand corporate galas. Each event teaches us something new, and every client becomes part of our extended family. We believe that behind every great celebration is a story worth telling, and we&apos;re honored to be the storytellers.
                </p>
                <p>
                  Today, with over 1000 successful events and a team of passionate professionals, we continue to push boundaries, embrace innovation, and create experiences that leave lasting impressions on hearts and minds.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl md:text-7xl font-bold mb-4">14+</div>
                  <div className="text-xl md:text-2xl font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Gestalt Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape every interaction we have with our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Gestalt Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
              OUR JOURNEY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Milestones & Memories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones that have shaped MGF Events into what we are today
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-red-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-8 md:mb-0`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="text-2xl font-bold text-red-600 mb-3 group-hover:text-red-700 transition-colors">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.event}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Gestalt Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
              OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet the Dream Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The passionate professionals who bring magic to every event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveTeamMember(member)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl">
                        Read More
                      </button>
                    </div>
                  </div>

                  {/* Bottom Overlay with Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold mb-1 leading-tight">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal - Full Screen */}
      {activeTeamMember && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Full Screen Image */}
          <img
            src={activeTeamMember.image}
            alt={activeTeamMember.name}
            className="w-full h-full object-cover"
          />

          {/* Close Button */}
          <button
            onClick={() => setActiveTeamMember(null)}
            className="absolute top-6 right-6 z-60 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Details Overlay - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
            <div className="max-w-4xl mx-auto text-white">
              {/* Role Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white mb-4">
                TEAM MEMBER
              </div>

              {/* Name and Role */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                {activeTeamMember.name}
              </h2>
              <p className="text-xl text-red-400 font-medium mb-6">
                {activeTeamMember.role}
              </p>

              {/* Bio */}
              <p className="text-lg leading-relaxed text-gray-200 mb-6 max-w-3xl">
                {activeTeamMember.bio}
              </p>

              {/* CTA Button */}
              <Link href="/contact" onClick={() => setActiveTeamMember(null)}>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold transition-colors">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section - Gestalt Style */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Ready to turn your vision into reality? Our team is here to make your event extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-2xl transition-colors font-semibold text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}