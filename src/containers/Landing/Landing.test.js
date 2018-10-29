import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Landing, { RawLanding } from './Landing';

describe('<Landing />', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.props = {
      width: 'xs',
    };
  });

  describe('render()', () => {
    it('renders the content correctly', () => {
      const wrapper = shallow(<Landing />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call getFontSize', () => {
      const wrapper = shallow(<RawLanding width="xs" />);
      wrapper.instance().getFontSize = jest.fn();
      wrapper.setProps({ width: 'lg' });
      expect(wrapper.instance().getFontSize).toHaveBeenCalledWith();
    });
  });

  describe('getFontSize()', () => {
    it('should return the correct for size for xs width', () => {
      const wrapper = shallow(<RawLanding {...mocks.props} />);
      wrapper.setProps({ width: 'xs' });
      const fontSize = wrapper.instance().getFontSize();
      expect(fontSize).toEqual('4rem');
    });

    it('should return the correct for size for sm width', () => {
      const wrapper = shallow(<RawLanding {...mocks.props} />);
      wrapper.setProps({ width: 'sm' });
      const fontSize = wrapper.instance().getFontSize();
      expect(fontSize).toEqual('4rem');
    });

    it('should return the correct for size for md width', () => {
      const wrapper = shallow(<RawLanding {...mocks.props} />);
      wrapper.setProps({ width: 'md' });
      const fontSize = wrapper.instance().getFontSize();
      expect(fontSize).toEqual('6rem');
    });

    it('should return the correct for size for lg width', () => {
      const wrapper = shallow(<RawLanding {...mocks.props} />);
      wrapper.setProps({ width: 'lg' });
      const fontSize = wrapper.instance().getFontSize();
      expect(fontSize).toEqual('6rem');
    });

    it('should return the correct for size for xl width', () => {
      const wrapper = shallow(<RawLanding {...mocks.props} />);
      wrapper.setProps({ width: 'xl' });
      const fontSize = wrapper.instance().getFontSize();
      expect(fontSize).toEqual('6rem');
    });

    it('should return the correct for size for any invalid width', () => {
      const wrapper = shallow(<RawLanding {...mocks.props} />);
      wrapper.setProps({ width: 'invalidvalue' });
      const fontSize = wrapper.instance().getFontSize();
      expect(fontSize).toEqual('6rem');
    });
  });
});
