import { all, takeLatest, put } from 'redux-saga/effects';
import { API_SPOTIFY } from '../../../config/API';
import Types from '../types';
import { removeSession } from '../../../services/auth';

function* index({ payload }) {
  try {
    const response = yield API_SPOTIFY.get('/v1/browse/featured-playlists', {
      params: payload,
    });
    yield put({ type: Types.playlist.index.SUCCESS, payload: response.data });
  } catch (err) {
    if (err.response.status === 401) {
      yield put({ type: Types.playlist.FAILURE });
      yield removeSession();
      window.location = '/';
    }
  }
}

export default function* root() {
  yield all([takeLatest(Types.playlist.index.REQUEST, index)]);
}
