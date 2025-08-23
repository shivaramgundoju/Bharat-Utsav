import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Festival, Region, Religion } from '../types';
import { festivals } from '../data/festivals';
import FestivalCard from './FestivalCard';

const SearchFestivals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedReligions, setSelectedReligions] = useState<Religion[]>([]);
  const [filteredFestivals, setFilteredFestivals] = useState<Festival[]>(festivals);
  const [showFilters, setShowFilters] = useState(false);

  const regions: Region[] = ['North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India', 'Pan India'];
  const religions: Religion[] = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Jain', 'Buddhist', 'Secular'];

  useEffect(() => {
    const filtered = festivals.filter(festival => {
      // Filter by search term
      const matchesSearch = 
        searchTerm === '' || 
        festival.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        festival.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by region if selected
      const matchesRegion = 
        selectedRegions.length === 0 || 
        festival.region.some(region => selectedRegions.includes(region));
      
      // Filter by religion if selected
      const matchesReligion = 
        selectedReligions.length === 0 || 
        festival.religion.some(religion => selectedReligions.includes(religion));
      
      return matchesSearch && matchesRegion && matchesReligion;
    });
    
    setFilteredFestivals(filtered);
  }, [searchTerm, selectedRegions, selectedReligions]);

  const toggleRegion = (region: Region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter(r => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const toggleReligion = (religion: Religion) => {
    if (selectedReligions.includes(religion)) {
      setSelectedReligions(selectedReligions.filter(r => r !== religion));
    } else {
      setSelectedReligions([...selectedReligions, religion]);
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedRegions([]);
    setSelectedReligions([]);
    setShowFilters(false);
  };

  return (
    <div className="w-full">
      {/* Search bar */}
      <div className="relative mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for festivals..."
            className="w-full py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
              showFilters || selectedRegions.length > 0 || selectedReligions.length > 0
                ? 'text-orange-500'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Filter size={18} />
          </button>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Region:</h3>
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <button
                    key={region}
                    onClick={() => toggleRegion(region)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedRegions.includes(region)
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Religion:</h3>
              <div className="flex flex-wrap gap-2">
                {religions.map(religion => (
                  <button
                    key={religion}
                    onClick={() => toggleReligion(religion)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedReligions.includes(religion)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {religion}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={resetFilters}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Results */}
      <div className="space-y-4">
        {/* Filter chips */}
        {(selectedRegions.length > 0 || selectedReligions.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedRegions.map(region => (
              <div 
                key={region}
                className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full flex items-center"
              >
                <span>{region}</span>
                <button 
                  onClick={() => toggleRegion(region)}
                  className="ml-1 text-orange-800 hover:text-orange-900"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            
            {selectedReligions.map(religion => (
              <div 
                key={religion}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full flex items-center"
              >
                <span>{religion}</span>
                <button 
                  onClick={() => toggleReligion(religion)}
                  className="ml-1 text-purple-800 hover:text-purple-900"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
        
        {filteredFestivals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFestivals.map(festival => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No festivals found matching your search criteria.</p>
            <button
              onClick={resetFilters}
              className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFestivals;