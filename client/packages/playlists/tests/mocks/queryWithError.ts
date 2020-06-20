import { GET_PLAYLISTS } from '../../src/Playlists'

export default {
  request: {
    query: GET_PLAYLISTS,
    variables: {
      search: undefined,
      limit: 60,
      offset: undefined,
      countries: undefined
    }
  },
  error: new Error('boom!')
}
