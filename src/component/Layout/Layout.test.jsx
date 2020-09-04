import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Content, Footer, Header, LayoutContainer } from ".";

describe('Layout', () => {
  describe('<Content />', () => {
    it('snapshot', () => {
      const wrapper = mount(<Content />);
      jestExpect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('<Footer />', () => {
    it('snapshot', () => {
      const wrapper = mount(<Footer />);
      jestExpect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('<Header />', () => {
    it('snapshot', () => {
      const wrapper = mount(<Header />);
      jestExpect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('<LayoutContainer />', () => {
    it('snapshot', () => {
      const wrapper = mount(<LayoutContainer />);
      jestExpect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
