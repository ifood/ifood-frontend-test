import React from 'react'
import { shallow } from 'enzyme'

import Header from '../index'

describe('<Header />', () => {
  it('should render the component correctly', () => {
    expect(shallow(<Header />)).toBeTruthy()
  })
})
