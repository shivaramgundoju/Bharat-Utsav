import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { festivals } from '../data/festivals';
import { Festival, Region } from '../types';
import FestivalCard from '../components/FestivalCard';

const RegionPage: React.FC = () => {
  const { region } = useParams<{ region: string }>();
  const [regionFestivals, setRegionFestivals] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Convert URL parameter to match data format
    const formattedRegion = region?.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') as Region;
    
    // Filter festivals by region
    const filtered = festivals.filter(festival => 
      festival.region.includes(formattedRegion)
    );
    setRegionFestivals(filtered);
    setLoading(false);
  }, [region]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  const regionName = region?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Festivals in {regionName}
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Discover the vibrant celebrations and cultural traditions unique to {regionName}.
        </p>

        {regionFestivals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No festivals found for this region.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionFestivals.map(festival => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionPage; 