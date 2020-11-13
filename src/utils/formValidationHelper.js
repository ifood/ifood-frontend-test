import schemaValidator from './yup.config'
import { forIn } from 'lodash'

export const toUnicodeStandarts = (format) => {
  const regex = /T/gm

  return format.replace(regex, (match) => `'${match}'`)
}

export const getType = (type) => {
  switch (type) {
    case 'STRING':
      return {
        yupType: 'string',
        message: 'Insira caracteres válidos',
        type: 'text',
      }

    case 'INTEGER':
    case 'FLOAT':
      return {
        yupType: 'number',
        message: 'Insira um número válido',
        inputType: 'number',
      }

    case 'DATE_TIME':
      return {
        yupType: 'date',
        message: 'Insira uma data válida',
        type: 'datetime-local',
      }

    default:
      return {
        yuptype: 'mixed',
        message: 'Insira caracteres válidos',
        type: 'text',
      }
  }
}

export const createYupFieldSchema = (schema, config) => {
  const { id, validation } = config

  if (!validation) {
    schema[id] = schemaValidator.mixed()
    return schema
  }

  const { primitiveType, entityType, ...otherValidations } = validation

  const validationType = getType(entityType || primitiveType)

  let validator = schemaValidator[validationType.yupType]().typeError(
    validationType.message
  )

  forIn(otherValidations, (value, key) => {
    if (!validator[key]) {
      return
    }

    validator = validator[key](value)
  })

  schema[id] = validator
  return schema
}

export const createYupSchema = (fields) => {
  const fieldsSchema = fields.reduce(createYupFieldSchema, {})

  return schemaValidator
    .object()
    .shape({ advanced: schemaValidator.object().shape(fieldsSchema) })
}

