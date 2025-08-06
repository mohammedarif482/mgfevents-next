import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  title: 'MGF Events - Premier Event Management Services in Kerala',
  description: 'MGF Events offers exceptional event management services in Kozhikode, Kerala. From weddings to corporate events, we create unforgettable experiences.',
  canonical: 'https://www.mgfevent.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.mgfevent.com',
    siteName: 'MGF Events',
    title: 'MGF Events - Premier Event Management Services in Kerala',
    description: 'Transform your vision into reality with MGF Events.',
    images: [
      {
        url: 'https://www.mgfevent.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MGF Events - Event Management Kerala',
      },
    ],
  },
  twitter: {
    handle: '@mgfevents',
    site: '@mgfevents',
    cardType: 'summary_large_image',
  },
};
// Remove the DefaultSeoProps import and defaultSEO export
// Keep only the structured data functions

export const generateOrganizationLD = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MGF Events',
  description: 'Premier event management and wedding planning services in Kerala',
  url: 'https://www.mgfevent.com',
  logo: 'https://www.mgfevent.com/images/logo.png',
  telephone: '+91-XXXXXXXXXX',
  email: 'info@mgfevent.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Kozhikode',
    addressRegion: 'Kerala',
    postalCode: '673001',
    addressCountry: 'IN',
  },
  serviceType: ['Event Management', 'Wedding Planning', 'Corporate Events'],
});

export const generateServiceLD = (service: { name: string; description: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'MGF Events',
    url: 'https://www.mgfevent.com',
  },
});