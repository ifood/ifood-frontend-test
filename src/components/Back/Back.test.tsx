import React from "react";
import { shallow } from 'enzyme';
import { Back } from './Back';

describe('Back component', () => {
  it('Renders without crashing', () => {
    const size = { width: 300, height: 300 };
    const wrapper = shallow(<Back {...size} onClick={() => { }} />);
    expect(wrapper.find(`[height=${size.height}]`)).toHaveLength(1);
    expect(wrapper.find(`[width=${size.width}]`)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders with classname', () => {
    const className = 'my-class';
    const wrapper = shallow(
      <Back width={300} height={300} className={className} onClick={() => { }} />
    );
    expect(wrapper.hasClass(className)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should handle the click event', () => {
    window.alert = jest.fn();
    const callAlert = () => alert('clicked');
    const wrapper = shallow(
      <Back width={300} height={300} onClick={callAlert} />
    );
    wrapper.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked');
  });
});
