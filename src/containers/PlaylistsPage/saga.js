import {
  all, call, put, takeEvery,
} from 'redux-saga/effects'

import request from '../../utils/request'

import { FETCH_FILTERS, fetchFiltersSuccessAction, fetchFiltersFailureAction } from './actions'
import { GET_FILTERS_API } from '../App/urls'

export function* fetchFilters() {
  try {
    const response = yield call(request, GET_FILTERS_API, { method: 'GET' }, false)

    yield put(fetchFiltersSuccessAction(response))
  } catch (error) {
    yield put(fetchFiltersFailureAction(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_FILTERS, fetchFilters),
  ])
}
