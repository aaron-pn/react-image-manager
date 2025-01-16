import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './services/api';

import favoritesReducer from './slices/favoriteSlices';
import savedImagesReducer from './slices/savedSlices';
import authReducer from './slices/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
};
const persistSavedConfig = {
  key: 'savedImages',
  storage,
};
const persistAuthConfig = {
  key: 'auth',
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);
const persistedSavedImagesReducer = persistReducer(
  persistSavedConfig,
  savedImagesReducer
);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    favorites: persistedFavoritesReducer,
    savedImages: persistedSavedImagesReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
