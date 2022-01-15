import { call, all, takeEvery, put, takeLatest } from 'redux-saga/effects';
import { clearDataFromStorage } from '../utilities/async_storage';
import { clearData as clearDataAction } from './customers/CustomerSlice';
import { fetchRegions } from './regions/Sagas';
import { fetchCustomers, watchSaveCustomer } from './customers/Sagas';

function* clearData() {
  yield clearDataFromStorage();
  yield put(clearDataAction());
}

function* watchClearData() {
  yield takeEvery('CLEAR_DATA', clearData);
}

function* watchFetchInitialData() {
  yield takeEvery('FETCH_INITIAL_DATA', fetchRegions);
  yield takeEvery('FETCH_INITIAL_DATA', fetchCustomers);
}

export default function* rootSaga() {
  yield all([watchFetchInitialData(), watchClearData(), watchSaveCustomer()]);
}
