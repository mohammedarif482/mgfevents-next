'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
// import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: 'Meera George',
    role: 'Founder & Creative Director',
    image: '/images/team-meera.jpg',
    bio: 'With over 15 years of experience in event management, Meera founded MGF Events with a vision to create extraordinary experiences. Her expertise in Kerala traditions combined with modern aesthetics makes every event unique.',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 2,
    name: 'Arjun Nair',
    role: 'Operations Manager',
    image: '/images/team-arjun.jpg',
    bio: 'Arjun ensures flawless execution of every event with his meticulous planning and coordination skills. His 10+ years in hospitality brings operational excellence to our team.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    name: 'Priya Menon',
    role: 'Design & Decor Specialist',
    image: '/images/team-priya.jpg',
    bio: 'Priya transforms venues into magical spaces with her creative vision and attention to detail. Her background in interior design adds artistic flair to every celebration.',
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 4,
    name: 'Vishnu Kumar',
    role: 'Client Relations Manager',
    image: '/images/team-vishnu.jpg',
    bio: 'Vishnu ensures every client feels heard and valued throughout their event journey. His dedication to customer satisfaction has earned us numerous loyal clients.',
    color: 'from-teal-500 to-cyan-600'
  }
];

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for perfection in every detail, ensuring your event exceeds expectations.'
  },
  {
    icon: '💫',
    title: 'Creativity',
    description: 'We bring fresh, innovative ideas to make your celebration truly unique and memorable.'
  },
  {
    icon: '🤝',
    title: 'Trust',
    description: 'We build lasting relationships through transparency, reliability, and honest communication.'
  },
  {
    icon: '🎊',
    title: 'Passion',
    description: 'We pour our hearts into every event, celebrating your special moments as our own.'
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

export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            About MGF Events
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Creating unforgettable experiences across Kerala for over a decade, we blend traditional charm with contemporary elegance to bring your vision to life
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">14+</div>
                  <div className="text-xl">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape every interaction we have with our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped MGF Events into what we are today
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals who bring magic to every event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveTeamMember(member)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <div className={`w-full h-full bg-gradient-to-br ${member.color}`} />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {activeTeamMember && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setActiveTeamMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className={`h-64 bg-gradient-to-br ${activeTeamMember.color} rounded-t-3xl flex items-center justify-center`}>
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-2">{activeTeamMember.name}</h2>
                  <p className="text-xl opacity-90">{activeTeamMember.role}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {activeTeamMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Ready to turn your vision into reality? Our team is here to make your event extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg transition-colors font-medium text-lg"
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