import React from 'react';

import { shallow } from 'enzyme';

import Logo from '.';

describe('Logo', () => {
  it('should render white logo', () => {
    const component = shallow(<Logo width="10" />);

    expect(component.props().src.includes('white')).toBeTruthy();
  });

  it('should render black logo', () => {
    const component = shallow(<Logo width="10" color="black" />);

    expect(component.props().src.includes('black')).toBeTruthy();
  });

  it('should render red logo', () => {
    const component = shallow(<Logo width="10" color="red" />);

    expect(component.props().src.includes('red')).toBeTruthy();
  });
});
