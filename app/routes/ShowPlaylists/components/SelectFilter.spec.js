import React from 'react';
import { shallow } from 'enzyme';
import SelectFilter from './SelectFilter';

describe('Routes/ShowPlaylists/components/SelectFilter', () => {
  test('should render a SelectFilter component', () => {
    const id = 'foo';
    const intl = { formatMessage: () => '' }
    const values = [
      { name: 'foo', value: 'foo'},
      { name: 'bar', value: 'bar'},
    ];
    const wrapper = shallow(<SelectFilter
      values={values}
      id={id}
      label={'foo'}
      value={''}
      onChange={() => { }}
      intl={intl}
    />);
    expect(wrapper.find(`#${id}`).exists()).toBe(true);
  });
});
