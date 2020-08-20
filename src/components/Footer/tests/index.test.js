import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../index'

describe('<Footer />', () => {
  it('should render the component correctly', () => {
    expect(shallow(<Footer />)).toBeTruthy()
  })
})
