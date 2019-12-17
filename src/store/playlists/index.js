export const Types = {
  GET_PLAYLISTS: 'playlists/GET',
  GET_PLAYLISTS_SUCCESS: 'playlists/GET_SUCCESS',
  GET_PLAYLISTS_FAIL: 'playlists/GET_FAIL'
}

const initialState = {
  playlists: [],
  message: '',
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.payload.playlists.items,
        message: action.payload.message,
        error: null
      }
    }
    case Types.GET_PLAYLISTS_FAIL: {
      return {
        ...state,
        playlists: [],
        message: '',
        error: action.payload.error
      }
    }
    default:
      return state
  }
}
