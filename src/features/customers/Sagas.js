import { put, takeEvery } from 'redux-saga/effects';
import {
  saveCustomers,
  getCustomers,
  saveCustomer as saveCustomerAsyncStorage,
} from '../../utilities/async_storage';
import {
  setNotification,
  removeNotification,
} from '../../utilities/notifications';
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
  if (customer.notificationId) {
    yield removeNotification(customer.notificationId);
    customer = {
      ...customer,
      notificationId: null,
    };
  }
  if (customer.reminderTime) {
    const notificationId = yield setNotification(customer);
    customer = {
      ...customer,
      notificationId,
    };
  }
  yield saveCustomerAsyncStorage(customer);
  yield put(updateCustomer(customer));
}

export function* watchSaveCustomer() {
  yield takeEvery('SAVE_CUSTOMER', saveCustomer);
}
