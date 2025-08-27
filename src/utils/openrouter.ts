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

// Festival date calculation utilities
export function calculateFestivalDate(festivalName: string, year: number): string {
  const festivalDateMap: { [key: string]: { month: number; day: number; type: 'fixed' | 'lunar' | 'solar' } } = {
    'diwali': { month: 10, day: 20, type: 'lunar' },
    'holi': { month: 3, day: 14, type: 'lunar' },
    // ... other festivals
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
  const baseYear = 2025;
  const yearDiff = year - baseYear;
  let dayAdjustment = festival.type === 'lunar' ? Math.floor(yearDiff * 11) : yearDiff;

  const adjustedDay = festival.day + dayAdjustment;
  const date = new Date(year, festival.month - 1, adjustedDay);
  
  return `${year}-${(festival.month).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

// Create a cached version of axios
const apiClient = axios.create({
  timeout: 8000,
  headers: {
    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
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
    Your role is to provide personalized festival recommendations based on user preferences.`;

    // Build conversation history
    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: systemPrompt }
    ];

    // Add current user prompt
    messages.push({ role: 'user', content: request.userPrompt });

    const response = await apiClient.post(OPENROUTER_API_URL, {
      model: 'openai/gpt-3.5-turbo',
      messages,
      max_tokens: 400,
      temperature: 0.7
    });

    if (!response.data?.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenRouter API');
    }

    return {
      recommendation: response.data.choices[0].message.content
    };
  } catch (error: any) {
    console.error('OpenRouter API Error:', error);
    if (error.response) {
      console.error('Error details:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
    return {
      recommendation: 'An error occurred while fetching the recommendation.'
    };
  }
}
