/* eslint-disable quotes */
import {
  toUnicodeStandarts,
  getType,
  createYupFieldSchema,
} from '../formValidationHelper'

describe('formValidationHelper', () => {
  describe('toUnicodeStandarts', () => {
    const values = [
      {
        input: 'yyyy',
        output: 'yyyy',
      },
      {
        input: 'yTyy',
        output: `y'T'yy`,
      },
      {
        input: 'ttTt',
        output: `tt'T't`,
      },
      {
        input: 'dd/MM/yyyy',
        output: 'dd/MM/yyyy',
      },
    ]

    values.forEach((n) => {
      it(`should handle ${n.input}`, () => {
        expect(toUnicodeStandarts(n.input)).toBe(n.output)
      })
    })
  })

  describe('getType', () => {
    const values = [
      {
        input: 'STRING',
        output: {
          yupType: 'string',
          message: 'Insira caracteres válidos',
          type: 'text',
        },
      },
      {
        input: 'INTEGER',
        output: {
          yupType: 'number',
          message: 'Insira um número válido',
          inputType: 'number',
        },
      },
      {
        input: 'FLOAT',
        output: {
          yupType: 'number',
          message: 'Insira um número válido',
          inputType: 'number',
        },
      },
      {
        input: 'DATE_TIME',
        output: {
          yupType: 'date',
          message: 'Insira uma data válida',
          type: 'datetime-local',
        },
      },
      {
        input: 'test',
        output: {
          yuptype: 'mixed',
          message: 'Insira caracteres válidos',
          type: 'text',
        },
      },
    ]

    values.forEach((n) => {
      it(`should handle ${n.input}`, () => {
        expect(getType(n.input)).toStrictEqual(n.output)
      })
    })
  })

  describe('createYupFieldSchema', () => {
    it(`should handle mixed type`, () => {
      const id = test
      const newSchema = createYupFieldSchema({}, { id })

      expect(newSchema[id].type).toBe('mixed')
    })

    it(`should handle integer type`, () => {
      const id = test
      const validation = {
        primitiveType: 'INTEGER',
      }
      const newSchema = createYupFieldSchema({}, { id, validation })

      expect(newSchema[id].type).toBe('number')
    })

    it(`should handle date type`, () => {
      const id = test
      const validation = {
        primitiveType: 'STRING',
        entityType: 'DATE_TIME',
        format: 'yyyy',
      }

      const newSchema = createYupFieldSchema({}, { id, validation })

      expect(newSchema[id].type).toBe('date')
    })
  })
})
