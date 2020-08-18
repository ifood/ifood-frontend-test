import React from 'react';
import { shallow } from 'enzyme';

import DateTime from './DateTime';

describe('Components', () => {
  describe('DateTime', () => {
    it('should render without throwing an error', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(
        <DateTime id="data" name="data" onChange={mockOnChange} />,
      );

      expect(wrapper).toBeTruthy();
    });
  });
});
