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
})
