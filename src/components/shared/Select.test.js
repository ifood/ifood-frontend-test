import React from 'react'
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Select from './Select';

const defaultProps = {
  selectedValue: '',
  name: 'field-name',
  values: [
    { name: 'First item', value: '1' },
    { name: 'Second item', value: '2' },
    { name: 'Third item', value: '3' }
  ],
  initialValue: 'Selecione...',
  onChange: () => {}
}

describe('<Select />', () => {

  it('Should render correctly', () => {
    const elem = renderer
      .create(<Select { ...defaultProps } />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

});

