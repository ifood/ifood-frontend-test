/* eslint-disable no-undef, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('<App />', () => {
  it('snapshot', () => {
    const wrapper = mount(<App />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
