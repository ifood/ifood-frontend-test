export const types = {
  GET_FILTER_REQUEST: 'filter/get_filter_request',
  GET_FILTER_SUCCESS: 'filter/get_filter_success',
  GET_FILTER_ERROR: 'filter/get_filter_error',
}

export const getFilterRequest = () => ({
  type: types.GET_FILTER_REQUEST,
})

export const getFilterSuccess = ({ filters }) => ({
  type: types.GET_FILTER_SUCCESS,
  filters,
})

export const getFilterError = (error) => ({
  type: types.GET_FILTER_ERROR,
  error,
})
