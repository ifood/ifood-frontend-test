import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Search } from '.'

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
        <Search />
      </Provider>
    )
  })

  it('should render component correctly', () => {
    const { getByText } = component
    const linkElement = getByText(/Spotifood/i)
    expect(linkElement).toBeInTheDocument()
  })

  // it('should render with given state from Redux store', () => {
  //   expect(component.toJSON()).toMatchSnapshot()
  // })
})
