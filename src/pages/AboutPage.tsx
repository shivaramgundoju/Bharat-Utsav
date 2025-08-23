import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Globe, MessageSquare } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-purple-700 to-purple-900 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Bharat Utsav</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Bridging the gap between India's cultural heritage and modern digital audiences
            through an educational and interactive platform.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Mission */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bharat Utsav was created to address the growing disconnect between younger generations
              and India's rich cultural heritage. Our mission is to provide an accessible, 
              engaging platform that educates users about Indian festivals, their historical 
              significance, and the diverse ways they are celebrated across different regions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that understanding cultural traditions creates stronger connections 
              between people and their heritage, fostering a sense of pride and preservation 
              of these timeless celebrations for future generations.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-16 bg-gray-50 py-12 rounded-xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Calendar</h3>
                <p className="text-gray-700">
                  Our dynamic calendar allows users to explore festivals by date, region, and
                  religious significance, making it easy to discover celebrations throughout the year.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Information</h3>
                <p className="text-gray-700">
                  Each festival entry includes detailed descriptions, historical context, regional
                  practices, and information about traditional foods and customs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Preservation</h3>
                <p className="text-gray-700">
                  By documenting and sharing information about traditional celebrations, we help
                  preserve India's intangible cultural heritage for future generations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Resource</h3>
                <p className="text-gray-700">
                  Bharat Utsav serves as a valuable resource for students, researchers, tourists,
                  and anyone interested in learning about India's cultural traditions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Future Plans */}
        
        
        {/* CTA */}
        <section className="bg-orange-50 rounded-xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Begin Your Cultural Journey</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Start exploring the rich tapestry of Indian festivals and celebrations. Whether you're 
            planning a visit to India, researching cultural traditions, or simply curious about 
            these vibrant celebrations, Bharat Utsav has something for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/"
              className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Explore Home Page
            </Link>
            <Link 
              to="/calendar"
              className="px-6 py-3 bg-white border border-orange-500 text-orange-600 rounded-md hover:bg-orange-50 transition-colors"
            >
              View Festival Calendar
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;