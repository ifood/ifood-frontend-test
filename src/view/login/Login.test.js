/* eslint-disable no-undef, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';

describe('<Login />', () => {
  it('snapshot', () => {
    const wrapper = mount(<Login />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
