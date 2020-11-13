import React from 'react'
import { mount } from 'enzyme'
import { AppProvider, cardList } from '../../../utils/testHelper'
import PlaylistsCard from './PlaylistsCard'
import { Loader } from './styles'

const setup = (props = {}) => {
  const newProps = {
    isFetching: false,
    error: null,
    playlistsFiltered: cardList(),
    ...props,
  }

  return mount(
    <AppProvider>
      <PlaylistsCard {...newProps} />
    </AppProvider>
  )
}

describe('PlaylistsCard', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(PlaylistsCard).length).toBe(1)
  })

  it('should render empty state', () => {
    const wrapper = setup({ playlistsFiltered: [] })
    expect(wrapper.find('.play-lists__empty').exists()).toBe(true)
  })

  it('should render loading state', () => {
    const wrapper = setup({ isFetching: true })
    expect(wrapper.find(Loader).exists()).toBe(true)
  })

  it('should render error state', () => {
    const wrapper = setup({ error: 'error' })
    expect(wrapper.find('.play-lists__error').exists()).toBe(true)
  })
})
