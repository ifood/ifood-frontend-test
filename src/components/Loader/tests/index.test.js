import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../index'

describe('<Loader />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<Loader />)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('img').at(0).props().src).toEqual('loader.gif')
  })
})
