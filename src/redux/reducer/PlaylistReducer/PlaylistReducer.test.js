import { initialStatePlaylistReducer } from '../../__mocks__/reduxMock'
import { playlistReducer } from './PlaylistReducer'
import { types } from '../../actions/playlist'

describe('PlaylistReducer', () => {
  it('should return the initial state', () => {
    expect(playlistReducer(undefined, {})).toEqual(initialStatePlaylistReducer)
  })

  describe('should handler get playlist', () => {
    describe(`should handle ${types.GET_PLAYLIST_REQUEST}`, () => {
      it('without params', () => {
        const payload = { type: types.GET_PLAYLIST_REQUEST }
        const actualState = { ...initialStatePlaylistReducer }

        expect(playlistReducer(undefined, payload)).toEqual(actualState)
      })

      it('with params', () => {
        const payload = {
          type: types.GET_PLAYLIST_REQUEST,
          updateIsFetching: true,
        }
        const actualState = { ...initialStatePlaylistReducer, isFetching: true }

        expect(playlistReducer(undefined, payload)).toEqual(actualState)
      })
    })

    it(`should handle ${types.GET_PLAYLIST_SUCCESS}`, () => {
      const filter = []
      const playlists = []
      const payload = { type: types.GET_PLAYLIST_SUCCESS, filter, playlists }
      const actualState = {
        ...initialStatePlaylistReducer,
        apiFilter: filter,
        playlists,
        isFetching: false,
        error: null,
      }

      expect(playlistReducer(undefined, payload)).toEqual(actualState)
    })

    it(`should handle ${types.GET_PLAYLIST_ERROR}`, () => {
      const filter = []
      const error = 'error'
      const payload = { type: types.GET_PLAYLIST_ERROR, filter, error }
      const actualState = {
        ...initialStatePlaylistReducer,
        apiFilter: filter,
        isFetching: false,
        error,
      }

      expect(playlistReducer(undefined, payload)).toEqual(actualState)
    })
  })

  describe('should handler filter playlist', () => {
    describe(`should handle ${types.FILTER_PLAYLIST_SUCCESS}`, () => {
      const playlistsFiltered = []

      it('without filter', () => {
        const payload = {
          type: types.FILTER_PLAYLIST_SUCCESS,
          filter: null,
          playlistsFiltered,
        }
        const actualState = {
          ...initialStatePlaylistReducer,
          localFilter: initialStatePlaylistReducer.localFilter,
          playlistsFiltered,
        }

        expect(playlistReducer(undefined, payload)).toEqual(actualState)
      })

      it('with filter', () => {
        const filter = 'test'
        const payload = {
          type: types.FILTER_PLAYLIST_SUCCESS,
          filter,
          playlistsFiltered,
        }
        const actualState = {
          ...initialStatePlaylistReducer,
          localFilter: filter,
          playlistsFiltered,
        }

        expect(playlistReducer(undefined, payload)).toEqual(actualState)
      })
    })
  })
})
