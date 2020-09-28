import React from "react";
import { shallow } from 'enzyme';
import { Link } from './Link';

describe('Link component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Link href="www.google.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders with classname', () => {
    const className = 'my-class';
    const wrapper = shallow(<Link href="www.google.com" className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders with children', () => {
    const ChildrenComponent = () => <div>My children component</div>;
    const wrapper = shallow(
      <Link href="www.google.com">
        <ChildrenComponent />
      </Link>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
