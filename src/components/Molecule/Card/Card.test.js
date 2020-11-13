import React from 'react'
import { mount } from 'enzyme'
import { AppProvider, imageLink } from '../../../utils/testHelper'
import Card from './Card'

const setup = (props = {}) => {
  const newProps = {
    link: 'test',
    name: 'inputTest',
    imgSrc: '',
    ...props,
  }

  return mount(
    <AppProvider>
      <Card {...newProps} />
    </AppProvider>
  )
}

describe('Card', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(Card).length).toBe(1)
  })

  describe('Render image', () => {
    const wrapper = setup({ imgSrc: imageLink })

    it('should render image properly', () => {
      expect(wrapper.find('.card__image').exists()).toBe(true)
    })
  })

  describe('Render title', () => {
    const name = 'testTitle'
    const wrapper = setup({ name })

    it('should render title properly', () => {
      expect(wrapper.find('p.card__title').exists()).toBe(true)
    })

    it('should render label value ', () => {
      const title = wrapper.find('p.card__title')
      expect(title.text()).toEqual(name)
    })
  })
})
