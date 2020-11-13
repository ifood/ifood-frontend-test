import React from 'react'
import { mount } from 'enzyme'
import { Formik } from 'formik'
import { AppProvider } from '../../../utils/testHelper'
import DateTimeField from './DateTimeField'

const setup = (props = {}) => {
  const newProps = {
    name: 'inputTest',
    ...props,
  }

  return mount(
    <AppProvider>
      <Formik initialValues={{}} validationSchema={{}} onSubmit={() => {}}>
        {(formikProps) => {
          return <DateTimeField {...formikProps} {...newProps} />
        }}
      </Formik>
    </AppProvider>
  )
}

describe('DateTimeField', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(DateTimeField).length).toBe(1)
  })
})
