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
    page: 1,
    date: null,
  },
  hide: true,
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
    toggleSidebar: (state) => extend(state, { hide: !state.hide }),
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
