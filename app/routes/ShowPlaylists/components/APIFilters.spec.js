import React from 'react';
import { shallow } from 'enzyme';
import APIFilters from './APIFilters';
import SelectFilter from './SelectFilter';
import InputFilter from './InputFilter';

describe('Routes/ShowPlaylists/components/APIFilters', () => {
  test('should render a SelectFilter if filters prop contains an item with "values" field', () => {
    const intl = { formatMessage: () => { } };
    const filters = [
      {
        id: 'foo',
        name: 'foo',
        values: []
      }
    ];
    // trick to make SelectFilter not complain about missing props;
    const onChange = () => () => { };
    const wrapper = shallow(<APIFilters
      intl={intl}
      onChange={onChange}
      filters={filters}
    />);
    expect(wrapper.find(SelectFilter).exists()).toBe(true);
  });

  test('should render a InputFilter if filters prop contains an item with "validation" field', () => {
    const intl = { formatMessage: () => { } };
    const filters = [
      {
        id: 'foo',
        name: 'foo',
        validation: {
          primitiveType: 'STRING',
        }
      }
    ];
    // trick to make APIFilters not complain about missing props;
    const onChange = () => () => { };
    const wrapper = shallow(<APIFilters
      intl={intl}
      onChange={onChange}
      filters={filters}
    />);
    expect(wrapper.find(InputFilter).exists()).toBe(true);
  });

  test('should render nothing if filters prop is empty', () => {
    const intl = { formatMessage: () => { } };
    // trick to make APIFilters not complain about missing props;
    const wrapper = shallow(<APIFilters
      intl={intl}
      onChange={() => { }}
      filters={[]}
    />);
    expect(wrapper.find(InputFilter).exists()).toBe(false);
    expect(wrapper.find(SelectFilter).exists()).toBe(false);
  })
});
