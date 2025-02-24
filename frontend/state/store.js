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
