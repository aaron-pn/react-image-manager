import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SavedImage {
  id: string;
  title: string;
  image: string;
}

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
        state.saved.push(action.payload); // Agregar imagen si no está ya guardada
      }
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.saved = state.saved.filter((img) => img.id !== action.payload); // Remover por id
    },
  },
});

export const { saveImage, removeImage } = savedImagesSlice.actions;

export default savedImagesSlice.reducer;
