import React from 'react'
import { mount } from 'enzyme'
import { Formik } from 'formik'
import { AppProvider } from '../../../utils/testHelper'
import FormField from './FormField'

const setup = (props = {}) => {
  const newProps = {
    name: 'inputTest',
    label: 'test',
    ...props,
  }

  return mount(
    <AppProvider>
      <Formik initialValues={{}} validationSchema={{}} onSubmit={() => {}}>
        {(formikProps) => {
          return <FormField {...formikProps} {...newProps} />
        }}
      </Formik>
    </AppProvider>
  )
}

describe('FormField', () => {
  it('should render  text component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(FormField).length).toBe(1)
  })

  it('should render  select component properly', () => {
    const children = () => <option>test</option>
    const wrapper = setup({ select: true, children })
    expect(wrapper.find(FormField).length).toBe(1)
  })

  it('should error text component properly', () => {
    const name = 'testinput'
    const errors = { [name]: ' error ' }
    const wrapper = setup({ name, errors })
    expect(wrapper.find(FormField).length).toBe(1)
  })
})
