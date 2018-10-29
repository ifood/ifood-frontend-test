import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaylistGrid from './PlaylistGrid';

describe('<PlaylistGrid />', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.props = {
      playlists: [
        {
          name: 'playlist name1',
          owner: {
            display_name: 'some name 1',
          },
          images: [
            {
              url: 'some.url',
              width: 300,
              height: 300,
            },
          ],
          external_urls: {
            spotify: 'spotify url',
          },
        },
        {
          name: 'playlist name2',
          owner: {
            display_name: 'some name 2',
          },
          images: [
            {
              url: 'some.url2',
              width: 300,
              height: 300,
            },
          ],
          external_urls: {
            spotify: 'spotify url2',
          },
        },
      ],
    };
  });

  describe('render()', () => {
    it('renders the content correctly', () => {
      const wrapper = shallow(<PlaylistGrid {...mocks.props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('componentDidMount()', () => {
    it('should call evaluateColumnsNumber with expected parameters', () => {
      const wrapper = shallow(<PlaylistGrid {...mocks.props} />);
      wrapper.instance().evaluateColumnsNumber = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().evaluateColumnsNumber).toHaveBeenCalledWith();
    });

    it('should call window.addEventListener with expected parameters', () => {
      const wrapper = shallow(<PlaylistGrid {...mocks.props} />);
      const spy = jest.spyOn(window, 'addEventListener');
      wrapper.instance().componentDidMount();
      expect(spy).toHaveBeenCalledWith('resize', wrapper.instance().evaluateColumnsNumber);
    });
  });

  describe('componentWillUnmount()', () => {
    it('should call window.removeEventListener with expected parameters', () => {
      const wrapper = shallow(<PlaylistGrid {...mocks.props} />);
      const spy = jest.spyOn(window, 'removeEventListener');
      wrapper.instance().componentWillUnmount();
      expect(spy).toHaveBeenCalledWith('resize', wrapper.instance().evaluateColumnsNumber);
    });
  });

  describe('evaluateColumnsNumber()', () => {
    it('should call setState with expected params when width > 300', () => {
      const wrapper = shallow(<PlaylistGrid {...mocks.props} />);
      wrapper.instance().setState = jest.fn();
      window.innerWidth = 600;
      wrapper.instance().evaluateColumnsNumber();
      expect(wrapper.instance().setState).toHaveBeenCalledWith({ columns: 2 });
    });

    it('should call setState with expected params when width < 300', () => {
      const wrapper = shallow(<PlaylistGrid {...mocks.props} />);
      wrapper.instance().setState = jest.fn();
      window.innerWidth = 250;
      wrapper.instance().evaluateColumnsNumber();
      expect(wrapper.instance().setState).toHaveBeenCalledWith({ columns: 1 });
    });
  });
});
