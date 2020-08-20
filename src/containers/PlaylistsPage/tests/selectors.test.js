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
})
