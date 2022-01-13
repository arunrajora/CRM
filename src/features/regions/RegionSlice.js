import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'North East' },
  { id: 2, name: 'North West' },
  { id: 3, name: 'South East' },
  { id: 4, name: 'South West' },
  { id: 5, name: 'North' },
  { id: 6, name: 'Mid North' },
];

export const counterSlice = createSlice({
  name: 'Region',
  initialState,
  reducers: {
    setRegion: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRegion } = counterSlice.actions;

export default counterSlice.reducer;
