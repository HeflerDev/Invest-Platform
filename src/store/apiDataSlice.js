import { createSlice } from '@reduxjs/toolkit';

export const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    loading: false,
    errors: null,
    data: null,
  },
  reducers: {
    swapLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    storeErrors: (state, action) => {
      state.errors = action.payload;
    },
    storeData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { swapLoadingState, storeErrors, storeData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
