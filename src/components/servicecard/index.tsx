import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-48">
 <Image
  src={image}
  alt={title}
  layout="fill"
  objectFit="cover"
  className="rounded-t-xl"
/>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
