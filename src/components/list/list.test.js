import React from 'react';
import { shallow } from 'enzyme';
import List from './list';

it('renders without crashing', () => {
  shallow(<List />);
});