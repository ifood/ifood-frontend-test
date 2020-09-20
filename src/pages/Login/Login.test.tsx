import React from 'react';

import { mount } from 'enzyme';

import Login from '.';
import SpotifyButton from '../../components/SpotifyButton';

describe('Login', () => {
  const { location } = window;

  beforeAll(() => {
    // @ts-ignore
    delete window.location;

    // @ts-ignore
    window.location = {};
  });

  afterAll((): void => {
    window.location = location;
  });

  it('should redirect to login', () => {
    const wrapper = mount(<Login />);

    const regex = /accounts\.spotify\.com\/authorize/;

    wrapper.find(SpotifyButton).simulate('click');

    expect(regex.test(window.location.href)).toBeTruthy();
  });
});
