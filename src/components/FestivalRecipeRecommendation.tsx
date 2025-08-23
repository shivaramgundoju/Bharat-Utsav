import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { ChefHat, Loader2, Sparkles } from 'lucide-react';
import { getAIRecommendation } from '../utils/openrouter';

interface RecipeRecommendationProps {
  festivalName?: string;
  onClose: () => void;
}

const FestivalRecipeRecommendation: React.FC<RecipeRecommendationProps> = ({ festivalName, onClose }) => {
  const [recipes, setRecipes] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [festival, setFestival] = useState(festivalName || '');

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Memoize the recipe prompt to avoid recreating on every render
  const createRecipePrompt = useCallback((festivalName: string) => {
    return `Recommend traditional recipes and sweets for ${festivalName} festival. Include:
    1. Main dishes and sweets
    2. Step-by-step cooking instructions
    3. Regional variations
    4. Cultural significance of the dishes
    5. Tips for preparation
    
    Make it detailed and easy to follow.`;
  }, []);

  const getRecipeRecommendations = useCallback(async (targetFestival?: string) => {
    const festivalToUse = targetFestival || festival;
    
    if (!festivalToUse.trim()) {
      alert('Please enter a festival name');
      return;
    }

    setIsLoading(true);
    setRecipes(''); // Clear previous results
    
    try {
      const response = await getAIRecommendation({
        userPrompt: createRecipePrompt(festivalToUse)
      });

      if (response.error) {
        console.warn('Recipe Recommendation Error:', response.error);
        setRecipes(`Error: ${response.error}. Please try again.`);
      } else {
        setRecipes(response.recommendation);
      }
    } catch (error) {
      console.error('Unexpected error in Recipe Recommendation:', error);
      setRecipes('Sorry, I\'m having trouble getting recipe recommendations right now. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [festival, createRecipePrompt]);

  const getRecipeRecommendationsForFestival = useCallback(async (festivalName: string) => {
    await getRecipeRecommendations(festivalName);
  }, [getRecipeRecommendations]);

  // Memoize popular festivals to avoid recreating array
  const popularFestivals = useMemo(() => 
    ['Diwali', 'Holi', 'Raksha Bandhan', 'Ganesh Chaturthi', 'Navratri', 'Eid'], 
    []
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChefHat className="w-6 h-6" />
              <div>
                <h2 className="text-xl font-bold">Festival Recipe Recommendations</h2>
                <p className="text-orange-100 text-sm">Discover traditional festival dishes</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-orange-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Festival Name
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={festival}
                onChange={(e) => setFestival(e.target.value)}
                placeholder="e.g., Diwali, Holi, Raksha Bandhan"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={() => getRecipeRecommendations()}
                disabled={!festival.trim() || isLoading}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                <span>Get Recipes</span>
              </button>
            </div>
          </div>

          {/* Recipe Results */}
          {recipes && (
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Traditional Recipes for {festival}
              </h3>
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">{recipes}</p>
              </div>
            </div>
          )}

          {/* Quick Festival Suggestions */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">Popular festivals for recipes:</p>
            <div className="flex flex-wrap gap-2">
              {popularFestivals.map((fest) => (
                <button
                  key={fest}
                  onClick={() => {
                    setFestival(fest);
                    getRecipeRecommendationsForFestival(fest);
                  }}
                  disabled={isLoading}
                  className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-200 transition-colors disabled:opacity-50"
                >
                  {fest}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalRecipeRecommendation; 