/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaylistError from './PlaylistError';

describe('<PlaylistError />', () => {
  it('snapshot', async () => {
    const wrapper = mount(<PlaylistError />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
