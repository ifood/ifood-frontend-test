import { call, put, takeEvery, select } from 'redux-saga/effects'

import spotifyApi from 'services/api'

import { getPlaylistRequest, getPlaylistSuccess, getPlaylistFailure } from '.'

export default function* rootSaga() {
  yield takeEvery(getPlaylistRequest, allPlaylists)
}

function* allPlaylists() {
  try {
    const { user } = yield select()
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }

    const { data } = yield call(
      spotifyApi.get,
      '/browse/featured-playlists?country=SE&limit=10',
      config
    )

    yield put(getPlaylistSuccess(data))
  } catch (error) {
    yield put(getPlaylistFailure(error.toString()))
  }
}
