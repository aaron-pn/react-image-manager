import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './services/api';

import favoritesReducer from './services/favoriteSlices';
import savedImagesReducer from './services/savedSlices';

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
const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);
const persistedSavedImagesReducer = persistReducer(
  persistSavedConfig,
  savedImagesReducer
);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    favorites: persistedFavoritesReducer,
    savedImages: persistedSavedImagesReducer,
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
