/* components/header-redesigned.tsx */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function HeaderRedesigned() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Dynamic Image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-120 h-120 group-hover:scale-105 transition-transform duration-200">
              <Image
                src={isScrolled ? "/assets/images/mgflogodark.png" : "/assets/images/mgflogo.png"}
                alt="MGF Events Logo"
                width={88}
                height={88}
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
            
          </Link>

          {/* Desktop Navigation - Gestalt Style */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/10 ${
                  pathname === item.href
                    ? 'text-white font-bold'
                    : isScrolled
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button - Gestalt Style */}
            <Link
              href="/contact"
              className="ml-4 bg-brand-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button - Gestalt Style */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-50' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Gestalt Style */}
        {isOpen && (
          <div className="md:hidden">
            <div className="bg-white rounded-2xl shadow-xl mt-2 py-2 border border-gray-100 overflow-hidden">
              <div className="px-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      pathname === item.href 
                        ? 'text-gray-900 font-bold' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="border-t border-gray-100 mt-2 pt-2 px-2">
                <Link
                  href="/contact"
                  className="block bg-brand-primary hover:bg-red-700 text-white text-center px-4 py-3 rounded-xl font-medium text-sm transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}