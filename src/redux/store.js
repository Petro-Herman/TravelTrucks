import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import campersReducer from './campersSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});

export default store;
