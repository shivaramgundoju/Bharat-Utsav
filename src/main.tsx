import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Opt-in to React Router v7 future flags
const futureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
