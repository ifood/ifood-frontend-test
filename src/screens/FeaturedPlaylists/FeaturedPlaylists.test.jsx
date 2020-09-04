import React from 'react';
import { mount } from 'enzyme';
import Axios from 'axios';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

import FeaturedPlaylists from './FeaturedPlaylists';

jest.mock('../../hooks');

const get = () => {
  return new Promise((resolve) => {
    resolve({ data: { filters: [] } });
  });
};
Axios.get.mockImplementation(get);

describe('<FeaturedPlaylists />', () => {
  it('snapshot', async () => {
    const wrapper = mount(<FeaturedPlaylists />);
    await act(async () => wrapper);
    wrapper.update();
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
