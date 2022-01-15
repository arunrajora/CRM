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
    clearData: (state, action) => {
      return [];
    },
    setCustomer: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCustomer, addCustomer, clearData, setCustomer } =
  counterSlice.actions;

export default counterSlice.reducer;
