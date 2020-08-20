import React from 'react'
import { shallow } from 'enzyme'

import App from '../index'

describe('<App />', () => {
  it('should render the component correctly', () => {
    expect(shallow(<App />)).toBeTruthy()
  })
})
