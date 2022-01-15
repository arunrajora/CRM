import { put } from 'redux-saga/effects';
import { regions } from '../../utilities/initialRegions.json';
import { setRegion } from './RegionSlice';
import { getRegions, saveRegions } from '../../utilities/async_storage';

export function* fetchRegions() {
  let initialRegions = yield getRegions();
  if (initialRegions === null) {
    yield saveRegions(regions);
    initialRegions = regions;
  }
  yield put(setRegion(initialRegions));
}
