import * as React from 'react';
import { mount } from 'enzyme';
import IndexPage from './index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<IndexPage />);
      expect(1 + 1).toBe(2);
    });
  });
});
