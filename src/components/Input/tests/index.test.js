import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

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
    expect(localProps.onChange).toHaveBeenCalledWith('2', localProps.id)
  })

  it('should validate the number field if has min max in validation property', () => {
    const localProps = {
      ...props,
      type: 'number',
      validation: {
        min: 1,
        max: 20,
      },
      onChange: jest.fn(),
    }
    let event = { target: { value: 0 } }
    const renderedComponent = shallowRender(localProps)

    renderedComponent.find('input').simulate('change', event)
    expect(localProps.onChange).not.toHaveBeenCalled()

    event = { target: { value: 21 } }
    renderedComponent.find('input').simulate('change', event)
    expect(localProps.onChange).not.toHaveBeenCalled()

    event = { target: { value: 15 } }
    renderedComponent.find('input').simulate('change', event)
    expect(localProps.onChange).toHaveBeenCalledWith(15, localProps.id)
  })

  it('should validate the datetime-local field if has validation property', () => {
    const localProps = {
      ...props,
      type: 'datetime-local',
      validation: {},
      onChange: jest.fn(),
    }
    let event = { target: { value: '2020-XX-12T02:32' } }
    const renderedComponent = shallowRender(localProps)

    renderedComponent.find('input').simulate('change', event)
    expect(localProps.onChange).not.toHaveBeenCalled()

    event = { target: { value: '2020-08-12T02:32' } }
    renderedComponent.find('input').simulate('change', event)
    expect(localProps.onChange).toHaveBeenCalledWith(moment('2020-08-12T02:32').toISOString(), localProps.id)
  })
})
