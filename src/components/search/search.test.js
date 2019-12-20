import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Search } from '.'

import filtersMock from '../../__mocks__/filters.json'

const mockStore = configureStore([])

describe('Search', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      filters: {
        filters: []
      },
      playlists: {
        error: null
      }
    })

    component = render(
      <Provider store={store}>
        <Search filters={filtersMock.filters} />
      </Provider>
    )
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })

  it('should find title text', () => {
    const { getByText } = component
    const linkElement = getByText(/Spotifood/i)
    expect(linkElement).toBeInTheDocument()
  })
})
