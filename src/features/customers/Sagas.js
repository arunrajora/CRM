import { put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveCustomers, getCustomers } from '../../utilities/async_storage';
import { customers } from '../../utilities/initialCustomers.json';
import { setCustomer, updateCustomer } from './CustomerSlice';
import { v4 as uuidv4 } from 'uuid';

export function* fetchCustomers() {
  let initialCustomers = yield getCustomers();
  if (initialCustomers === null) {
    yield saveCustomers(customers);
    initialCustomers = customers;
  }
  yield put(setCustomer(initialCustomers));
}

export function* saveCustomer({ customer }) {
  if (customer.id === null) {
    customer = {
      ...customer,
      id: uuidv4(),
    };
  }
  yield put(updateCustomer(customer));
}

export function* watchSaveCustomer() {
  yield takeEvery('SAVE_CUSTOMER', saveCustomer);
}
