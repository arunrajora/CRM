import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    firstName: 'Melissa',
    lastName: 'Morris',
    region: 1,
    active: false,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 2,
    firstName: 'Andrea',
    lastName: ' Bell',
    region: 2,
    active: true,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 3,
    firstName: 'Valerie',
    lastName: 'Bennett',
    region: 3,
    active: true,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 4,
    firstName: 'Donald',
    lastName: ' Wong',
    region: 1,
    active: true,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 5,
    firstName: 'Scott',
    lastName: ' Cantu',
    region: 3,
    active: false,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 6,
    firstName: 'Jennifer',
    lastName: 'Long',
    region: 1,
    active: true,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 7,
    firstName: 'Kathleen',
    lastName: 'Stewart',
    region: 1,
    active: false,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 8,
    firstName: 'Raymond',
    lastName: 'Adkins',
    region: 3,
    active: true,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 9,
    firstName: 'John',
    lastName: ' Brooks',
    region: 2,
    active: false,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 10,
    firstName: 'Jennifer',
    lastName: 'Hall',
    region: 5,
    active: true,
    reminderTime: '20 January 2022, 04:44 PM',
  },
  {
    id: 11,
    firstName: 'Wanda',
    lastName: 'Knox',
    region: 6,
    active: false,
    reminderTime: '20 January 2022, 04:44 PM',
  },
];

export const counterSlice = createSlice({
  name: 'Region',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCustomer } = counterSlice.actions;

export default counterSlice.reducer;
