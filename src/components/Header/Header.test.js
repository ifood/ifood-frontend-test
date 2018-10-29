import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('<Header />', () => {
  describe('render()', () => {
    it('renders the content correctly', () => {
      const wrapper = shallow(<Header title="test title" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
