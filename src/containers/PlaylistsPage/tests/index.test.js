import React from 'react'
import { shallow } from 'enzyme'

import { PlaylistsPage } from '../index'

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
})
