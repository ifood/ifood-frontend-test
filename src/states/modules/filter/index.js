import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

import { selectAllFilters } from './selectors'

const initialState = {
  loading: false,
  filters: [],
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilterRequest: (state) => extend(state, { loading: true }),
    getFilterSuccess: (state, { payload }) =>
      extend(state, {
        loading: false,
        filters: selectAllFilters(payload),
      }),
    getFilterFailure: (state, { payload }) =>
      extend(state, { loading: false, error: payload }),
  },
})

export const { getFilterRequest, getFilterSuccess, getFilterFailure } = actions

export { default as filterSaga } from './sagas'

export default reducer
