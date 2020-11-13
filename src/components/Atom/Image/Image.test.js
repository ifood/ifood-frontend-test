import React from 'react'
import { mount } from 'enzyme'
import { AppProvider, imageLink } from '../../../utils/testHelper'
import Image from './Image'

const setup = (imgSrc = '') => {
  return mount(
    <AppProvider>
      <Image imgSrc={imgSrc} alt="test" />
    </AppProvider>
  )
}

describe('Image', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(Image).length).toBe(1)
  })

  it('should render error image', () => {
    const wrapper = setup()
    expect(wrapper.find('.bg-icon').exists()).toBe(true)
  })

  it('should render  image', () => {
    const wrapper = setup(imageLink)
    expect(wrapper.find('.card__image').exists()).toBe(true)
  })
})
