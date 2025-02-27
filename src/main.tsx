import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CookiesProvider } from 'react-cookie';
import './App.css';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from './components/ui/toaster.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <Toaster />
        </PersistGate>
      </Provider>
    </CookiesProvider>
  </StrictMode>
);
