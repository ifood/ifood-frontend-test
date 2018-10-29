import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './Playlists.api';
import {
  PLAYLISTS,
  FILTERS_METADATA,
  playlists,
  filtersMetadata,
} from './Playlists.actions';

export function* fetchPlaylists(action) {
  try {
    const response = yield call(Api.fetchPlaylists, action.filters);
    yield put(playlists.success(response));
  } catch (e) {
    yield put(playlists.failure(e.message));
  }
}

export function* fetchFiltersMetadata() {
  try {
    const metadata = yield call(Api.fetchFiltersMetadata);
    yield put(filtersMetadata.success(metadata));
  } catch (e) {
    yield put(filtersMetadata.failure(e.message));
  }
}

function* playListsSaga() {
  yield takeLatest(PLAYLISTS.REQUEST, fetchPlaylists);
  yield takeLatest(FILTERS_METADATA.REQUEST, fetchFiltersMetadata);
}

export default playListsSaga;
