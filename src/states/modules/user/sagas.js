import { takeLatest } from 'redux-saga/effects'

import { spotifyApi } from 'services/api'

import { REHYDRATE } from 'redux-persist/lib/constants'

// import {
//   getUserRequest,
// getUserSuccess,
// getUserFailure
// } from '.'

export default function* rootSaga() {
  yield takeLatest(REHYDRATE, setTokenSaga)
}

export function setTokenSaga({ payload }) {
  if (!payload) return

  console.log(payload)

  const { token } = payload.user

  if (token) {
    spotifyApi.defaults.headers['Authorization'] = `Bearer ${token}`
  }
}
