import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">MGF Events</span>
                <span className="text-sm text-gray-400">Creating Memories</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              MGF Events is Kerala's premier event management company, specializing in 
              weddings, corporate events, and celebrations. We turn your vision into 
              reality with creative planning and flawless execution.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', href: '#' },
                { name: 'Instagram', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'YouTube', href: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.name.charAt(0)}</span>
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
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
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
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MGF Events. All rights reserved. | Designed with ❤️ in Kerala
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}