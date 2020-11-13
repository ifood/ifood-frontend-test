import { initialStateRootReducer, mockStore } from '../../__mocks__/reduxMock'
import {
  types,
  getPlaylistRequest,
  getPlaylistSuccess,
  getPlaylistError,
  filterPlaylistAction,
  filterPlaylistSuccess,
} from '../playlist'

describe('action playlist', () => {
  const filter = []

  describe('Get Playlist', () => {
    it('should dispatch getPlaylistRequest', () => {
      const content = { filter, updateIsFetching: true }
      const payload = { type: types.GET_PLAYLIST_REQUEST, ...content }
      const store = mockStore(initialStateRootReducer)

      store.dispatch(getPlaylistRequest(content))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it('should dispatch getPlaylistSuccess', () => {
      const content = { filter, playlists: [] }
      const payload = { type: types.GET_PLAYLIST_SUCCESS, ...content }

      const store = mockStore(initialStateRootReducer)

      store.dispatch(getPlaylistSuccess(content))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it('should dispatch getPlaylistError', () => {
      const error = 'error'
      const payload = { type: types.GET_PLAYLIST_ERROR, error, filter: 'error' }

      const store = mockStore(initialStateRootReducer)

      store.dispatch(getPlaylistError({ error }))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })
  })

  describe('Filter Playlist', () => {
    it('should dispatch filterPlaylistAction', () => {
      const content = { filter, playlists: [] }
      const payload = { type: types.FILTER_PLAYLIST, ...content }
      const store = mockStore(initialStateRootReducer)

      store.dispatch(filterPlaylistAction(content))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it('should dispatch filterPlaylistAction no filter', () => {
      const content = { filter: null, playlists: null }
      const payload = { type: types.FILTER_PLAYLIST, ...content }
      const store = mockStore(initialStateRootReducer)

      store.dispatch(filterPlaylistAction({}))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it('should dispatch filterPlaylistSuccess', () => {
      const content = { filter, playlistsFiltered: [] }
      const payload = { type: types.FILTER_PLAYLIST_SUCCESS, ...content }
      const store = mockStore(initialStateRootReducer)

      store.dispatch(filterPlaylistSuccess(content))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })
  })
})
