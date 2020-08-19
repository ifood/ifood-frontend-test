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
      filters: {
        ...state.filters,
        isLoading: false,
        error: 'error',
      },
    }
    expect(playlistsPageReducer(state, actions.fetchFiltersFailureAction('error'))).toEqual(expectedResult)
  })
})
