import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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
});
