/* components/footer-redesigned.tsx */
import Link from 'next/link';

export default function FooterRedesigned() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">MGF Events</span>
                <span className="text-sm text-gray-400">Creating Memories</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
              MGF Events is Kerala's premier event management company, specializing in 
              weddings, corporate events, and celebrations. We turn your vision into 
              reality with creative planning and flawless execution.
            </p>
            
            {/* Social Media Links - Gestalt Style */}
            <div className="flex space-x-3">
              {[
                { name: 'Facebook', href: '#', icon: 'F' },
                { name: 'Instagram', href: '#', icon: 'I' },
                { name: 'LinkedIn', href: '#', icon: 'L' },
                { name: 'YouTube', href: '#', icon: 'Y' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-2xl flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' },
                { name: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors inline-flex items-center group"
                  >
                    {link.name}
                    <svg 
                      className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Wedding Planning', href: '/services/wedding-planning' },
                { name: 'Corporate Events', href: '/services/corporate-events' },
                { name: 'Event Decoration', href: '/services/decoration' },
                { name: 'Catering Services', href: '/services/catering' },
                { name: 'Photography', href: '/services/photography' },
                { name: 'Venue Consultation', href: '/services/venue-consultation' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-red-400 transition-colors inline-flex items-center group"
                  >
                    {service.name}
                    <svg 
                      className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer - Gestalt Style */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 MGF Events. All rights reserved. | Designed with{' '}
              <span className="text-red-500">❤️</span> in Kerala
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}