import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../../services/form-filters'
import { Types } from '.'

function* getFormFilters() {
  try {
    const { data } = yield call(api.getFormFilters)
    yield put({ type: Types.GET_FORM_FILTERS_SUCCESS, payload: data })
  } catch (e) {
    yield put({
      type: Types.GET_FORM_FILTERS_FAIL,
      payload: { error: e.message }
    })
  }
}

export const formFieldsSagas = [
  takeLatest(Types.GET_FORM_FILTERS, getFormFilters)
]
