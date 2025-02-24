import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "All",
  reducers: {
    setSizeFilter: (state, action) => action.payload,
  },
});

export const { setSizeFilter } = filterSlice.actions; // ✅ Ensure this is exported
export default filterSlice.reducer;
