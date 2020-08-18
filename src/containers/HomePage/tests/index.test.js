import React from 'react'
import { shallow } from 'enzyme'

import { FULL_AUTHORIZE_URI } from '../../../spotifyAuthorizationConfig'
import HomePage from '../index'
import StyledLink from '../../../components/StyledLink'

describe('<HomePage />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<HomePage />)

    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find(StyledLink).at(0).props().href).toEqual(FULL_AUTHORIZE_URI)
  })
})
