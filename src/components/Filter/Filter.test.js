import React from 'react'
import renderer from 'react-test-renderer';
import Filter from './Filter';

const defaultProps = {
  onSubmit: () => {},
  onFieldChange: () => {},
  formData: {},
  apiFields: [{
    id: 'fieldMask',
    name: 'Field Mask',
    validation: {
      primitiveType: 'STRING',
      pattern: 'dd/MM/yyyy',
      entityType: 'DATE_TIME'
    }
  }, {
    id: 'fieldNumber',
    name: 'Field Number',
    validation: {
      primitiveType: 'INTEGER',
      min: 10,
      max: 30
    }
  }, {
    id: 'fieldSelect',
    name: 'Field Select',
    values: [{
      value: 'item1',
      name: '1st item'
    }, {
      value: 'item2',
      name: '2nd item'
    }]
  }]
}

describe('<Filter />', () => {

  it('Should render correctly', () => {
    const elem = renderer
      .create(<Filter { ...defaultProps } />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

});

