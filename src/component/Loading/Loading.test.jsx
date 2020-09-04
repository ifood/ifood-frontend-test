import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from './Loading';

describe('<Loading />', () => {
  it('snapshot', () => {
    const loading = mount(<Loading />);
    jestExpect(toJson(loading)).toMatchSnapshot();
  });
});
