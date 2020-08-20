import React from 'react'
import { shallow } from 'enzyme'

import PlaylistCard from '../../PlaylistCard'

import Playlists from '../index'

describe('<Playlists />', () => {
  const props = {
    playlistResponse: {},
    nameFilter: '',
  }
  const shallowRender = (localProps = props) => shallow(<Playlists {...localProps} />)

  it('should render the component correctly', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent.isEmptyRender()).toBeTruthy()
  })

  it('should render PlaylistCard according to playlistResponse.playlists.items', () => {
    const localProps = {
      ...props,
      playlistResponse: {
        playlists: {
          items: [
            { id: 1, name: 'Name 1' },
            { id: 2, name: 'Name 2' },
          ],
        },
      },
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find(PlaylistCard).length).toEqual(2)
  })

  it('should render PlaylistCard according to playlistResponse.playlists.items', () => {
    const localProps = {
      ...props,
      nameFilter: 'me 2',
      playlistResponse: {
        playlists: {
          items: [
            { id: 1, name: 'Name 1' },
            { id: 2, name: 'Name 2' },
          ],
        },
      },
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find(PlaylistCard).length).toEqual(1)
    expect(renderedComponent.find(PlaylistCard).at(0).props().name).toEqual('Name 2')
  })
})
