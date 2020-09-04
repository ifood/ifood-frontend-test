import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

jest.mock('./core/AuthorizationContext', () => ({
  __esModule: true,
  default: {
    /* eslint-disable-next-line  */
    Provider: ({ children }) => <div>{children}</div>,
  },
}));

describe('<App />', () => {
  it('snapshot', () => {
    const wrapper = mount(<App />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });
});
