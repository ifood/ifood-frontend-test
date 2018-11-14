import React from 'react';
import { shallow } from 'enzyme';
import NameFilter from './NameFilter';

describe('Routes/ShowPlaylists/components/NameFilter', () => {
  test('should render a NameFilter component', () => {
    const intl = { formatMessage: () => { } };
    const wrapper = shallow(<NameFilter
      intl={intl}
      onChange={() => { }}
    />);
    expect(wrapper.find('#inputName').exists()).toBe(true);
  });

});
