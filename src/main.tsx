import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Opt-in to React Router v7 future flags

if (typeof window !== 'undefined') {
  (window as any).__APP_REACT__ = React;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Expose React version for diagnostics even if console.log is dropped
try {
  (window as any).__REACT_VERSION__ = React.version;
} catch {}
