import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/lib/constants'

import { spotifyApi, refreshTokenApi } from 'services/api'

import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenFailure,
  setToken,
} from '.'

import { getPlaylistRequest } from '../playlist/index'

export default function* rootSaga() {
  yield takeLatest(REHYDRATE, setTokenSaga)
  yield takeEvery(setToken, setNewTokenSaga)
  yield takeEvery(refreshTokenRequest, refreshTokenSaga)
}

function* refreshTokenSaga() {
  const { session } = yield select()
  try {
    const { data } = yield call(
      refreshTokenApi.get,
      `/refresh_token/${session.refreshToken}`
    )

    if (data.access_token) {
      spotifyApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.access_token}`
    }

    yield put(getPlaylistRequest())
    yield put(refreshTokenSuccess(data))
  } catch (error) {
    yield put(refreshTokenFailure(error.toString()))
  }
}

function setNewTokenSaga({ payload }) {
  if (!payload) return

  const { token } = payload

  if (token) {
    spotifyApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

function setTokenSaga({ payload }) {
  if (!payload) return

  const { token } = payload.session

  if (token) {
    spotifyApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}
