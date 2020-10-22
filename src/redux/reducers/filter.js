import { GET_FILTERS_SUCCESS, GET_FILTERS_FAILURE } from '../actions/types'

export const initialState = {
    filters: []
}

export const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_FILTERS_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_FILTERS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}
