import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { getAIRecommendation, AIRecommendationResponse } from '../utils/openrouter';

const formatAssistantReply = (response: AIRecommendationResponse) => {
  let text = response.recommendation;
  if (response.suggestedQuestions && response.suggestedQuestions.length > 0) {
    const suggestions = response.suggestedQuestions.map((q) => `- ${q}`).join('\n');
    text += `\n\nSuggested follow-ups:\n${suggestions}`;
  }
  return text;
};

// --- Main component ---
const AIRecommendation: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! I’m your Bharat Utsav AI assistant. Ask me anything about Indian festivals!', isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => scrollToBottom(), [messages]);

  const addMessage = (text: string, isUser: boolean) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), text, isUser }]);
  };

  const handleSendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    addMessage(trimmed, true);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAIRecommendation({ userPrompt: trimmed });
      addMessage(formatAssistantReply(response), false);
    } catch (error) {
      console.error('AI assistant error:', error);
      addMessage('Sorry, something unexpected happened. Please try again shortly.', false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5" />
          <h2 className="text-lg font-bold">Bharat Utsav AI Assistant</h2>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '70vh' }}>
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg text-sm ${m.isUser ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask about any festival, region, or future year..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={!input.trim() || isLoading}
          className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AIRecommendation;
