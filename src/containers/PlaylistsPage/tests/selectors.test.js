import * as selectors from '../selectors'
import { initialState } from '../reducer'

describe('PlaylistsPage selectors', () => {
  const filters = {
    resource: [{ id: 'locale' }],
    isLoading: true,
    error: 'error',
  }
  const playlists = {
    resource: { message: "Editor's Pick", playlists: [] },
    isLoading: true,
    error: 'error',
  }
  const filterValues = { key: 'value' }
  const mockedState = { filters, playlists, filterValues }

  it('should return reducer initialState filters if no state was provided', () => {
    expect(selectors.selectFilters({})).toEqual(initialState.filters)
  })

  it('should select filters resource state', () => {
    expect(selectors.selectFiltersResource(mockedState)).toEqual([{ id: 'locale' }])
  })

  it('should select filters isLoading state', () => {
    expect(selectors.selectFiltersIsLoading(mockedState)).toEqual(true)
  })

  it('should return reducer initialState playlists if no state was provided', () => {
    expect(selectors.selectPlaylistsDomain({})).toEqual(initialState.playlists)
  })

  it('should select playlists resource state', () => {
    expect(selectors.selectPlaylistsResource(mockedState)).toEqual({ message: "Editor's Pick", playlists: [] })
  })

  it('should select playlists isLoading state', () => {
    expect(selectors.selectPlaylistsIsLoading(mockedState)).toEqual(true)
  })

  it('should select playlists error state', () => {
    expect(selectors.selectPlaylistsError(mockedState)).toEqual('error')
  })

  it('should select the filterValues state', () => {
    expect(selectors.selectFilterValues(mockedState)).toEqual({ key: 'value' })
  })

  it('should select the initial state filterValues if no state is provided', () => {
    expect(selectors.selectFilterValues({})).toEqual({})
  })

  it('should select the filter values with the offset normalized if it has an offset', () => {
    const localState = {
      filterValues: {
        offset: 1,
        limit: 10,
      },
    }
    expect(selectors.selectNormalizedFilterValues(localState)).toEqual({
      offset: 11,
      limit: 10,
    })
  })

  it('should select the filter values with the offset normalized if it has an offset and limit is undefined', () => {
    const localState = {
      filterValues: {
        offset: 1,
      },
    }
    expect(selectors.selectNormalizedFilterValues(localState)).toEqual({
      offset: 1,
    })
  })

  it('should select the filter values just like the state if offset is falsy', () => {
    const localState = {
      filterValues: {
        offset: 0,
        limit: 10,
      },
    }
    expect(selectors.selectNormalizedFilterValues(localState)).toEqual({
      offset: 0,
      limit: 10,
    })
  })
})
