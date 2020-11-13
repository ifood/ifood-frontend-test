import React from 'react'
import { mount } from 'enzyme'
import { AppProvider, advancedFilter } from '../../../utils/testHelper'
import Loading from '../../Atom/Loading'
import Filter from './Filter'
import { FilterButton } from '../../Atom/FilterButton'
import { AdvancedFilter } from '../AdvancedFilter'
import { Provider } from 'react-redux'
import {
  mockStore,
  initialStateFilterReducer,
} from '../../../redux/__mocks__/reduxMock'

const setup = ({ props = {}, state = {} }) => {
  const newProps = {
    onSearchBarChange: () => {},
    onFiltersChange: () => {},
    onPageError: false,
    ...props,
  }

  const newState = {
    filter: {
      ...initialStateFilterReducer,
      ...state,
    },
  }

  const store = mockStore(newState)

  return mount(
    <Provider store={store}>
      <AppProvider>
        <Filter {...newProps} />
      </AppProvider>
    </Provider>
  )
}

describe.only('Filter', () => {
  it('should render component properly', () => {
    const state = {
      filters: advancedFilter,
    }
    const wrapper = setup({ state })
    expect(wrapper.find(Filter).length).toBe(1)
  })

  it('should render component empty state', () => {
    const wrapper = setup({})
    expect(wrapper.find(Filter).length).toBe(1)
  })

  it('should render component loading state', () => {
    const state = {
      isFetching: true,
    }
    const wrapper = setup({ state })
    expect(wrapper.find(Loading).exists()).toBe(true)
  })

  it('should not render filter button state', () => {
    const state = {
      isFetching: false,
      filters: [],
    }
    const wrapper = setup({ state })
    expect(wrapper.find(FilterButton).exists()).toBe(false)
  })

  it('should show the advanced filters', () => {
    const state = {
      filters: advancedFilter,
    }
    const wrapper = setup({ state })
    wrapper.find(FilterButton).simulate('click')

    expect(wrapper.find(AdvancedFilter).props().className).toBe('')
  })
})
