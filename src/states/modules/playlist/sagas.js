import { call, put, takeEvery } from 'redux-saga/effects'

import spotifyApi from 'services/api'

import { getPlaylistRequest, getPlaylistSuccess, getPlaylistFailure } from '.'

export default function* rootSaga() {
  yield takeEvery(getPlaylistRequest, allPlaylists)
}

function* allPlaylists({ payload }) {
  try {
    const { country = 'SE', limit = 10 } = payload
    const { data } = yield call(
      spotifyApi.get,
      `/browse/featured-playlists?country=${country}&limit=${limit}`
    )

    yield put(getPlaylistSuccess(data))
  } catch (error) {
    yield put(getPlaylistFailure(error.toString()))
  }
}
