import React from "react";
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button component', () => {
  it('Renders without crashing', () => {
    const label = 'Click me';
    const wrapper = shallow(<Button label={label} />);
    expect(wrapper.text().includes(label)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders with classname', () => {
    const className = 'my-class';
    const wrapper = shallow(<Button label="Click me" className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
