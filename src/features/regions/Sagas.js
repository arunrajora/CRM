import { put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { regions } from '../../utils/initialRegions.json';
import { setRegion } from './RegionSlice';

export function* fetchRegions() {
  const regionsFromStorage = yield AsyncStorage.getItem('regions');
  let initialRegions = regions;
  if (regionsFromStorage === null) {
    yield AsyncStorage.setItem('regions', JSON.stringify(regions));
  } else {
    initialRegions = JSON.parse(regionsFromStorage);
  }
  yield put(setRegion(initialRegions));
}
