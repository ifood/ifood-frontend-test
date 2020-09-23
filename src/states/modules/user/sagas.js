import { takeEvery, takeLatest } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/lib/constants'

import spotifyApi from 'services/api'

import { setToken } from '.'

export default function* rootSaga() {
  yield takeLatest(REHYDRATE, setTokenSaga)
  yield takeEvery(setToken, setNewTokenSaga)
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

  const { token } = payload.user

  if (token) {
    spotifyApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}
