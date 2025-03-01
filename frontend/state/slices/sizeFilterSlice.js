import { createSlice } from '@reduxjs/toolkit';

const initialState = 'All';

const sizeFilterSlice = createSlice({
  name: 'sizeFilter',
  initialState,
  reducers: {
    setSizeFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSizeFilter } = sizeFilterSlice.actions;

export default sizeFilterSlice.reducer;