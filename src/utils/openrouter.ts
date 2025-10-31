import axios from 'axios';

// Prefer environment-based URL when provided; otherwise use relative path (works with Vite dev proxy)
const API_BASE_URL = (import.meta as any)?.env?.VITE_API_URL ?? '';
const OPENROUTER_API_URL = `${API_BASE_URL}/api/ai-recommendation`;

// Simple cache for API responses (client-side)
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

// Axios client without auth headers (server handles secrets)
const apiClient = axios.create({
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

function generateLocalRecommendation(request: AIRecommendationRequest): AIRecommendationResponse {
  const userPrompt = String(request?.userPrompt ?? '').toLowerCase();
  const yearMatch = userPrompt.match(/\b(20[2-9][0-9])\b/);
  const year = yearMatch ? yearMatch[1] : null;

  const picks = new Set<string>();
  const add = (arr: string[]) => arr.forEach((x) => picks.add(x));

  if (userPrompt.includes('south')) add(['Pongal', 'Onam', 'Ugadi']);
  if (userPrompt.includes('north')) add(['Holi', 'Diwali', 'Navratri']);
  if (userPrompt.includes('harvest')) add(['Pongal', 'Onam', 'Makar Sankranti']);
  if (userPrompt.includes('color')) add(['Holi', 'Navratri']);
  if (userPrompt.includes('family')) add(['Raksha Bandhan', 'Diwali', 'Christmas']);
  if (userPrompt.includes('religious')) add(['Diwali', 'Eid al-Fitr', 'Christmas']);
  if (userPrompt.includes('food') || userPrompt.includes('recipe')) add(['Diwali (sweets)', 'Onam (Onasadya)', 'Eid (Sheer Khurma)']);

  const nameMatch = userPrompt.match(/diwali|holi|eid|christmas|onam|pongal|ugadi|navratri|raksha\s*bandhan|sankranti/i);

  if (userPrompt.includes('calendar') && year) {
    return {
      recommendation:
        `Here is a high-level festival calendar for ${year} (approximate dates):\n` +
        `- Makar Sankranti/Pongal: Mid January\n` +
        `- Holi: March\n` +
        `- Eid al-Fitr: Late March/April (lunar dependent)\n` +
        `- Onam: August/September\n` +
        `- Navratri/Durga Puja: September/October\n` +
        `- Diwali: October/November\n` +
        `Ask for a specific festival (e.g., "Diwali ${year}") for more details on traditions and regional variations.`,
      suggestedQuestions: [
        `Diwali ${year} traditions`,
        `Holi ${year} regional variations`,
        `Family-friendly festivals in ${year}`,
      ],
    };
  }

  if (year && nameMatch) {
    const fest = nameMatch[0];
    return {
      recommendation:
        `Here are key details for ${fest} in ${year}:\n` +
        `- Dates can vary by lunar calendar and region; check regional almanacs closer to ${year}.\n` +
        `- Traditions: rituals, food, and community events differ by state.\n` +
        `- Travel tip: book early around peak festival days.\n` +
        `Would you like recipes, regional customs, or a travel plan for ${fest} ${year}?`,
      suggestedQuestions: [
        `Recipes for ${fest}`,
        `Regional customs of ${fest}`,
        `Best places to experience ${fest} ${year}`,
      ],
    };
  }

  if (nameMatch && !year) {
    const fest = nameMatch[0];
    return {
      recommendation:
        `Great choice! ${fest} is a popular festival.\n` +
        `- Traditions: cultural rituals, foods, and local celebrations vary by state.\n` +
        `- Interested in dates for a future year? Ask "${fest} 2027" or another year.\n` +
        `- I can also compare ${fest} with similar festivals if you like.`,
      suggestedQuestions: [
        `Compare ${fest} and Pongal`,
        `Show ${fest} calendar for 2027`,
        `Share recipes for ${fest}`,
      ],
    };
  }

  if (picks.size > 0) {
    const list = Array.from(picks).slice(0, 5);
    return {
      recommendation:
        `Based on your interests, here are some recommendations:\n` +
        list.map((x) => `- ${x}`).join('\n') +
        `\nAsk for a specific year (e.g., "Diwali 2027") or region for more details.`,
      suggestedQuestions: [
        'Compare Diwali and Pongal',
        'Show festival calendar for 2027',
        'Suggest family-friendly festivals',
      ],
    };
  }

  return {
    recommendation:
      `I can recommend festivals by region, theme, or year. Try prompts like:\n` +
      `- "Recommend a festival in South India"\n` +
      `- "Compare Diwali and Pongal"\n` +
      `- "Show festival calendar for 2027"\n` +
      `Ask something specific and I'll tailor suggestions for you!`,
    suggestedQuestions: [
      'Recommend a festival in South India',
      'Compare Diwali and Pongal',
      'Show festival calendar for 2027',
    ],
  };
}

export async function getAIRecommendation(request: AIRecommendationRequest): Promise<AIRecommendationResponse> {
  const cacheKey = JSON.stringify(request);
  try {
    const cached = responseCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }

    const response = await apiClient.post(OPENROUTER_API_URL, request);
    const data: AIRecommendationResponse = {
      recommendation: response.data?.recommendation ?? 'No recommendation available.',
      suggestedQuestions: response.data?.suggestedQuestions,
    };

    if (!data.recommendation || data.recommendation === 'No recommendation available.') {
      const fallback = generateLocalRecommendation(request);
      responseCache.set(cacheKey, { data: fallback, timestamp: Date.now() });
      return fallback;
    }

    responseCache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  } catch (error: any) {
    console.error('OpenRouter API Error:', error);
    const fallback = generateLocalRecommendation(request);
    responseCache.set(cacheKey, { data: fallback, timestamp: Date.now() });
    return {
      ...fallback,
      error: error?.message || 'Request failed',
    };
  }
}
