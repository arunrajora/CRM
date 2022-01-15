import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const counterSlice = createSlice({
  name: 'Region',
  initialState,
  reducers: {
    updateCustomer: (state, action) => {
      const customerIndex = state.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (customerIndex != -1) {
        state[customerIndex] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
    clearData: () => {
      return [];
    },
    setCustomer: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateCustomer, clearData, setCustomer } = counterSlice.actions;

export default counterSlice.reducer;
