import { getPlaylists } from '../../../services'

export const Types = {
  GET_PLAYLISTS: 'playlists/GET'
}

const initialState = {
  playlists: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_PLAYLISTS:
      return { ...state, playlists: action.payload }
    default:
      return state
  }
}

export function getPlaylistsData(payload) {
  console.log('TODO: getPlaylists', getPlaylists)
  return {
    type: Types.GET_PLAYLISTS,
    payload
  }
}
