// src/server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';

// ✅ Local fallback recommendation logic
function generateLocalRecommendation(userPrompt = '') {
  const p = String(userPrompt || '').toLowerCase();
  const yearMatch = p.match(/\b(20[2-9][0-9])\b/);
  const year = yearMatch ? yearMatch[1] : null;

  const picks = new Set();
  const add = (arr) => arr.forEach((x) => picks.add(x));

  if (p.includes('south')) add(['Pongal', 'Onam', 'Ugadi']);
  if (p.includes('north')) add(['Holi', 'Diwali', 'Navratri']);
  if (p.includes('harvest')) add(['Pongal', 'Onam', 'Makar Sankranti']);
  if (p.includes('color')) add(['Holi', 'Navratri']);
  if (p.includes('family')) add(['Raksha Bandhan', 'Diwali', 'Christmas']);
  if (p.includes('religious')) add(['Diwali', 'Eid al-Fitr', 'Christmas']);
  if (p.includes('food') || p.includes('recipe'))
    add(['Diwali (sweets)', 'Onam (Onasadya)', 'Eid (Sheer Khurma)']);

  const nameMatch = p.match(
    /diwali|holi|eid|christmas|onam|pongal|ugadi|navratri|raksha\s*bandhan|sankranti/i
  );

  if (p.includes('calendar') && year) {
    return {
      recommendation: `📅 Festival calendar for ${year}:\n
- Makar Sankranti/Pongal: Mid January
- Holi: March
- Eid al-Fitr: March/April (depends on lunar cycle)
- Onam: August/September
- Navratri: September/October
- Diwali: October/November

Ask "Diwali ${year}" or "Holi ${year}" for detailed traditions.`,
      suggestedQuestions: [
        `Diwali ${year} traditions`,
        `Best family festivals in ${year}`,
        `Regional festivals of ${year}`,
      ],
    };
  }

  if (year && nameMatch) {
    const fest = nameMatch[0];
    return {
      recommendation: `✨ ${fest} ${year} Highlights:
- Dates vary by lunar calendar and region.
- Rituals, foods, and celebrations differ by state.
- Travel tip: book early during festival peaks.
Would you like regional customs or recipes for ${fest}?`,
      suggestedQuestions: [
        `Recipes for ${fest}`,
        `Regional customs of ${fest}`,
        `Best destinations to celebrate ${fest}`,
      ],
    };
  }

  if (nameMatch && !year) {
    const fest = nameMatch[0];
    return {
      recommendation: `🌟 ${fest} is a popular festival celebrated across India.
Ask "Show ${fest} 2027 calendar" or "Compare ${fest} and Pongal" for more.`,
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
      recommendation: `Based on your interests, here are some recommendations:\n${list
        .map((x) => `- ${x}`)
        .join('\n')}\nAsk for a year (e.g., "Diwali 2027") for detailed info.`,
      suggestedQuestions: [
        'Compare Diwali and Pongal',
        'Show festival calendar for 2027',
        'Suggest family-friendly festivals',
      ],
    };
  }

  return {
    recommendation: `Try prompts like:
- "Recommend a festival in South India"
- "Festival calendar for 2027"
- "Compare Diwali and Pongal"`,
    suggestedQuestions: [
      'Recommend a festival in South India',
      'Festival calendar for 2027',
      'Compare Diwali and Pongal',
    ],
  };
}

// ✅ AI backend handler — calls OpenRouter (if key exists) or uses local logic
async function getServerAIRecommendation({ userPrompt }) {
  const apiKey =
    process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;

  // No API key? → fallback to local recommendations
  if (!apiKey) {
    return generateLocalRecommendation(userPrompt);
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are an Indian festival guide AI that suggests festivals, traditions, and travel plans.',
          },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const text =
      response.data?.choices?.[0]?.message?.content ||
      'No recommendation available.';
    return { recommendation: text };
  } catch (err) {
    console.error('OpenRouter request failed:', err?.response?.data || err);
    return {
      recommendation:
        '⚠️ AI service temporarily unavailable. Showing local recommendations instead.',
    };
  }
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ✅ AI recommendation route
app.post('/api/ai-recommendation', async (req, res) => {
  try {
    const { userPrompt } = req.body || {};
    if (!userPrompt)
      return res.status(400).json({ error: 'Missing userPrompt' });

    const result = await getServerAIRecommendation({ userPrompt });
    res.json(result);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
