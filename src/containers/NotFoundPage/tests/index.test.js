import React from 'react'
import { shallow } from 'enzyme'

import NotFoundPage from '../index'

describe('<NotFoundPage />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<NotFoundPage />)
    expect(renderedComponent).toBeTruthy()
  })
})
