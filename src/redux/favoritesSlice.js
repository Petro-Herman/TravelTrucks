import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: JSON.parse(localStorage.getItem('favorites')) || [],
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.some(camper => camper.id === action.payload.id)) {
        state.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      const newState = state.filter(camper => camper.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
