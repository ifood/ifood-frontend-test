/* eslint-disable no-undef, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaylistView from './PlaylistView';

describe('<PlaylistView />', () => {
  it('snapshot', async () => {
    const wrapper = mount(<PlaylistView />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
