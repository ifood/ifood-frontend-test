import { call, put, takeEvery } from 'redux-saga/effects'

import { filterApi } from 'services/api'

import { getFilterRequest, getFilterSuccess, getFilterFailure } from '.'

export default function* rootSaga() {
  yield takeEvery(getFilterRequest, allFilters)
}

const filterParam = '5a25fade2e0000213aa90776'

function* allFilters() {
  try {
    const { data } = yield call(filterApi.get, `/${filterParam}`)

    yield put(getFilterSuccess(data))
  } catch (error) {
    yield put(getFilterFailure(error.toString()))
  }
}
