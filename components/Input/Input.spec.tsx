import React from 'react';
import { mount } from 'enzyme';

import Input from './Input';

describe('Components', () => {
  describe('Input', () => {
    it('should render without throwing an error', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <Input
          id="input_text"
          name="filter_text"
          label="text"
          onChange={mockOnChange}
        />,
      );
      expect(wrapper.find('label').text()).toBe('text');
      expect(wrapper.find('input')).toBeTruthy();
    });

    it('should render a number input when validation has primitiveType INTEGER', () => {
      const mockOnChange = jest.fn();
      const validation = {
        primitiveType: 'INTEGER',
        min: 1,
        max: 50,
      };
      const wrapper = mount(
        <Input
          validation={validation}
          id="input_text"
          name="filter_text"
          label="text"
          onChange={mockOnChange}
        />,
      );
      expect(wrapper.find('input').props().type).toBe('number');
    });
  });
});
