import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Info from './Info';

describe('<Info />', () => {
  it('snapshot', () => {
    const info = mount(
      <Info icon="content" title="Info title" info="Some important info" />
    );
    jestExpect(toJson(info)).toMatchSnapshot();
  });
});
