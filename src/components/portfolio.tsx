'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Define the video type
type Video = {
  id: number;
  thumbnail: string;
  instagramUrl: string;
  embedUrl: string;
  title: string;
  description: string;
};

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Your Instagram reels with thumbnail images
  const instagramVideos: Video[] = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/CRdt9mLApy-/',
      embedUrl: 'https://www.instagram.com/reel/CRdt9mLApy-/embed',
      title: 'Traditional Wedding Ceremony',
      description: 'A beautiful traditional Kerala wedding with all customs and rituals'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DMXrHKkhY3i/',
      embedUrl: 'https://www.instagram.com/reel/DMXrHKkhY3i/embed',
      title: 'Behind the Scenes',
      description: 'Behind the scenes of our premium event setup and decoration'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DL6spPMBJr6/',
      embedUrl: 'https://www.instagram.com/reel/DL6spPMBJr6/embed',
      title: 'Event Highlights',
      description: 'Highlights from our recent corporate event and celebration'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DKGoNOQB4f2/',
      embedUrl: 'https://www.instagram.com/reel/DKGoNOQB4f2/embed',
      title: 'Wedding Decor Setup',
      description: 'Time-lapse of our team setting up a stunning wedding venue'
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DKBd5qrhirO/',
      embedUrl: 'https://www.instagram.com/reel/DKBd5qrhirO/embed',
      title: 'Reception Celebration',
      description: 'Grand reception with live performances and entertainment'
    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DIkn2NzhB9i/',
      embedUrl: 'https://www.instagram.com/reel/DIkn2NzhB9i/embed',
      title: 'Haldi Ceremony',
      description: 'Colorful and joyful haldi ceremony with traditional elements'
    },
    {
      id: 7,
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DID67u5Crpn/',
      embedUrl: 'https://www.instagram.com/reel/DID67u5Crpn/embed',
      title: 'Corporate Event',
      description: 'Professional corporate event management and execution'
    },
    {
      id: 8,
      thumbnail: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DIB4snaTsFr/',
      embedUrl: 'https://www.instagram.com/reel/DIB4snaTsFr/embed',
      title: 'Beach Wedding',
      description: 'Dreamy beach wedding with stunning ocean backdrop'
    },
    {
      id: 9,
      thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/CRdt9mLApy-/',
      embedUrl: 'https://www.instagram.com/reel/CRdt9mLApy-/embed',
      title: 'Destination Wedding',
      description: 'Luxury destination wedding in exotic locations'
    },
    {
      id: 10,
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=500&fit=crop&crop=faces',
      instagramUrl: 'https://www.instagram.com/reel/DMXrHKkhY3i/',
      embedUrl: 'https://www.instagram.com/reel/DMXrHKkhY3i/embed',
      title: 'Anniversary Celebration',
      description: 'Golden anniversary celebration with family and friends'
    }
  ];

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  // Split videos into two rows for different scroll directions
  const firstRowVideos = [...instagramVideos, ...instagramVideos]; // Duplicate for seamless loop
  const secondRowVideos = [...instagramVideos.slice().reverse(), ...instagramVideos.slice().reverse()]; // Reverse for opposite direction

  return (
    <section className="py-20 bg-white" id="portfolio">
        {/* Section Header */}
     
       <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-against">
            Inspired by your dreams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Best-selling event designs that have captured hearts
          </p>
        </div>


      {/* FULL WIDTH SCROLLING GALLERY - BREAKS OUT OF CONTAINER */}
      <div 
        className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] space-y-8 mb-16 transition-all duration-1000 delay-400 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* First Row - Scrolling Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-right">
            {firstRowVideos.map((video, index) => (
              <div
                key={`row1-${video.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-80 group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                onClick={() => openVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {secondRowVideos.map((video, index) => (
              <div
                key={`row2-${video.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-80 group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                onClick={() => openVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    <div className="max-w-7xl mx-auto px-6">
  
        <div className="text-center">
          <a 
            href="https://www.instagram.com/mgfevent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{background: 'linear-gradient(to right, #E55E27, #D44D1C)'}}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
            </svg>
            View More on Instagram
          </a>
        </div>
      </div>

      {/* Full Screen Instagram Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-60"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Instagram Embed Full View */}
          <div className="max-w-md w-full">
            <iframe
              src={selectedVideo.embedUrl}
              className="w-full h-[600px] border-0 rounded-2xl"
              title={selectedVideo.title}
              allow="autoplay; encrypted-media"
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-white/80 text-lg mb-4">
                {selectedVideo.description}
              </p>
              <a 
                href={selectedVideo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                </svg>
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
          }

          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
