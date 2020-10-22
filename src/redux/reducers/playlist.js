import { GET_PLAYLISTS_SUCCESS, GET_PLAYLISTS_FAILURE } from '../actions/types'

export const initialState = {
    message: '',
    playlists: {
      items: []
    }
}

export const playlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        playlists: {
          items: action.payload.playlists.items
        }
      }
    case GET_PLAYLISTS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}
