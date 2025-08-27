import axios from 'axios';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

if (!OPENROUTER_API_KEY) {
  console.error('OpenRouter API key is missing. Please check your .env file.');
  throw new Error('OpenRouter API key configuration error');
}

// Simple cache for API responses
const responseCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export interface AIRecommendationRequest {
  userPrompt: string;
  context?: string;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
  userPreferences?: {
    region?: string;
    interests?: string[];
    previousQuestions?: string[];
  };
}

export interface AIRecommendationResponse {
  recommendation: string;
  error?: string;
  suggestedQuestions?: string[];
}

export interface FestivalComparisonRequest {
  festival1: string;
  festival2: string;
}

export interface SeasonalRecommendationRequest {
  month?: number;
  region?: string;
  interests?: string[];
}

export interface FutureFestivalRequest {
  festivalName: string;
  year: number;
  includeHistoricalContext?: boolean;
  includeRegionalVariations?: boolean;
}

// Festival date calculation utilities
export function calculateFestivalDate(festivalName: string, year: number): string {
  const festivalDateMap: { [key: string]: { month: number; day: number; type: 'fixed' | 'lunar' | 'solar' } } = {
    'diwali': { month: 10, day: 20, type: 'lunar' },
    'holi': { month: 3, day: 14, type: 'lunar' },
    'eid': { month: 3, day: 31, type: 'lunar' },
    'pongal': { month: 1, day: 15, type: 'solar' },
    'durga-puja': { month: 10, day: 9, type: 'lunar' },
    'ugadi': { month: 3, day: 30, type: 'lunar' },
    'onam': { month: 9, day: 5, type: 'lunar' },
    'christmas': { month: 12, day: 25, type: 'fixed' },
    'bakrid': { month: 6, day: 7, type: 'lunar' },
    'independence-day': { month: 8, day: 15, type: 'fixed' },
    'kanuma': { month: 1, day: 15, type: 'solar' },
    'mukkanuma': { month: 1, day: 16, type: 'solar' },
    'sri-rama-navami': { month: 4, day: 6, type: 'lunar' },
    'hanuman-jayanti': { month: 4, day: 12, type: 'lunar' },
    'varalakshmi-vratham': { month: 8, day: 22, type: 'lunar' },
    'vinayaka-chavithi': { month: 8, day: 27, type: 'lunar' },
    'bathukamma': { month: 9, day: 22, type: 'lunar' },
    'bonalu': { month: 7, day: 20, type: 'lunar' },
    'karthika-pournami': { month: 11, day: 12, type: 'lunar' },
    'ratha-saptami': { month: 2, day: 4, type: 'solar' },
    'dusshera': { month: 10, day: 2, type: 'lunar' },
    'naraka-chaturdashi': { month: 10, day: 20, type: 'lunar' },
    'nagula-chavithi': { month: 11, day: 3, type: 'lunar' },
    'sravana-sukravaralu': { month: 8, day: 8, type: 'lunar' },
    'polala-amavasya': { month: 1, day: 29, type: 'lunar' },
    'atla-taddi': { month: 10, day: 9, type: 'lunar' },
    'gowri-pooja': { month: 9, day: 16, type: 'lunar' },
    'makar-sankranti': { month: 1, day: 14, type: 'solar' },
    'navratri': { month: 10, day: 2, type: 'lunar' },
    'republic-day': { month: 1, day: 26, type: 'fixed' },
    'lohri': { month: 1, day: 13, type: 'solar' },
    'karva-chauth': { month: 10, day: 9, type: 'lunar' },
    'raksha-bandhan': { month: 8, day: 9, type: 'lunar' },
    'mahashivaratri': { month: 2, day: 26, type: 'lunar' },
    'good-friday': { month: 4, day: 18, type: 'lunar' },
    'chhath-puja': { month: 10, day: 28, type: 'lunar' },
    'gurpurab': { month: 11, day: 5, type: 'lunar' },
    'baisakhi': { month: 4, day: 13, type: 'solar' },
    'bengali-new-year': { month: 4, day: 15, type: 'solar' },
    'newyear': { month: 1, day: 1, type: 'fixed' }
  };

  const festival = festivalDateMap[festivalName.toLowerCase()];
  if (!festival) {
    return 'Date not available';
  }

  // For fixed dates, return the same date every year
  if (festival.type === 'fixed') {
    return `${year}-${festival.month.toString().padStart(2, '0')}-${festival.day.toString().padStart(2, '0')}`;
  }

  // For lunar and solar festivals, we'll use a simplified calculation
  // In a real implementation, you'd use proper astronomical calculations
  // For now, we'll use the base date and adjust slightly for different years
  const baseYear = 2025;
  const yearDiff = year - baseYear;
  
  // Simple adjustment: lunar festivals shift by about 11 days per year
  // Solar festivals shift by about 1 day per year
  let dayAdjustment = 0;
  if (festival.type === 'lunar') {
    dayAdjustment = Math.floor(yearDiff * 11);
  } else if (festival.type === 'solar') {
    dayAdjustment = yearDiff;
  }

  const adjustedDay = festival.day + dayAdjustment;
  const date = new Date(year, festival.month - 1, adjustedDay);
  
  return `${year}-${(festival.month).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

// Create a cached version of axios
const apiClient = axios.create({
  timeout: 8000, // Reduced timeout for faster failure detection
  headers: {
    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
    'HTTP-Referer': window.location.origin,
    'X-Title': 'Bharat Utsav AI Assistant'
  }
});

// Add request interceptor for caching
apiClient.interceptors.request.use((config) => {
  const cacheKey = JSON.stringify(config.data);
  const cached = responseCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return Promise.reject({ isCached: true, data: cached.data });
  }
  
  return config;
});

// Add response interceptor for caching
apiClient.interceptors.response.use((response) => {
  const cacheKey = JSON.stringify(response.config.data);
  responseCache.set(cacheKey, {
    data: response.data,
    timestamp: Date.now()
  });
  return response;
});

export async function getAIRecommendation(request: AIRecommendationRequest): Promise<AIRecommendationResponse> {
  try {
    const systemPrompt = `You are a helpful festival recommendation assistant for Bharat Utsav, an Indian festivals platform. 
    
    Your role is to:
    1. Provide personalized festival recommendations based on user preferences
    2. Share interesting facts about Indian festivals
    3. Suggest festivals based on region, time of year, or cultural interests
    4. Be friendly, informative, and culturally sensitive
    5. Remember user preferences and provide contextual responses
    6. Provide festival details for any year (past, present, or future)
    7. Calculate festival dates for future years and explain any variations
    
    Context about Indian festivals: India has diverse festivals across regions, religions, and seasons. 
    Major categories include harvest festivals, religious celebrations, cultural events, and seasonal observances.
    
    For future year queries, provide:
    - Calculated festival dates
    - Historical context and significance
    - Regional variations and celebrations
    - Traditional customs and rituals
    - Modern adaptations and celebrations
    
    Keep responses concise (2-3 sentences) and engaging. If the user has shown interest in specific regions or types of festivals, tailor your recommendations accordingly.`;

    // Build conversation history
    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: systemPrompt }
    ];

    // Add conversation history if available
    if (request.conversationHistory && request.conversationHistory.length > 0) {
      messages.push(...request.conversationHistory.slice(-6)); // Keep last 6 messages for context
    }

    // Add user preferences context if available
    if (request.userPreferences) {
      const preferencesContext = `User Preferences: ${request.userPreferences.region ? `Region: ${request.userPreferences.region}` : ''} ${request.userPreferences.interests ? `Interests: ${request.userPreferences.interests.join(', ')}` : ''}`;
      if (preferencesContext.trim() !== 'User Preferences:') {
        messages.push({ role: 'system' as const, content: preferencesContext });
      }
    }

    // Add current user prompt
    messages.push({ role: 'user' as const, content: request.userPrompt });

    const response = await apiClient.post(
      OPENROUTER_API_URL,
      {
        model: 'openai/gpt-3.5-turbo',
        messages,
        max_tokens: 400,
        temperature: 0.7
      }
    );

    if (!response.data?.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenRouter API');
    }

    return {
      recommendation: response.data.choices[0].message.content
    };
  } catch (error: any) {
    // Handle cached responses
    if (error.isCached) {
      const cachedData = error.data;
      if (cachedData?.choices?.[0]?.message?.content) {
        return {
          recommendation: cachedData.choices[0].message.content
        };
      }
    }

    console.error('OpenRouter API Error:', error);
    
    // Provide more specific error messages
    if (error.code === 'ECONNABORTED') {
      return {
        recommendation: 'The request timed out. Please check your internet connection and try again.',
        error: 'Timeout'
      };
    }
    
    if (error.response?.status === 401) {
      console.error('OpenRouter Authentication Failed. Please check the API key:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      });
      
      return {
        recommendation: 'Authentication error. The API key may be invalid or expired. Please check your OpenRouter account and update the API key in the .env file.',
        error: 'Auth Error'
      };
    }
    
    if (error.response?.status === 429) {
      return {
        recommendation: 'Too many requests. Please wait a moment and try again.',
        error: 'Rate Limit'
      };
    }
    
    return {
      recommendation: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.',
      error: 'API Error'
    };
  }
}

export async function getFutureFestivalDetails(request: FutureFestivalRequest): Promise<AIRecommendationResponse> {
  const calculatedDate = calculateFestivalDate(request.festivalName, request.year);
  
  const prompt = `Provide detailed information about ${request.festivalName} festival for the year ${request.year}.
  
  Date: ${calculatedDate}
  
  Include:
  1. Historical significance and cultural importance
  2. How the festival is celebrated in ${request.year}
  3. ${request.includeRegionalVariations ? 'Regional variations across different states of India' : 'Traditional celebrations and customs'}
  4. ${request.includeHistoricalContext ? 'Historical context and evolution of the festival over time' : 'Modern celebrations and adaptations'}
  5. Traditional foods, sweets, and dishes associated with the festival
  6. Special rituals and ceremonies
  7. Any unique aspects of celebrating this festival in ${request.year}
  
  Make the response engaging and informative, highlighting what makes this festival special in ${request.year}.`;

  return getAIRecommendation({ userPrompt: prompt });
}

export async function compareFestivals(request: FestivalComparisonRequest): Promise<AIRecommendationResponse> {
  const prompt = `Compare ${request.festival1} and ${request.festival2} festivals in detail. Include:
  1. Cultural significance and religious importance
  2. How they are celebrated (rituals, customs)
  3. Regional variations across India
  4. Traditional foods and sweets
  5. Historical background and legends
  6. Similarities and differences
  7. Future year considerations and date calculations
  
  Make the comparison engaging and informative.`;

  return getAIRecommendation({ userPrompt: prompt });
}

export async function getSeasonalRecommendations(request: SeasonalRecommendationRequest): Promise<AIRecommendationResponse> {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const currentMonth = request.month ?? new Date().getMonth();
  const monthName = monthNames[currentMonth];
  
  const prompt = `Recommend Indian festivals for ${monthName}${request.region ? ` in ${request.region}` : ''}${request.interests ? ` that match these interests: ${request.interests.join(', ')}` : ''}. 
  
  Include:
  - Major festivals celebrated in this month
  - Regional variations
  - Cultural significance
  - Traditional celebrations and customs
  - Future year date calculations and variations
  - Why these festivals are special`;

  return getAIRecommendation({ userPrompt: prompt });
}

export async function getFestivalRecommendation(preferences: {
  region?: string;
  month?: string;
  interest?: string;
  religion?: string;
}): Promise<AIRecommendationResponse> {
  const prompt = `Based on these preferences, recommend an Indian festival:
    ${preferences.region ? `Region: ${preferences.region}` : ''}
    ${preferences.month ? `Month: ${preferences.month}` : ''}
    ${preferences.interest ? `Interest: ${preferences.interest}` : ''}
    ${preferences.religion ? `Religion: ${preferences.religion}` : ''}
    
    Please recommend a specific festival and explain why it would be perfect for these preferences. Include future year considerations and date calculations.`;

  return getAIRecommendation({ userPrompt: prompt });
}

export async function getFestivalCalendarForYear(year: number): Promise<AIRecommendationResponse> {
  const prompt = `Create a comprehensive festival calendar for the year ${year} in India. Include:
  
  1. Major festivals month by month
  2. Regional festivals and celebrations
  3. Religious observances
  4. Harvest festivals
  5. Cultural events
  6. Date calculations and variations from previous years
  7. Special significance of festivals in ${year}
  
  Organize the information clearly by month and provide interesting facts about each festival.`;

  return getAIRecommendation({ userPrompt: prompt });
} 