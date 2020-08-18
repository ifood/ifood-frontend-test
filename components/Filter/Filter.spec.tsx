import React from 'react';
import { shallow, mount } from 'enzyme';

import Filter from './Filter';

describe('Components', () => {
  describe('Filter', () => {
    it('should render without throwing an error', () => {
      const filter = {
        id: 'filter',
        name: 'filter',
        validation: {
          primitiveType: 'INTEGER',
          min: 1,
          max: 50,
        },
      };

      const wrapper = shallow(<Filter filter={filter} />);

      expect(wrapper).toBeTruthy();
    });

    it('should render a select when filter has values', () => {
      const filter = {
        id: 'filter',
        name: 'filter',
        values: [
          {
            value: 'Filter 1',
            name: 'Filter 1',
          },
          {
            value: 'Filter 2',
            name: 'Filter 2',
          },
        ],
      };

      const wrapper = mount(<Filter filter={filter} />);

      expect(wrapper.childAt(0).name()).toBe('Select');
    });

    it('should render a date picker when filter has id timestamp', () => {
      const filter = {
        id: 'timestamp',
        name: 'teste',
      };

      const wrapper = mount(<Filter filter={filter} />);

      expect(wrapper.childAt(0).name()).toBe('DateTime');
    });
  });
});
