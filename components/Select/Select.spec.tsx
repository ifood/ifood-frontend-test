import React from 'react';
import { mount } from 'enzyme';

import Select from './Select';

const options = [
  {
    name: '1',
    value: '1',
  },
  {
    name: '2',
    value: '2',
  },
  {
    name: '3',
    value: '3',
  },
];

describe('Components', () => {
  describe('Select', () => {
    it('should render without throwing an error', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <Select
          id="select"
          options={options}
          name="teste"
          onChange={mockOnChange}
        />,
      );

      expect(wrapper.find('label').text()).toBe('teste');
      expect(wrapper.find('select')).toBeTruthy();
      // Select should have a default option + all the passed options
      expect(wrapper.find('select').children().length).toBe(options.length + 1);
    });
  });
});
