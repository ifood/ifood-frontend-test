import React from 'react';
import { shallow } from 'enzyme';
import InputFilter from './InputFilter';

describe('Routes/ShowPlaylists/components/InputFilter', () => {
  test('should render a InputFilter component', () => {
    const intl = { formatMessage: () => { } };
    const id = 'foo';
    const validation = { primitiveType: 'bar' };
    const wrapper = shallow(<InputFilter
      intl={intl}
      onChange={() => { }}
      id={id}
      label={'foo'}
      validation={validation}
      value={''}
    />);
    expect(wrapper.find(`#${id}`).exists()).toBe(true);
  });
});
