import { createSlice } from '@reduxjs/toolkit';

// Define the orders slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setPizzaHistory(state, action) {
      state.loading = false;
      state.orders = action.payload; // Set pizza history data
    },
    addPizzaOrder(state, action) {
      state.orders.push(action.payload); // Add new order to the state
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload; // Handle errors
    },
  },
});

export const { setLoading, setPizzaHistory, addPizzaOrder, setError } = ordersSlice.actions;
export default ordersSlice.reducer;
