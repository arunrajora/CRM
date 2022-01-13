import { configureStore } from '@reduxjs/toolkit';
import CustomerSlice from '../features/customers/CustomerSlice';
import RegionSlice from '../features/regions/RegionSlice';

export const store = configureStore({
  reducer: {
    regions: RegionSlice,
    customers: CustomerSlice,
  },
  devTools: true,
});
