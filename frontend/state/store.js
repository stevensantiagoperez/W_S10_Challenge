<<<<<<< HEAD
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
=======
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    orders: orderReducer,
    filter: filterReducer,
  },
});

export default store;
>>>>>>> 9bc8fd3b8337318cd1127ddf5f2aee2aada96bd5
