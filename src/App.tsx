import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FestivalPage = lazy(() => import('./pages/FestivalPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const RegionPage = lazy(() => import('./pages/RegionPage'));
const AIAssistantPage = lazy(() => import('./pages/AIAssistantPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/festival/:id" element={<FestivalPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/region/:region" element={<RegionPage />} />
                <Route path="/ai-assistant" element={<AIAssistantPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
          <PerformanceMonitor />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;