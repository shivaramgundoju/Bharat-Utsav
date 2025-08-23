import React from 'react';
import { Calendar, MapPin, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Festival } from '../types';
import OptimizedImage from './OptimizedImage';

interface FestivalCardProps {
  festival: Festival;
  featured?: boolean;
}

const FestivalCard: React.FC<FestivalCardProps> = ({ festival, featured = false }) => {
  const date = new Date(festival.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ${
        featured ? 'lg:flex bg-white' : 'bg-white'
      }`}
    >
      <div 
        className={`relative overflow-hidden ${
          featured ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-48'
        }`}
      >
        <OptimizedImage 
          src={festival.images[0]} 
          alt={festival.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
        {featured && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured Festival
          </div>
        )}
      </div>
      
      <div className={`p-5 ${featured ? 'lg:w-1/2' : ''}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{festival.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2 text-orange-500" />
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2 text-orange-500" />
          <span>{festival.region.join(', ')}</span>
        </div>
        
        <p className="text-gray-700 mb-4">
          {festival.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {festival.religion.map((religion) => (
            <span 
              key={religion}
              className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
            >
              {religion}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/festival/${festival.id}`}
          className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
        >
          <span className="font-medium">Explore Festival</span>
          <Book className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default FestivalCard;