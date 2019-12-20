export const Types = {
  GET_FORM_FILTERS: 'filters/GET',
  GET_FORM_FILTERS_SUCCESS: 'filters/GET_SUCCESS',
  GET_FORM_FILTERS_FAIL: 'filters/GET_FAIL'
}

const initialState = {
  filters: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_FORM_FILTERS: {
      return { ...state, loading: true, error: null }
    }
    case Types.GET_FORM_FILTERS_SUCCESS: {
      return {
        ...state,
        filters: action.payload.filters,
        loading: false,
        error: null
      }
    }
    case Types.GET_FORM_FILTERS_FAIL:
      return {
        ...state,
        filters: [],
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
