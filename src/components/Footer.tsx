import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-4">Bharat Utsav</h3>
            <p className="text-gray-300 mb-4">
              Celebrating the rich cultural heritage and diverse festivals of India through 
              an interactive and educational platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Festival Calendar
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Search Festivals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-4">Festivals by Region</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/region/north-india" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  North India
                </Link>
              </li>
              <li>
                <Link to="/region/south-india" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  South India
                </Link>
              </li>
              <li>
                <Link to="/region/east-india" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  East India
                </Link>
              </li>
              <li>
                <Link to="/region/west-india" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  West India
                </Link>
              </li>
              <li>
                <Link to="/region/central-india" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Central India
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-orange-500" />
                <span className="text-gray-300">Cultural Heritage Centre, Hyderabad, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-orange-500" />
                <a href="mailto:info@bharatutsav.org" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  info@bharatutsav.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-orange-500" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  +91 98XXX XXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Bharat Utsav. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-orange-500 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;