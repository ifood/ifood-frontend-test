import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

import { selectAllFilters } from './selectors'

const initialState = {
  loading: false,
  filters: [],
  currentFilters: {
    name: '',
    country: '',
    locale: '',
    limit: 20,
    offset: 1,
    timestamp: null,
  },
  hidden: true,
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
    setFilter: (state, { payload }) =>
      extend(state, extend(state.currentFilters, { ...payload })),
    toggleSidebar: (state) => extend(state, { hidden: !state.hidden }),
  },
})

export const {
  getFilterRequest,
  getFilterSuccess,
  getFilterFailure,
  setFilter,
  toggleSidebar,
} = actions

export { default as filterSaga } from './sagas'

export default reducer
