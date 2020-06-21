import { object, number, ObjectSchema, setLocale } from 'yup'
import { i18n } from '@spotifood/internationalization'

setLocale({
  mixed: {
    notType: i18n.t('filter:validationnottype')
  },
  number: {
    integer: i18n.t('filter:validationinteger'),
    min: ({ min }) =>  `${i18n.t('filter:validationmin')}${min}`,
    max: ({ max }) =>  `${i18n.t('filter:validationmax')}${max}`
  },
})

export function buildSchema(min: number, max: number): ObjectSchema {
  return object().shape({
    limit: number()
      .integer()
      .min(min)
      .max(max)
  })
}
