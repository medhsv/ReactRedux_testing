import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create the slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Configure and create the store
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
