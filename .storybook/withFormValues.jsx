import React from 'react'
import { Formik } from 'formik'

/**
 * Decorates a story with Formik
 * @param initialValues
 * @param validationSchema - yup schema (formik validationSchema)
 * @returns {function(*): *}
 */

export const withFormValues = (initialValues = {}, validationSchema = {}) => (
  story: () => React.ReactNode
) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
    render={(props) => story(props)}
  />
)
