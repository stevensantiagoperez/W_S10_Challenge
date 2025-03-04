import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import sizeFilterReducer from './slices/sizeFilterSlice';
import formReducer from './slices/formSlice';

// Single store configuration
const createStore = () => configureStore({
  reducer: {
    orders: ordersReducer,
    sizeFilter: sizeFilterReducer,
    form: formReducer,
  },
});

// Export functions
export const resetStore = () => createStore();
export default createStore(); 