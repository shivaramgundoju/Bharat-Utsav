import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FestivalCalendar from '../components/FestivalCalendar';
import OptimizedImage from '../components/OptimizedImage';
import { Festival } from '../types';

const CalendarPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  const handleSelectFestival = (festival: Festival) => {
    setSelectedFestival(festival);
  };

  const handleViewFestival = () => {
    if (selectedFestival) {
      navigate(`/festival/${selectedFestival.id}`);
    }
  };

  const handleCloseModal = () => {
    setSelectedFestival(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Festival Calendar
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant festivals of India throughout the year. Filter by region, 
            religion, or date to discover celebrations that interest you.
          </p>
        </div>
        
        <FestivalCalendar onSelectFestival={handleSelectFestival} />
      </div>
      
      {/* Festival Modal */}
      {selectedFestival && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black opacity-60" onClick={handleCloseModal}></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden">
            <div className="relative h-48">
              <OptimizedImage 
                src={selectedFestival.images[0]} 
                alt={selectedFestival.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-2xl font-bold text-white">{selectedFestival.name}</h2>
                <p className="text-gray-200">
                  {new Date(selectedFestival.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4">{selectedFestival.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Region</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFestival.region.map(region => (
                    <span 
                      key={region}
                      className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Religion</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFestival.religion.map(religion => (
                    <span 
                      key={religion}
                      className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                    >
                      {religion}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleViewFestival}
                  className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;