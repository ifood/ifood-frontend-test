import React from 'react'
import { mount } from 'enzyme'
import { Formik } from 'formik'
import { AppProvider } from '../../../utils/testHelper'
import SearchBar from './SearchBar'

const setup = (props = {}) => {
  const newProps = {
    name: 'inputTest',
    label: 'test',
    onSearchBarChange: () => {},
    ...props,
  }

  return mount(
    <AppProvider>
      <Formik
        initialValues={{ [newProps.name]: '' }}
        validationSchema={{}}
        onSubmit={() => {}}
      >
        {(formikProps) => {
          return <SearchBar formikProps={formikProps} {...newProps} />
        }}
      </Formik>
    </AppProvider>
  )
}

describe('SearchBar', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(SearchBar).length).toBe(1)
  })
})
