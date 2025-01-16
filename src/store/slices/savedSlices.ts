import { SavedImage } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SavedImagesState {
  saved: SavedImage[];
}

const initialState: SavedImagesState = {
  saved: [],
};

const savedImagesSlice = createSlice({
  name: 'savedImages',
  initialState,
  reducers: {
    saveImage: (state, action: PayloadAction<SavedImage>) => {
      if (!state.saved.some((img) => img.id === action.payload.id)) {
        state.saved.push(action.payload);
      }
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.saved = state.saved.filter((img) => img.id !== action.payload);
    },
  },
});

export const { saveImage, removeImage } = savedImagesSlice.actions;

export default savedImagesSlice.reducer;
