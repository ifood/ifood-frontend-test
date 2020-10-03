/* eslint-disable no-undef, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from './Loading';

describe('<Loading />', () => {
  it('snapshot', () => {
    const wrapper = mount(<Loading />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
