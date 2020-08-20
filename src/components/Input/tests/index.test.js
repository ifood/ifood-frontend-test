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

  it('should call onChange prop function when triggering input change', () => {
    const localProps = {
      ...props,
      onChange: jest.fn(),
    }
    const event = { target: { value: '2' } }
    const renderedComponent = shallowRender(localProps)
    renderedComponent.find('input').simulate('change', event)
    expect(localProps.onChange).toHaveBeenCalledWith(event, localProps.id, undefined)
  })
})
