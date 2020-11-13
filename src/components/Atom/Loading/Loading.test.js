import React from 'react'
import { mount } from 'enzyme'
import Loading from './Loading'

describe('Loading', () => {
  let wrapper = mount(<Loading />)

  it('render proprely', () => {
    expect(wrapper.find(Loading).length).toBe(1)
  })
})
