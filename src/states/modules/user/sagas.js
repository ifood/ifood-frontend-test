import { takeEvery } from 'redux-saga/effects'

import {
  getUserRequest,
  // getUserSuccess,
  // getUserFailure
} from '.'

export default function* rootSaga() {
  yield takeEvery(getUserRequest, getUserSaga)
}

function* getUserSaga() {}
