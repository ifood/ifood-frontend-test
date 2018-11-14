import { call, put, takeLatest } from 'redux-saga/effects';
import { authenticate } from './AuthAPI';
import {
  AUTH_GET_TOKEN_ERROR,
  AUTH_GET_TOKEN_START,
  AUTH_GET_TOKEN_SUCCESS,
} from './AuthRedux';

function* authenticateSaga({ code }) {
  try {
    const data = yield call(authenticate, code);
    yield put({ type: AUTH_GET_TOKEN_SUCCESS, data });
  } catch (error) {
    yield put({ type: AUTH_GET_TOKEN_ERROR, error });
  }
}

export default function* watchAuthenticate() {
  yield takeLatest(AUTH_GET_TOKEN_START, authenticateSaga);
}
