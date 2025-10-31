import axios from 'axios';

const testAIRecommendation = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/ai-recommendation', {
      userPrompt: 'Recommend a festival in South India',
      conversationHistory: [],
      userPreferences: {
        region: 'South India',
        interests: [],
        previousQuestions: []
      }
    });
    console.log('AI Recommendation Response:', response.data);
  } catch (error) {
    console.error('Error fetching AI recommendation:', error);
  }
};

testAIRecommendation();
