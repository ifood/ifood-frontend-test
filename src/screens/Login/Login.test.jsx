import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';
import { authorize } from './LoginLogic';

jest.mock('./LoginLogic');

describe('<Login />', () => {
  it('snapshot', async () => {
    const wrapper = mount(<Login />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call LoginLogic.authorize when button is clicked', async () => {
    const wrapper = mount(<Login />);
    wrapper.find('button').simulate('click');
    expect(authorize.mock.calls).to.have.lengthOf(1);
  });
});
