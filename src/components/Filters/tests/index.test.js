import React from 'react'
import { shallow } from 'enzyme'

import Filters from '../index'
import Select from '../../Select'
import Input from '../../Input'

describe('<Filters />', () => {
  const props = {
    filtersList: [],
    handleFilters: jest.fn(),
  }
  const shallowRender = (localProps = props) => shallow(<Filters {...localProps} />)

  it('should render the component correctly with empty filtersList', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('#name').length).toEqual(1)
  })

  it('should render a select if there is a filter in the list in `values` property', () => {
    const localProps = {
      ...props,
      filtersList: [{
        id: 'select-test',
        name: 'Select Test',
        values: [{ value: 'value', name: 'Value' }],
      }],
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('#name').length).toEqual(1)
    expect(renderedComponent.find(Select).length).toEqual(1)
  })

  it('should render an Input with type datetime-local if there is a filter with validation entityType = DATE_TIME', () => {
    const localProps = {
      ...props,
      filtersList: [{
        id: 'date_time-test',
        name: 'Date Time Test',
        validation: {
          entityType: 'DATE_TIME',
        },
      }],
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('#name').length).toEqual(1)
    expect(renderedComponent.find(Input).at(0).props().type).toEqual('datetime-local')
  })

  it('should render an Input with type number if there is a filter with validation primitiveType = INTEGER', () => {
    const localProps = {
      ...props,
      filtersList: [{
        id: 'number-test',
        name: 'Number Test',
        validation: {
          primitiveType: 'INTEGER',
        },
      }],
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('#name').length).toEqual(1)
    expect(renderedComponent.find(Input).at(0).props().type).toEqual('number')
  })

  describe('onFilterChange', () => {
    it('should call handleFilters when triggering Input/Select onChange', () => {
      const localProps = {
        ...props,
        filtersList: [{
          id: 'input-test',
        }],
      }
      const event = { target: { value: 'value' } }
      const renderedComponent = shallowRender(localProps)
      renderedComponent.find(Input).at(0).simulate('change', event, 'input-test')
      expect(localProps.handleFilters).toHaveBeenCalledWith('input-test', 'value')
    })

    it('should call handleFilters with value normalized if filter has validation for DATE_TIME', () => {
      const localProps = {
        ...props,
        filtersList: [{
          id: 'input-test',
          validation: {
            entityType: 'DATE_TIME',
          },
        }],
      }
      const dateValue = '2014-10-23T09:00'
      const event = { target: { value: dateValue } }
      const renderedComponent = shallowRender(localProps)
      renderedComponent.find(Input).at(0).simulate('change', event, 'input-test', localProps.filtersList[0].validation)
      expect(localProps.handleFilters).toHaveBeenCalledWith('input-test', new Date(dateValue).toISOString())
    })
  })
})
