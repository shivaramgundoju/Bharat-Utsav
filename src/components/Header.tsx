import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Calendar, Home, Info, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
            Bharat Utsav
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors duration-300 hover:text-orange-500 flex items-center space-x-1 ${
              location.pathname === '/' 
                ? 'text-orange-500' 
                : isScrolled 
                  ? 'text-gray-900' 
                  : 'text-white'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link 
            to="/calendar" 
            className={`transition-colors duration-300 hover:text-orange-500 flex items-center space-x-1 ${
              location.pathname === '/calendar' 
                ? 'text-orange-500' 
                : isScrolled 
                  ? 'text-gray-900' 
                  : 'text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Festival Calendar</span>
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors duration-300 hover:text-orange-500 flex items-center space-x-1 ${
              location.pathname === '/about' 
                ? 'text-orange-500' 
                : isScrolled 
                  ? 'text-gray-900' 
                  : 'text-white'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link 
            to="/ai-assistant" 
            className={`transition-colors duration-300 hover:text-orange-500 flex items-center space-x-1 ${
              location.pathname === '/ai-assistant' 
                ? 'text-orange-500' 
                : isScrolled 
                  ? 'text-gray-900' 
                  : 'text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Assistant</span>
          </Link>
          <Link 
            to="/search" 
            className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-1 hover:bg-orange-600 transition-colors duration-300"
          >
            <Search className="w-4 h-4" />
            <span>Search Festivals</span>
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`py-2 px-3 rounded-md hover:bg-orange-100 transition-colors duration-300 flex items-center space-x-2 ${
                  location.pathname === '/' ? 'bg-orange-100 text-orange-600' : 'text-gray-800'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/calendar" 
                className={`py-2 px-3 rounded-md hover:bg-orange-100 transition-colors duration-300 flex items-center space-x-2 ${
                  location.pathname === '/calendar' ? 'bg-orange-100 text-orange-600' : 'text-gray-800'
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>Festival Calendar</span>
              </Link>
              <Link 
                to="/about" 
                className={`py-2 px-3 rounded-md hover:bg-orange-100 transition-colors duration-300 flex items-center space-x-2 ${
                  location.pathname === '/about' ? 'bg-orange-100 text-orange-600' : 'text-gray-800'
                }`}
              >
                <Info className="w-5 h-5" />
                <span>About</span>
              </Link>
              <Link 
                to="/ai-assistant" 
                className={`py-2 px-3 rounded-md hover:bg-orange-100 transition-colors duration-300 flex items-center space-x-2 ${
                  location.pathname === '/ai-assistant' ? 'bg-orange-100 text-orange-600' : 'text-gray-800'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                <span>AI Assistant</span>
              </Link>
              <Link 
                to="/search" 
                className="bg-orange-500 text-white py-2 px-3 rounded-md flex items-center space-x-2 hover:bg-orange-600 transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
                <span>Search Festivals</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;