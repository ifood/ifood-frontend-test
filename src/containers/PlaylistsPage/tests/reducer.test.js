// import produce from 'immer'
import playlistsPageReducer, { initialState } from '../reducer'
import * as actions from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('playlistsPageReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(playlistsPageReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the fetchFiltersAction correctly', () => {
    const expectedResult = {
      ...state,
      filters: {
        resource: [],
        isLoading: true,
        error: null,
      },
    }
    expect(playlistsPageReducer(state, actions.fetchFiltersAction())).toEqual(expectedResult)
  })

  it('should handle the fetchFiltersSuccessAction correctly', () => {
    const expectedResult = {
      ...state,
      filters: {
        resource: [1],
        isLoading: false,
        error: null,
      },
    }
    expect(playlistsPageReducer(state, actions.fetchFiltersSuccessAction({ filters: [1] }))).toEqual(expectedResult)
  })

  it('should handle the fetchFiltersFailureAction correctly', () => {
    const expectedResult = {
      ...state,
      filters: {
        ...state.filters,
        isLoading: false,
        error: 'error',
      },
    }
    expect(playlistsPageReducer(state, actions.fetchFiltersFailureAction('error'))).toEqual(expectedResult)
  })

  it('should handle the fetchPlaylistsAction correctly', () => {
    const expectedResult = {
      ...state,
      playlists: {
        resource: {},
        isLoading: true,
        error: null,
      },
    }
    expect(playlistsPageReducer(state, actions.fetchPlaylistsAction())).toEqual(expectedResult)
  })

  it('should handle the fetchPlaylistsSuccessAction correctly', () => {
    const expectedResult = {
      ...state,
      playlists: {
        resource: {
          message: 'Message',
          playlists: [],
        },
        isLoading: false,
        error: null,
      },
    }
    expect(playlistsPageReducer(state, actions.fetchPlaylistsSuccessAction({
      message: 'Message',
      playlists: [],
    }))).toEqual(expectedResult)
  })

  it('should handle the fetchPlaylistsFailureAction correctly', () => {
    const expectedResult = {
      ...state,
      playlists: {
        ...state.playlists,
        isLoading: false,
        error: 'error',
      },
    }
    expect(playlistsPageReducer(state, actions.fetchPlaylistsFailureAction('error'))).toEqual(expectedResult)
  })

  it('should handle the updateFilterValuesAction correctly', () => {
    const expectedResult = {
      ...state,
      filterValues: { filterKey: 'value' },
    }
    expect(playlistsPageReducer(state, actions.updateFilterValuesAction('filterKey', 'value'))).toEqual(expectedResult)
  })
})
