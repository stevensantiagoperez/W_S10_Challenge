import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchOrders } from './ordersSlice';

const initialState = {
  fullName: '',
  size: '',
  toppings: [],
  isSubmitting: false,
  error: null,
};

export const submitOrder = createAsyncThunk(
  'form/submitOrder',
  async (_, { getState, dispatch }) => {
    const { form } = getState();
    const payload = {
      fullName: form.fullName,
      size: form.size,
      toppings: form.toppings.map(t => String(t)),
    };
    try {
      await axios.post('http://localhost:9009/api/pizza/order', payload);
      dispatch(resetForm());
      dispatch(fetchOrders());
      return null;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('An error occurred while submitting the order.');
      }
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
      state.error = null;
    },
    setSize: (state, action) => {
      state.size = action.payload;
      state.error = null;
    },
    toggleTopping: (state, action) => {
      const topping = action.payload;
      if (state.toppings.includes(topping)) {
        state.toppings = state.toppings.filter(t => t !== topping);
      } else {
        state.toppings.push(topping);
      }
      state.error = null;
    },
    resetForm: (state) => {
      state.fullName = '';
      state.size = '';
      state.toppings = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitOrder.fulfilled, (state) => {
        state.isSubmitting = false;
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.error.message;
      });
  },
});

export const { setFullName, setSize, toggleTopping, resetForm } = formSlice.actions;

export default formSlice.reducer;