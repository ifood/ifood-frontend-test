/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaylistGrid from './PlaylistGrid';

describe('<PlaylistGrid />', () => {
  it('snapshot', async () => {
    const wrapper = mount(<PlaylistGrid />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
