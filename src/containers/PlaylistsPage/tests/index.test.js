import React from 'react'
import { shallow } from 'enzyme'

import { StyledRouterLink } from '../../../components/StyledLink'
import PlaylistCard from '../../../components/PlaylistCard'

import { PlaylistsPage } from '../index'
import { ErrorWrapper } from '../styles'

describe('<PlaylistsPage />', () => {
  const props = {
    fetchFilters: () => {},
    fetchPlaylists: () => {},
    history: {},
    playlistResponse: {},
  }
  const shallowRender = (localProps = props) => shallow(<PlaylistsPage {...localProps} />)

  it('should render the component correctly', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the component with a link back to home page if there is an error prop', () => {
    const localProps = {
      ...props,
      playlistsError: { message: 'error' },
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find(ErrorWrapper).length).toEqual(1)
    expect(renderedComponent.find(StyledRouterLink).at(0).props().to).toEqual('/')
  })

  it('should render PlaylistCard according to playlistResponse.playlists.items', () => {
    const localProps = {
      ...props,
      playlistResponse: {
        playlists: {
          items: [
            { id: 1 },
            { id: 2 },
          ],
        },
      },
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find(PlaylistCard).length).toEqual(2)
  })
})
