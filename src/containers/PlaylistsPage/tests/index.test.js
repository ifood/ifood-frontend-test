import React from 'react'
import { shallow } from 'enzyme'

import { PlaylistsPage } from '../index'
import { ErrorWrapper } from '../styles'
import { StyledRouterLink } from '../../../components/StyledLink'

describe('<PlaylistsPage />', () => {
  const props = {
    fetchFilters: () => {},
    history: {},
  }
  const shallowRender = (localProps = props) => shallow(<PlaylistsPage {...localProps} />)

  it('should render the component correctly', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the component with a link back to home page if there is an error prop', () => {
    const localProps = {
      ...props,
      playlistsError: 'error',
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find(ErrorWrapper).length).toEqual(1)
    expect(renderedComponent.find(StyledRouterLink).at(0).props().to).toEqual('/')
  })
})
