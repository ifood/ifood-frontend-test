import React from 'react'
import { mount } from 'enzyme'
import FilterButton from './FilterButton'

describe('FilterButton', () => {
  const onClick = jest.fn()

  const wrapper = mount(<FilterButton onClick={onClick} />)

  it('should render component properly', () => {
    expect(wrapper.find(FilterButton).length).toBe(1)
  })

  it('should execute click function', () => {
    wrapper.find(FilterButton).simulate('click')

    expect(onClick.mock.calls.length).toBe(1)
  })
})
