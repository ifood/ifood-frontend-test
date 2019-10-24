import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DynamicFields from './DynamicFields';

const defaultProps = {
  onChange: () => {},
  formData: {},
  fields: [{
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

describe('<DynamicFields />', () => {

  it('Should render correctly', () => {
    const elem = renderer
      .create(<DynamicFields { ...defaultProps } />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('Should render nothing', () => {
    const elem = shallow(<DynamicFields { ...defaultProps } fields={[]} />);
    expect(elem.children().exists()).toBeFalsy();
  });

});

