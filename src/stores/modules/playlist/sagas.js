import { all, takeLatest, put } from 'redux-saga/effects';
import { API_SPOTIFY } from '../../../config/API';
import Types from '../types';

// import { notify } from '../../../helpers';

function* index({ payload }) {
  try {
    const response = yield API_SPOTIFY.get('/v1/browse/featured-playlists', {
      params: payload,
    });
    yield put({ type: Types.playlist.index.SUCCESS, payload: response.data });
  } catch (err) {
    if (err.response.status !== 401) {
      //   notify('error', err.response);
      yield put({ type: Types.playlist.FAILURE });
    } else {
      yield put({ type: Types.session.signout.REQUEST });
    }
  }
}

export default function* root() {
  yield all([takeLatest(Types.playlist.index.REQUEST, index)]);
}
