import React from 'react';
import { Sparkles, Lightbulb, Users, Globe } from 'lucide-react';
import AIRecommendation from '../components/AIRecommendation';

const AIAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bharat Utsav AI Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your personal guide to discovering the rich tapestry of Indian festivals. 
            Ask questions, get recommendations, and learn about cultural traditions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Recommendations</h3>
            <p className="text-gray-600">
              Get personalized festival suggestions based on your interests, region, and preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Insights</h3>
            <p className="text-gray-600">
              Learn about traditions, customs, and the historical significance of various festivals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Regional Diversity</h3>
            <p className="text-gray-600">
              Explore festivals from different regions of India and understand their unique celebrations.
            </p>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="max-w-4xl mx-auto flex flex-col min-h-[60vh] md:min-h-[70vh]">
          <AIRecommendation />
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Get the Best Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ask Specific Questions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "Recommend a festival in South India for October"</li>
                <li>• "What are the most colorful festivals?"</li>
                <li>• "Suggest a family-friendly festival with food traditions"</li>
                <li>• "Tell me about harvest festivals in North India"</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Explore Different Topics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Festival traditions and customs</li>
                <li>• Regional variations and celebrations</li>
                <li>• Traditional foods and recipes</li>
                <li>• Historical significance and stories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage; 