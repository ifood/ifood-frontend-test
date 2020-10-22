import { GET_FILTERS_SUCCESS, GET_FILTERS_FAILURE , SET_LOADING } from './types'
import { fetchFilters } from '../../api/filters'

export const getFilter = () => async dispatch => {
  try {
    dispatch(setLoading(true))
    const { data } = await fetchFilters()
    dispatch(getFilterSuccess(data))
    dispatch(setLoading(false))
  } catch(e) {
    dispatch(getFilterFailure(e))
  }
}

export const setLoading = (data) => ({
    type: SET_LOADING,
    payload: data
})

export const getFilterSuccess = (data) => ({
    type: GET_FILTERS_SUCCESS,
    payload: data,
})

export const getFilterFailure = error => ({
  type: GET_FILTERS_FAILURE,
  payload: {
    error
  }
})
