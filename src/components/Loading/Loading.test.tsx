import React from "react";
import { shallow } from 'enzyme';
import { Loading } from './Loading';

describe('Loading component', () => {
  it('Renders without crashing', () => {
    const size = { width: 300, height: 300 };
    const wrapper = shallow(<Loading {...size} />);
    expect(wrapper.find(`[height=${size.height}]`)).toHaveLength(1);
    expect(wrapper.find(`[width=${size.width}]`)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
