import { takeLatest, call, put, fork } from 'redux-saga/effects'
import { getFilterSuccess, getFilterError, types } from '../actions/filter'
import { getFilterAPI } from '../../api/filters'

function* getFilter() {
  try {
    const response = yield call(getFilterAPI)
    yield put(getFilterSuccess(response.data))
  } catch (e) {
    yield put(
      getFilterError({
        error: 'An error occurred when trying to get the filters',
      })
    )
  }
}

function* watchGetFilterRequest() {
  yield takeLatest(types.GET_FILTER_REQUEST, getFilter)
}

const filterSagas = [fork(watchGetFilterRequest)]

export default filterSagas
