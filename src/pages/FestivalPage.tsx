import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Utensils, BookOpen } from 'lucide-react';
import { festivals } from '../data/festivals';
import { Festival } from '../types';
import FestivalGallery from '../components/FestivalGallery';

const FestivalPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [festival, setFestival] = useState<Festival | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    // Find the festival by ID
    const foundFestival = festivals.find(f => f.id === id);
    
    if (foundFestival) {
      setFestival(foundFestival);
      // Update page title
      document.title = `${foundFestival.name} - Bharat Utsav`;
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!festival) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Festival Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, we couldn't find the festival you're looking for.</p>
        <Link 
          to="/calendar"
          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Browse All Festivals
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(festival.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero section with festival image */}
      <div className="relative h-80 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${festival.images[0]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative container mx-auto h-full flex flex-col justify-end px-4 pb-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{festival.name}</h1>
            
            <div className="flex flex-wrap gap-4 text-white mb-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-orange-400" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                <span>{festival.region.join(', ')}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {festival.religion.map(religion => (
                <span 
                  key={religion}
                  className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full"
                >
                  {religion}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {festival.name}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {festival.longDescription}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Historical Context</h3>
              <p className="text-gray-700 leading-relaxed">
                {festival.historicalContext}
              </p>
            </section>
            
            {/* Traditions */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Traditions & Customs</h2>
              <div className="space-y-4">
                {festival.traditions.map((tradition, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{tradition}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Gallery */}
            {festival.images.length > 0 && (
              <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <FestivalGallery images={festival.images} title={festival.name} />
              </section>
            )}
            
            {/* Video */}
            {festival.videoUrl && (
              <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{festival.name} in Action</h2>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={festival.videoUrl}
                    title={`${festival.name} video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </section>
            )}
          </div>
          
          <div className="lg:col-span-1">
            {/* Festival foods */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <Utensils className="w-5 h-5 text-orange-500 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Traditional Foods</h2>
              </div>
              
              <div className="space-y-4">
                {festival.foods.map((food, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="aspect-video mb-3 overflow-hidden rounded-lg">
                      <img 
                        src={food.imageUrl} 
                        alt={food.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{food.name}</h3>
                    <p className="text-sm text-gray-600">{food.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Related info */}
            <section className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-md p-6 text-white">
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 mr-2" />
                <h2 className="text-xl font-bold">Learn More</h2>
              </div>
              
              <p className="mb-4 text-purple-100">
                Interested in learning more about the rich cultural traditions behind {festival.name}?
              </p>
              
              <Link
                to="/about"
                className="inline-block w-full py-2 px-4 bg-white text-purple-700 rounded-md text-center font-medium hover:bg-purple-100 transition-colors"
              >
                About Our Project
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalPage;