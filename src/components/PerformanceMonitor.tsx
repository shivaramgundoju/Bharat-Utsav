import React, { useEffect, useState } from 'react';
import { Clock, Zap, Activity } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  buildTime?: number;
  apiResponseTime?: number;
  bundleSize?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Show performance monitor in development
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }

    // Track API response times
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const start = performance.now();
      try {
        const response = await originalFetch(...args);
        const end = performance.now();
        setMetrics(prev => ({ 
          ...prev, 
          apiResponseTime: end - start 
        }));
        return response;
      } catch (error) {
        const end = performance.now();
        setMetrics(prev => ({ 
          ...prev, 
          apiResponseTime: end - start 
        }));
        throw error;
      }
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-center space-x-2 mb-2">
        <Activity className="w-4 h-4 text-blue-500" />
        <span className="text-sm font-medium text-gray-700">Performance</span>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex items-center space-x-2">
          <Clock className="w-3 h-3 text-green-500" />
          <span>Load: {metrics.loadTime.toFixed(0)}ms</span>
        </div>
        
        {metrics.apiResponseTime && (
          <div className="flex items-center space-x-2">
            <Zap className="w-3 h-3 text-orange-500" />
            <span>API: {metrics.apiResponseTime.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.bundleSize && (
          <div className="flex items-center space-x-2">
            <Activity className="w-3 h-3 text-purple-500" />
            <span>Bundle: {(metrics.bundleSize / 1024).toFixed(1)}KB</span>
          </div>
        )}
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
      >
        ×
      </button>
    </div>
  );
};

export default PerformanceMonitor; 