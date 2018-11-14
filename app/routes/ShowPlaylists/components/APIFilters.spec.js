import React from 'react';
import { shallow } from 'enzyme';
import APIFilters from './APIFilters';
import SelectFilter from './SelectFilter';

describe('Routes/ShowPlaylists/components/APIFilters', () => {
  test('should render a SelectFilter if filters prop contains an item with "values" field', () => {
    const intl = { formatMessage: () => { } };
    const filters = [
      {
        id: 'foo',
        name: 'foo',
        values: [] }
    ];
    // trick to make SelectFilter not complaing about missing props;
    const onChange = () => () => {};
    const wrapper = shallow(<APIFilters
      intl={intl}
      onChange={onChange}
      filters={filters}
    />);
    expect(wrapper.find(SelectFilter).exists()).toBe(true);
  });
});
