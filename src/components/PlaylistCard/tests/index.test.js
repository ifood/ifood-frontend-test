import React from 'react'
import { shallow } from 'enzyme'

import PlaylistCard from '../index'

describe('<PlaylistCard />', () => {
  const props = {
    name: 'Name',
    description: 'Description',
    images: [
      {
        url: 'url-path',
      },
    ],
  }
  const shallowRender = (localProps = props) => shallow(<PlaylistCard {...localProps} />)

  it('should render the component correctly', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent).toBeTruthy()
  })
})
