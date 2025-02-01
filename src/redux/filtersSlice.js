// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   features: [],
// };

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState,
//   reducers: {
//     toggleFeature: (state, action) => {
//       const feature = action.payload;
//       if (state.features.includes(feature)) {
//         state.features = state.features.filter(item => item !== feature);
//       } else {
//         state.features.push(feature);
//       }
//     },
//     resetFilters: state => {
//       state.features = [];
//     },
//   },
// });

// export const { toggleFeature, resetFilters } = filtersSlice.actions;
// export default filtersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  features: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFeature: (state, action) => {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter(item => item !== feature);
      } else {
        state.features.push(feature);
      }
    },
  },
});

export const { toggleFeature } = filtersSlice.actions;
export default filtersSlice.reducer;
