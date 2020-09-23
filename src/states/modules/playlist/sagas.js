import { call, put, takeEvery } from 'redux-saga/effects'

import { spotifyApi } from 'services/api'

import { getPlaylistRequest, getPlaylistSuccess, getPlaylistFailure } from '.'

export default function* rootSaga() {
  yield takeEvery(getPlaylistRequest, allPlaylists)
}

function* allPlaylists() {
  try {
    const { data } = yield call(
      spotifyApi.get,
      '/browse/featured-playlists?country=SE&limit=2'
    )
    console.log(data)
    yield put(getPlaylistSuccess(data))
  } catch (error) {
    yield put(getPlaylistFailure(error.toString()))
  }
}
