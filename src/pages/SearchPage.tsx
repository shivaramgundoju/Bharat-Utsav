import React from 'react';
import SearchFestivals from '../components/SearchFestivals';

const SearchPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Festivals
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover Indian festivals by name, region, or religious significance. 
            Use filters to narrow down your search and explore the rich cultural diversity.
          </p>
        </div>
        
        <SearchFestivals />
      </div>
    </div>
  );
};

export default SearchPage;