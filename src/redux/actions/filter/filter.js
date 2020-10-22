import { GET_FILTERS_SUCCESS, GET_FILTERS_FAILURE } from '../types'
import { fetchFilters } from '../../../api/filters'

export const getFilters = () => async dispatch => {
  try {
    const { data } = await fetchFilters()
    dispatch(getFiltersSuccess(data))
  } catch(e) {
    dispatch(getFiltersFailure(e))
  }
}

export const getFiltersSuccess = (data) => ({
    type: GET_FILTERS_SUCCESS,
    payload: data,
})

export const getFiltersFailure = error => ({
  type: GET_FILTERS_FAILURE,
  payload: error.message
})
