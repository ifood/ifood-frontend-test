import { initialStateFilterReducer } from '../../__mocks__/reduxMock'
import { filterReducer } from './FilterReducer'
import { types } from '../../actions/filter'

describe('FilterReducer', () => {
  it('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(initialStateFilterReducer)
  })

  it(`should handle ${types.GET_FILTER_REQUEST}`, () => {
    const payload = { type: types.GET_FILTER_REQUEST }
    const actualState = { ...initialStateFilterReducer, isFetching: true }

    expect(filterReducer(undefined, payload)).toEqual(actualState)
  })

  it(`should handle ${types.GET_FILTER_SUCCESS}`, () => {
    const filters = []
    const payload = { type: types.GET_FILTER_SUCCESS, filters }
    const actualState = {
      ...initialStateFilterReducer,
      filters,
      isFetching: false,
      error: null,
    }

    expect(filterReducer(undefined, payload)).toEqual(actualState)
  })

  it(`should handle ${types.GET_FILTER_ERROR}`, () => {
    const error = 'error'
    const payload = { type: types.GET_FILTER_ERROR, error }
    const actualState = {
      ...initialStateFilterReducer,
      isFetching: false,
      error,
    }

    expect(filterReducer(undefined, payload)).toEqual(actualState)
  })
})
