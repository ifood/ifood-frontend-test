import React from 'react'
import { shallow } from 'enzyme'

import Input from '../index'

describe('<Input />', () => {
  const props = {
    id: 'input-test',
  }
  const shallowRender = (localProps = props) => shallow(<Input {...localProps} />)

  it('should render the component correctly', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('input').length).toEqual(1)
  })
})
