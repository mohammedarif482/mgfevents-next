// /* components/header.tsx */
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'Services', href: '/services' },
//   { name: 'Portfolio', href: '/portfolio' },
//   { name: 'About', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg' 
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">M</span>
//             </div>
//             <div className="flex flex-col">
//               <span className={`text-xl font-bold transition-colors ${
//                 isScrolled ? 'text-gray-900' : 'text-white'
//               }`}>
//                 MGF Events
//               </span>
//               <span className={`text-xs transition-colors ${
//                 isScrolled ? 'text-gray-600' : 'text-gray-200'
//               }`}>
//                 Creating Memories
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`transition-colors font-medium ${
//                   pathname === item.href
//                     ? 'text-primary-600'
//                     : isScrolled
//                     ? 'text-gray-700 hover:text-primary-600'
//                     : 'text-white hover:text-primary-200'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
//             >
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`md:hidden p-2 rounded-lg transition-colors ${
//               isScrolled ? 'text-gray-700' : 'text-white'
//             }`}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-2">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors ${
//                   pathname === item.href ? 'text-primary-600 bg-primary-50' : ''
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="border-t border-gray-200 mt-2 pt-2">
//               <Link
//                 href="/contact"
//                 className="block mx-4 text-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Get Quote
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

/* components/header-redesigned.tsx */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
          {/* Logo - Gestalt Style */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-700 transition-colors">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-semibold leading-none transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                MGF Events
              </span>
              <span className={`text-xs leading-none transition-colors ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                Creating Memories
              </span>
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
                    ? 'bg-red-600 text-white hover:bg-red-700'
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
              className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
                        ? 'text-red-600 bg-red-50' 
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
                  className="block bg-red-600 hover:bg-red-700 text-white text-center px-4 py-3 rounded-xl font-medium text-sm transition-colors"
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