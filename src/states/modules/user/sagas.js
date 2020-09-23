import { takeLatest } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/lib/constants'

import spotifyApi from 'services/api'

export default function* rootSaga() {
  yield takeLatest(REHYDRATE, setToken)
}

function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.user

  if (token) {
    spotifyApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } // IMPROVE: rehydrate interception not working
}
