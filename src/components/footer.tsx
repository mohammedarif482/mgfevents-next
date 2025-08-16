import Link from 'next/link';
import Image from 'next/image';

export default function FooterRedesigned() {
  return (
    <footer className="bg-black  text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/assets/images/mgflogo.png"
                  alt="MGF Events Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
             
          
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
              MGF Events is Kerala's premier event management company, specializing in 
              weddings, corporate events, and celebrations. We turn your vision into 
              reality with creative planning and flawless execution.
            </p>
            
            {/* Social Media Links - Updated Icons */}
            <div className="flex space-x-3">
              {[
                { 
                  name: 'Threads', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.5c0-3.086.85-5.94 2.495-8.491C5.845 1.205 8.598.024 12.179 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.85 5.56 22.5 8.414 22.5 11.5c0 3.086-.85 5.94-2.495 8.491C18.361 22.795 15.608 23.976 12.186 24zM12 2.5c-2.735 0-4.813.755-6.18 2.245C4.505 6.23 3.5 8.665 3.5 11.5s1.005 5.27 2.32 6.755c1.367 1.49 3.445 2.245 6.18 2.245s4.813-.755 6.18-2.245c1.315-1.485 2.32-3.92 2.32-6.755s-1.005-5.27-2.32-6.755C16.813 3.255 14.735 2.5 12 2.5z"/>
                      <path d="M16.5 11c0 2.485-2.015 4.5-4.5 4.5S7.5 13.485 7.5 11s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Facebook', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Instagram', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  name: 'YouTube', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Pinterest', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  )
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-2xl flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
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
    <div className="text-gray-400 text-sm text-center md:text-left flex items-center justify-center md:justify-start">
      <span>Crafting Stories, Not Just Ads</span>
      <a 
        href="https://adowlz.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center hover:underline transition-colors duration-200 ml-2"
        style={{ color: '#E55E27' }}
      >
        <img 
          src="/assets/images/owlicon.png" 
          alt="Adowlz Logo" 
          className="w-4 h-4 mr-1 flex-shrink-0"
        />
        Adowlz
      </a>         
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