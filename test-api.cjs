import axios from 'axios';

const testAIRecommendation = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/ai-recommendation', {
      userPrompt: 'Recommend a festival in South India'
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error during API test:', error);
  }
};

testAIRecommendation();
