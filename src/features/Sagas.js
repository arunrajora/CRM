import { all, takeEvery, put } from 'redux-saga/effects';
import { clearDataFromStorage, getCustomers } from '../utilities/async_storage';
import { removeNotification } from '../utilities/notifications';
import { clearData as clearDataAction } from './customers/CustomerSlice';
import { fetchRegions } from './regions/Sagas';
import { fetchCustomers, watchSaveCustomer } from './customers/Sagas';
import { fetchInitialDataAction, clearCustomerAction } from './actions';

function* clearData() {
  const customers = yield getCustomers();
  if (customers) {
    for (const customer of customers) {
      if (customer.reminderTime && customer.notificationId) {
        yield removeNotification(customer.notificationId);
      }
    }
  }
  yield clearDataFromStorage();
  yield put(clearDataAction());
}

function* watchClearData() {
  yield takeEvery(clearCustomerAction.toString(), clearData);
}

function* watchFetchInitialData() {
  yield takeEvery(fetchInitialDataAction.toString(), fetchRegions);
  yield takeEvery(fetchInitialDataAction.toString(), fetchCustomers);
}

export default function* rootSaga() {
  yield all([watchFetchInitialData(), watchClearData(), watchSaveCustomer()]);
}
