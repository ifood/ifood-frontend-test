import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Input from './Input';

const defaultProps = {
  name: 'field-name',
  type: 'STRING',
  validation: {},
  placeholder: 'any placeholder!',
  onChange: () => {},
  value: ''
}

describe('<Input />', () => {

  it('Should render correctly', () => {
    const elem = renderer
      .create(<Input { ...defaultProps } />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('Should render correctly with pattern', () => {
    const pattern = 'dd/MM/yyyy';
    const elem = shallow(<Input { ...defaultProps } validation={{ pattern }} />);
    expect(elem.props().mask).toBe(pattern);
  });

  it('Should call onChange prop', () => {
    const onChange = jest.fn();
    const elem = shallow(<Input { ...defaultProps } onChange={onChange} />);
    elem.simulate('change', { target: { value: "value" }})
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Should NOT call onChange prop if validation is wrong', () => {
    const onChange = jest.fn();
    const elem = shallow(
      <Input
        { ...defaultProps }
        onChange={onChange}
        type="INTEGER"
        validation={{ min: 1 }}
      />
    );
    elem.simulate('change', { target: { value: 0 }})
    expect(onChange).toHaveBeenCalledTimes(0);
  });

});

