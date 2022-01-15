import { put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { customers } from '../../utils/initialCustomers.json';
import { setCustomer } from './CustomerSlice';

export function* fetchCustomers() {
  const customersFromStorage = yield AsyncStorage.getItem('customers');
  let initialCustomers = customers;
  if (customersFromStorage === null) {
    yield AsyncStorage.setItem('customers', JSON.stringify(customers));
  } else {
    initialCustomers = JSON.parse(customersFromStorage);
  }
  yield put(setCustomer(initialCustomers));
}
