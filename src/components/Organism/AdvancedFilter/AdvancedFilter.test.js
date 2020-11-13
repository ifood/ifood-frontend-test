import React from 'react'
import { mount } from 'enzyme'
import { Formik } from 'formik'
import { AppProvider, advancedFilter } from '../../../utils/testHelper'
import Loading from '../../Atom/Loading'
import AdvancedFilter from './AdvancedFilter'

const setup = (props = {}) => {
  const newProps = {
    isFetching: false,
    error: null,
    filters: advancedFilter,
    onValuesChange: () => {},
    ...props,
  }

  return mount(
    <AppProvider>
      <Formik initialValues={{}} validationSchema={{}} onSubmit={() => {}}>
        {(formikProps) => {
          return <AdvancedFilter formikProps={formikProps} {...newProps} />
        }}
      </Formik>
    </AppProvider>
  )
}

describe('AdvancedFilter', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(AdvancedFilter).length).toBe(1)
  })

  it('should render loading state', () => {
    const wrapper = setup({ isFetching: true })
    expect(wrapper.find(Loading).exists()).toBe(true)
  })

  it('should render empty state', () => {
    const wrapper = setup({ filters: [] })
    expect(wrapper.find('.advanced-filter__empty').exists()).toBe(true)
  })

  it('should render error state', () => {
    const wrapper = setup({ error: { error: 'error' } })
    expect(wrapper.find('.advanced-filter__error').exists()).toBe(true)
  })
})
