import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
