import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import sizeFilterReducer from './slices/sizeFilterSlice';
import formReducer from './slices/formSlice';

// Create a fresh store instance function
const createStore = () => configureStore({
  reducer: {
    orders: ordersReducer,
    sizeFilter: sizeFilterReducer,
    form: formReducer,
  },
});

// Export the store instance and reset function
export const resetStore = () => createStore();
export default createStore();