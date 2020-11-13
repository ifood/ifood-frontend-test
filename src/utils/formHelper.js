import React from 'react'
import { FormField } from '../components/Molecule/FormField'
import { DateTimeField } from '../components/Molecule/DateTimeField'
import MenuItem from '@material-ui/core/MenuItem'
import { getType, toUnicodeStandarts } from './formValidationHelper'

export const createFormField = ({ fieldData = null, formikProps }) => {
  if (!fieldData) return

  if (fieldData.values) {
    return (
      <FormField
        name={`advanced.${fieldData.id}`}
        label={fieldData.name}
        select={true}
        {...formikProps}
      >
        <MenuItem value={''}>
          <em>Limpar</em>
        </MenuItem>
        {fieldData.values.map((value) => (
          <MenuItem key={value.value} value={value.value}>
            {value.name}
          </MenuItem>
        ))}
      </FormField>
    )
  }

  const { primitiveType, entityType } = fieldData.validation

  const { type } = getType(entityType || primitiveType)

  if (type === 'datetime-local') {
    return (
      <DateTimeField
        {...formikProps}
        name={`advanced.${fieldData.id}`}
        label={fieldData.name}
        format={toUnicodeStandarts(fieldData.validation.pattern)}
      />
    )
  }

  return (
    <FormField
      name={`advanced.${fieldData.id}`}
      label={fieldData.name}
      type={type}
      {...formikProps}
    />
  )
}

export const createInitialValues = (fields) => {
  return fields.reduce((initialValues, field) => {
    initialValues[field.id] = ''
    return initialValues
  }, {})
}
