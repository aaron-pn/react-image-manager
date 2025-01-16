import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteImage {
  id: string;
  title: string;
  image: string;
}

interface FavoritesState {
  favorites: FavoriteImage[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteImage>) => {
      if (!state.favorites.some((fav) => fav.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
