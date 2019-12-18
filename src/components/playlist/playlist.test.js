import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Playlist } from '.'

import playlistsMock from '../../__mocks__/playlists.json'

const mockStore = configureStore([])

describe('Playlist', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      playlists: {
        ...playlistsMock
      }
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

  // TODO: snapshots
  // it('should render with given state from Redux store', () => {
  //   expect(component.toJSON()).toMatchSnapshot()
  // })
})
