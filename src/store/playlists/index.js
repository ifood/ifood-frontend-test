export const Types = {
  GET_PLAYLISTS: 'playlists/GET',
  GET_PLAYLISTS_SUCCESS: 'playlists/GET_SUCCESS',
  GET_PLAYLISTS_FAIL: 'playlists/GET_FAIL'
}

const initialState = {
  playlists: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_PLAYLISTS: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case Types.GET_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.payload.playlists.items,
        loading: false,
        error: null
      }
    }
    case Types.GET_PLAYLISTS_FAIL: {
      return {
        ...state,
        playlists: [],
        loading: false,
        error: action.payload.error
      }
    }
    default:
      return state
  }
}
