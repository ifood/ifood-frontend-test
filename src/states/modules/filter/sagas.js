import { call, put, takeEvery } from 'redux-saga/effects'

import { filterApi } from 'services/api'

import { getFilterRequest, getFilterSuccess, getFilterFailure } from '.'

import { filterParam } from 'constant'

export default function* rootSaga() {
  yield takeEvery(getFilterRequest, allFilters)
}

function* allFilters() {
  try {
    const { data } = yield call(filterApi.get, `/${filterParam}`)
    yield put(getFilterSuccess(data))
  } catch (error) {
    yield put(getFilterFailure(error.toString()))
  }
}
