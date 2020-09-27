import { call, put, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { filterApi } from 'services/api'

import { getFilterRequest, getFilterSuccess, getFilterFailure } from '.'

import { filterParam } from 'constant'

import { getErrorMessage } from 'utils'

export default function* rootSaga() {
  yield takeEvery(getFilterRequest, allFilters)
}

function* allFilters() {
  try {
    const { data } = yield call(filterApi.get, `/${filterParam}`)
    yield put(getFilterSuccess(data))
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    toast.dark(errorMessage)
    yield put(getFilterFailure(error.toString()))
  }
}
