import { createSlice } from "@reduxjs/toolkit";

const initialState = { size: "All" }; // Default filter state

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSizeFilter: (state, action) => {
      state.size = action.payload; // Update filter state
    },
  },
});

export const { setSizeFilter } = filterSlice.actions;
export default filterSlice.reducer;
