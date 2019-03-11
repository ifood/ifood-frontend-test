import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

it('renders without crashing', () => {
  shallow(<Login />);
});