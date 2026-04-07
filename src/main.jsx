import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import '@/styles/zutto-theme.css';
import App from '@/app';

// Force new build hash for deployment
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
