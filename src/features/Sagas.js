import { call, all, takeEvery, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearData as clearDataAction } from './customers/CustomerSlice';
import { fetchRegions } from './regions/Sagas';
import { fetchCustomers, watchSaveCustomer } from './customers/Sagas';

function* clearData() {
  const keys = yield call(AsyncStorage.getAllKeys);
  if (keys.length) {
    yield call(AsyncStorage.clear);
  }
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
