import React from 'react';
import { shallow } from 'enzyme';
import Auth from './Auth';

function render(props) {
  const defaultProps = {
    token: '',
    setupToken: () => { },
    error: false,
    history: {},
  };

  return shallow(<Auth {...{ ...defaultProps, ...props }} />);
}

describe('Routes/Auth/components/Auth', () => {
  test('should call setupToken prop if code query param is present in the URL', () => {
    const code = 'huehuehue'
    window.history.pushState({}, 'Foo', `/foo/?code=${code}`);
    const setupToken = jest.fn();
    const wrapper = render({ setupToken });
    expect(setupToken).toHaveBeenCalledWith(code);
    expect(wrapper.find('#loading').exists()).toBe(true);
  });

  test('should call history.push prop in case of a new token fetched', () => {
    window.history.pushState({}, 'Foo', '/foo/?code=foo');
    const history = { push: jest.fn() };
    const wrapper = render({ history });
    wrapper.setProps({ token: 'foo' });
    expect(history.push).toHaveBeenCalledWith('/showplaylists');
  })

  test('should render error component in case of request error', () => {
    window.history.pushState({}, 'Foo', '/foo/?code=foo');
    const wrapper = render();
    wrapper.setProps({ error: {}});
    expect(wrapper.find('#error').exists()).toBe(true);
  })
});
