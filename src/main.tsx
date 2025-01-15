import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CookiesProvider } from 'react-cookie';

import '@radix-ui/themes/styles.css';
import './App.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </StrictMode>
);
