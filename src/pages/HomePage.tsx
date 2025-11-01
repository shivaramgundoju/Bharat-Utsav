import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Search, Sparkles } from 'lucide-react';
import FestivalCard from '../components/FestivalCard';
import { festivals } from '../data/festivals';
import { Festival } from '../types';

const HomePage: React.FC = () => {
  const [upcomingFestivals, setUpcomingFestivals] = useState<Festival[]>([]);
  const [featuredFestival, setFeaturedFestival] = useState<Festival | null>(null);
  
  useEffect(() => {
    // Get today's date
    const today = new Date();
    
    // Sort festivals by date
    const sortedFestivals = [...festivals].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    
    // Get upcoming festivals (dates after today)
    const upcoming = sortedFestivals.filter(festival => {
      const festivalDate = new Date(festival.date);
      return festivalDate >= today;
    }).slice(0, 3);
    
    setUpcomingFestivals(upcoming);
    
    // Set a featured festival (randomly select one for now)
    const randomIndex = Math.floor(Math.random() * festivals.length);
    setFeaturedFestival(festivals[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative h-screen">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://imgeng.jagran.com/images/2023/dec/hindu-calendar-2024-festivals1704036022875.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Discover India's Vibrant <span className="text-orange-500">Festivals</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Explore the rich cultural heritage and diverse celebrations that make
            India's festivals a unique tapestry of tradition, color, and joy.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/calendar" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Explore Festival Calendar</span>
            </Link>
            <Link 
              to="/search" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Search Festivals</span>
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="text-white mb-2">Scroll to Explore</div>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scrolldot"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured festival section */}
      {featuredFestival && (
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="border-b-4 border-orange-500 pb-2">Featured Festival</span>
            </h2>
            
            <FestivalCard festival={featuredFestival} featured={true} />
          </div>
        </section>
      )}
      
      {/* Upcoming festivals section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            <span className="border-b-4 border-orange-500 pb-2">Upcoming Festivals</span>
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Mark your calendar for these upcoming celebrations and immerse yourself in
            India's rich cultural traditions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFestivals.map(festival => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/calendar"
              className="inline-flex items-center bg-orange-100 text-orange-700 hover:bg-orange-200 px-6 py-3 rounded-md transition-colors font-medium"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View All Festivals
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Bharat Utsav?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Calendar</h3>
              <p className="text-gray-200">
                Explore festivals by date, region, and religion with our interactive
                calendar that helps you discover celebrations throughout the year.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Insights</h3>
              <p className="text-gray-200">
                Dive deep into the historical context, regional variations, and
                traditional practices that make each festival uniquely special.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Highlights</h3>
              <p className="text-gray-200">
                Discover handpicked festivals, traditions, and stories that showcase
                the diversity and vibrancy of celebrations across India.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Cultural Journey Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore the rich tapestry of Indian celebrations, from the Festival of Lights
            to the vibrant colors of Holi, and discover the stories behind these timeless traditions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/calendar"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 transition-colors font-medium"
            >
              <Calendar className="w-5 h-5" />
              <span>Explore Festival Calendar</span>
            </Link>
            <Link 
              to="/search"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 transition-colors font-medium"
            >
              <Search className="w-5 h-5" />
              <span>Search Festivals</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;