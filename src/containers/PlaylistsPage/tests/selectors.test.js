import {
  selectFilters,
  selectFiltersResource,
  selectFiltersIsLoading,
} from '../selectors'
import { initialState } from '../reducer'

describe('PlaylistsPage selectors', () => {
  const filters = {
    resource: [{ id: 'locale' }],
    isLoading: true,
    error: 'error',
  }
  const mockedState = { filters }

  it('should return reducer initialState filters if no state was provided', () => {
    expect(selectFilters({})).toEqual(initialState.filters)
  })

  it('should select filters result state', () => {
    expect(selectFiltersResource(mockedState)).toEqual([{ id: 'locale' }])
  })

  it('should select filters isLoading state', () => {
    expect(selectFiltersIsLoading(mockedState)).toEqual(true)
  })
})
