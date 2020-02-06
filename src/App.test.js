import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as accessToken from './utils/accessToken';

const setup = () => shallow(
  <App />,
);

describe('<App/>', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render Login when user do not have access token', async () => {
    const wrapper = setup();

    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('should render Playlists when user has access token', () => {
    accessToken.getAccessToken = jest.fn(() => 'fakeToken');
    const wrapper = setup();

    expect(wrapper.find('Playlists').exists()).toBe(true);
  });
});
