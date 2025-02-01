// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import API_URL from '../Back-end/back';

// export const fetchCampers = createAsyncThunk(
//   'campers/fetchCampers',
//   async () => {
//     const response = await axios.get(API_URL);
//     return response.data;
//   }
// );

// const camperSlice = createSlice({
//   name: 'campers',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchCampers.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchCampers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default camperSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async () => {
  const response = await axios.get(
    'https://connections-api.goit.global/campers'
  );
  return response.data;
});

const initialState = {
  items: [], // 🛠 важливо: масив має бути тут
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
