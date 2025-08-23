import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, Sparkles, Loader2, GitCompare, Calendar, MapPin, Lightbulb, ChefHat, Clock, Globe } from 'lucide-react';
import { getAIRecommendation, compareFestivals, getSeasonalRecommendations, getFutureFestivalDetails, getFestivalCalendarForYear } from '../utils/openrouter';
import FestivalRecipeRecommendation from './FestivalRecipeRecommendation';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface UserPreferences {
  region?: string;
  interests: string[];
  previousQuestions: string[];
}

const AIRecommendation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Bharat Utsav AI assistant. I can help you discover amazing Indian festivals based on your interests. What kind of festival are you looking for? I can also provide details for future years beyond 2025!',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    interests: [],
    previousQuestions: []
  });
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const shouldAutoScroll = useRef(true);
  const lastMessageCount = useRef(1);
  const isUserScrolling = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const scrollToBottom = useCallback((smooth = true) => {
    if (messagesEndRef.current && shouldAutoScroll.current && !isUserScrolling.current) {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ 
          behavior: smooth ? 'smooth' : 'auto',
          block: 'end'
        });
      }, 100);
    }
  }, []);

  // Check if user has scrolled up manually
  const handleScroll = useCallback(() => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 20; // Increased threshold
      shouldAutoScroll.current = isAtBottom;
      
      // If user is scrolling, mark as user scrolling
      if (!isAtBottom) {
        isUserScrolling.current = true;
        // Reset after a delay
        setTimeout(() => {
          isUserScrolling.current = false;
        }, 2000); // Increased delay
      }
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only scroll when new messages are added (not on initial load or button clicks)
    if (messages.length > lastMessageCount.current) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        scrollToBottom();
      }, 150); // Increased delay for better reliability
      lastMessageCount.current = messages.length;
    }
  }, [messages, scrollToBottom]);

  const addMessage = useCallback((text: string, isUser: boolean) => {
    if (!text || typeof text !== 'string') {
      console.warn('Invalid message text:', text);
      return;
    }
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);

    // Update conversation history for AI context
    if (isUser) {
      setConversationHistory(prev => [...prev, { role: 'user', content: text.trim() }]);
    } else {
      setConversationHistory(prev => [...prev, { role: 'assistant', content: text.trim() }]);
    }
  }, []);

  const updateUserPreferences = useCallback((question: string) => {
    // Extract potential interests from user questions
    const interests = userPreferences.interests;
    const newInterests = [...interests];
    
    // Simple keyword extraction for interests
    const keywords = ['south india', 'north india', 'food', 'family', 'colorful', 'religious', 'harvest', 'future', '2026', '2027', '2028', '2029', '2030'];
    keywords.forEach(keyword => {
      if (question.toLowerCase().includes(keyword) && !newInterests.includes(keyword)) {
        newInterests.push(keyword);
      }
    });

    setUserPreferences(prev => ({
      ...prev,
      interests: newInterests,
      previousQuestions: [...prev.previousQuestions, question]
    }));
  }, [userPreferences.interests]);

  const handleSendMessage = useCallback(async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    setInput('');
    addMessage(trimmedInput, true);
    updateUserPreferences(trimmedInput);
    setIsLoading(true);

    try {
      const response = await getAIRecommendation({ 
        userPrompt: trimmedInput,
        conversationHistory: conversationHistory.slice(-10), // Keep last 10 messages
        userPreferences: {
          region: userPreferences.region,
          interests: userPreferences.interests,
          previousQuestions: userPreferences.previousQuestions
        }
      });
      
      if (response.error) {
        console.warn('AI Recommendation Error:', response.error);
      }
      addMessage(response.recommendation, false);
    } catch (error) {
      console.error('Unexpected error in AI Recommendation:', error);
      addMessage('Sorry, I\'m having trouble connecting right now. Please try again.', false);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, addMessage, updateUserPreferences, conversationHistory, userPreferences]);

  const handleQuickQuestion = useCallback(async (question: string) => {
    setInput('');
    addMessage(question, true);
    updateUserPreferences(question);
    setIsLoading(true);

    try {
      const response = await getAIRecommendation({ 
        userPrompt: question,
        conversationHistory: conversationHistory.slice(-10),
        userPreferences: {
          region: userPreferences.region,
          interests: userPreferences.interests,
          previousQuestions: userPreferences.previousQuestions
        }
      });
      
      if (response.error) {
        console.warn('AI Recommendation Error:', response.error);
      }
      addMessage(response.recommendation, false);
    } catch (error) {
      console.error('Unexpected error in AI Recommendation:', error);
      addMessage('Sorry, I\'m having trouble connecting right now. Please try again.', false);
    } finally {
      setIsLoading(false);
    }
  }, [addMessage, updateUserPreferences, conversationHistory, userPreferences]);

  const handleFestivalComparison = useCallback(async () => {
    const festival1 = prompt('Enter first festival name:');
    const festival2 = prompt('Enter second festival name:');
    
    if (!festival1 || !festival2) return;
    
    const question = `Compare ${festival1} and ${festival2}`;
    addMessage(question, true);
    updateUserPreferences(question);
    setIsLoading(true);

    try {
      const response = await compareFestivals({ festival1, festival2 });
      if (response.error) {
        console.warn('Festival Comparison Error:', response.error);
      }
      addMessage(response.recommendation, false);
    } catch (error) {
      console.error('Unexpected error in Festival Comparison:', error);
      addMessage('Sorry, I\'m having trouble comparing festivals right now. Please try again.', false);
    } finally {
      setIsLoading(false);
    }
  }, [addMessage, updateUserPreferences]);

  const handleSeasonalRecommendations = useCallback(async () => {
    const currentMonth = new Date().getMonth();
    const question = `Recommend festivals for ${new Date().toLocaleString('default', { month: 'long' })}`;
    
    addMessage(question, true);
    updateUserPreferences(question);
    setIsLoading(true);

    try {
      const response = await getSeasonalRecommendations({ 
        month: currentMonth,
        region: userPreferences.region,
        interests: userPreferences.interests
      });
      
      if (response.error) {
        console.warn('Seasonal Recommendations Error:', response.error);
      }
      addMessage(response.recommendation, false);
    } catch (error) {
      console.error('Unexpected error in Seasonal Recommendations:', error);
      addMessage('Sorry, I\'m having trouble getting seasonal recommendations right now. Please try again.', false);
    } finally {
      setIsLoading(false);
    }
  }, [addMessage, updateUserPreferences, userPreferences]);

  const handleFutureFestivalQuery = useCallback(async () => {
    const festivalName = prompt('Enter festival name (e.g., Diwali, Holi, Christmas):');
    const year = prompt('Enter year (e.g., 2026, 2027, 2030):');
    
    if (!festivalName || !year) return;
    
    const yearNum = parseInt(year);
    if (isNaN(yearNum) || yearNum < 2025) {
      addMessage('Please enter a valid year 2025 or later.', false);
      return;
    }
    
    const question = `Tell me about ${festivalName} festival in ${year}`;
    addMessage(question, true);
    updateUserPreferences(question);
    setIsLoading(true);

    try {
      const response = await getFutureFestivalDetails({ 
        festivalName, 
        year: yearNum,
        includeHistoricalContext: true,
        includeRegionalVariations: true
      });
      
      if (response.error) {
        console.warn('Future Festival Query Error:', response.error);
      }
      addMessage(response.recommendation, false);
    } catch (error) {
      console.error('Unexpected error in Future Festival Query:', error);
      addMessage('Sorry, I\'m having trouble getting future festival details right now. Please try again.', false);
    } finally {
      setIsLoading(false);
    }
  }, [addMessage, updateUserPreferences]);

  const handleYearCalendar = useCallback(async () => {
    const year = prompt('Enter year for festival calendar (e.g., 2026, 2027, 2030):');
    
    if (!year) return;
    
    const yearNum = parseInt(year);
    if (isNaN(yearNum) || yearNum < 2025) {
      addMessage('Please enter a valid year 2025 or later.', false);
      return;
    }
    
    const question = `Show me the festival calendar for ${year}`;
    addMessage(question, true);
    updateUserPreferences(question);
    setIsLoading(true);

    try {
      const response = await getFestivalCalendarForYear(yearNum);
      
      if (response.error) {
        console.warn('Year Calendar Error:', response.error);
      }
      addMessage(response.recommendation, false);
    } catch (error) {
      console.error('Unexpected error in Year Calendar:', error);
      addMessage('Sorry, I\'m having trouble getting the festival calendar right now. Please try again.', false);
    } finally {
      setIsLoading(false);
    }
  }, [addMessage, updateUserPreferences]);

  const quickQuestions = [
    'Recommend a festival in South India',
    'What are the most colorful festivals?',
    'Suggest a family-friendly festival',
    'Tell me about harvest festivals',
    'Diwali in 2026',
    'Holi in 2027',
    'Festival calendar for 2030'
  ];

  const advancedFeatures = [
    { icon: GitCompare, label: 'Compare Festivals', action: handleFestivalComparison },
    { icon: Calendar, label: 'Seasonal Recommendations', action: handleSeasonalRecommendations },
    { icon: Clock, label: 'Future Festivals', action: handleFutureFestivalQuery },
    { icon: Globe, label: 'Year Calendar', action: handleYearCalendar },
    { icon: ChefHat, label: 'Festival Recipes', action: () => setShowRecipeModal(true) },
    { icon: MapPin, label: 'Regional Festivals', action: () => handleQuickQuestion('Tell me about regional festival variations') },
    { icon: Lightbulb, label: 'Festival Trivia', action: () => handleQuickQuestion('Share some interesting festival facts') }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-lg flex-shrink-0">
        <div className="flex items-center space-x-3">
          <Sparkles className="w-6 h-6" />
          <div>
            <h2 className="text-xl font-bold">Bharat Utsav AI Assistant</h2>
            <p className="text-orange-100 text-sm">Your personal festival guide - Now with future year support!</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 scroll-smooth ai-messages-container"
        style={{ 
          maxHeight: 'calc(100vh - 400px)',
          minHeight: '300px'
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isUser
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap break-words ai-message-text">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm ai-message-text">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Advanced Features */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <p className="text-sm text-gray-600 mb-3 font-medium">Advanced Features:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          {advancedFeatures.map((feature, index) => (
            <button
              key={index}
              onClick={feature.action}
              disabled={isLoading}
              className="flex items-center space-x-2 bg-orange-50 text-orange-700 px-3 py-2 rounded-md hover:bg-orange-100 transition-colors disabled:opacity-50 text-xs"
            >
              <feature.icon className="w-4 h-4" />
              <span>{feature.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              disabled={isLoading}
              className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-200 transition-colors disabled:opacity-50"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about festivals, future years, or recommendations..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recipe Modal */}
      {showRecipeModal && (
        <FestivalRecipeRecommendation
          onClose={() => setShowRecipeModal(false)}
        />
      )}
    </div>
  );
};

export default AIRecommendation; 