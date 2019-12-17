import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Playlist } from '.'

const mockStore = configureStore([])

describe('Playlist', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      playlists: []
    })

    component = render(
      <Provider store={store}>
        <Playlist />
      </Provider>
    )
  })

  it('should render component correctly', () => {
    const { getByText } = component
    const linkElement = getByText(/Playlists/i)
    expect(linkElement).toBeInTheDocument()
  })

  // it('should render with given state from Redux store', () => {
  //   expect(component.toJSON()).toMatchSnapshot()
  // })
})
