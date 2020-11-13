import React from 'react'
import { mount } from 'enzyme'
import { AppProvider, advancedFilter, playlists } from '../../utils/testHelper'
import { Provider } from 'react-redux'
import {
  mockStore,
  initialStateFilterReducer,
  initialStatePlaylistReducer,
} from '../../redux/__mocks__/reduxMock'
import PlaylitsPage from './PlaylitsPage'

const setup = ({ filterState = {}, playlistState = {} }) => {
  const newState = {
    filter: {
      ...initialStateFilterReducer,
      ...filterState,
    },
    playlist: {
      ...initialStatePlaylistReducer,
      ...playlistState,
    },
  }

  const store = mockStore(newState)

  return mount(
    <Provider store={store}>
      <AppProvider>
        <PlaylitsPage />
      </AppProvider>
    </Provider>
  )
}

describe.only('PlaylitsPage', () => {
  it('should render component properly', () => {
    const state = {
      filterState: {
        filters: advancedFilter,
      },
      playlistState: {
        playlists,
      },
    }
    const wrapper = setup(state)
    expect(wrapper.find(PlaylitsPage).length).toBe(1)
  })
})
