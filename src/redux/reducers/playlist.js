import { GET_PLAYLISTS_SUCCESS, GET_PLAYLISTS_FAILURE, SET_LOADING} from '../actions/types'

export const initialState = {
    message: '',
    playlists: {
      href: '',
      items: []
    },
    loading: false
}

export const playlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_PLAYLISTS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case SET_LOADING:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
