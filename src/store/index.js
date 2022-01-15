import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import CustomerSlice from '../features/customers/CustomerSlice';
import RegionSlice from '../features/regions/RegionSlice';

import rootSaga from '../features/Sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    regions: RegionSlice,
    customers: CustomerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
