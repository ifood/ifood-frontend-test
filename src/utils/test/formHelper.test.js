import { shallow } from 'enzyme'
import { mockFormikProps } from '../testHelper'
import { createInitialValues, createFormField } from '../formHelper'

describe('formHelper', () => {
  describe('createInitialValues', () => {
    it('should return an empty object', () => {
      expect(createInitialValues([])).toStrictEqual({})
    })

    it('should return a filled object', () => {
      expect(
        createInitialValues([{ id: 'test' }, { id: 'test1' }])
      ).toStrictEqual({
        test: '',
        test1: '',
      })
    })
  })

  describe('createFormField', () => {
    it('should return nothing', () => {
      expect(createFormField({})).toStrictEqual(undefined)
    })

    describe('render select field', () => {
      const select = {
        id: 'test',
        name: 'testName',
        values: [{ value: 'option', name: 'option' }],
      }

      const selectField = shallow(
        createFormField({
          fieldData: select,
          formikProps: mockFormikProps,
        })
      )

      it('should return select field', () => {
        expect(selectField.props().select).toBe(true)
      })

      it('should render with right name', () => {
        expect(selectField.find('[name="advanced.test"]').exists()).toBe(true)
      })
    })

    describe('render text field', () => {
      const text = {
        id: 'test',
        name: 'testName',
        validation: {
          primitiveType: 'STRING',
        },
      }

      const textField = shallow(
        createFormField({
          fieldData: text,
          formikProps: mockFormikProps,
        })
      )

      it('should return date field', () => {
        expect(textField.props().select).toBe(false)
      })

      it('should render with right name', () => {
        expect(textField.find('[name="advanced.test"]').exists()).toBe(true)
      })
    })

    describe('render time field', () => {
      const date = {
        id: 'test',
        type: 'datetime-local',
        name: 'testName',
        validation: {
          primitiveType: 'STRING',
          entityType: 'DATE_TIME',
          pattern: 'yyyy',
        },
      }

      const timeField = shallow(
        createFormField({
          fieldData: date,
          formikProps: mockFormikProps,
        })
      )

      it('should return date field', () => {
        expect(timeField.find('[minDate]').exists()).toBe(true)
      })

      it('should render with right name', () => {
        expect(timeField.find('[name="advanced.test"]').exists()).toBe(true)
      })
    })
  })
})
