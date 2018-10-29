import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import cloneDeep from 'lodash/cloneDeep';
import { Playlists } from './Playlists';
import { REFRESH_INTERVAL } from './Playlists.constants';

describe('<Playlists />', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.props = {
      fetchPlayLists: jest.fn(),
      fetchFiltersMetadata: jest.fn(),
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
      metaFilters: [{
        id: 'locale',
        name: 'Locale',
        values: [{
          value: 'en_AU',
          name: 'en_AU',
        },
        {
          value: 'de_DE',
          name: 'de_DE ',
        },
        {
          value: 'pt_BR',
          name: 'pt_BR',
        },
        {
          value: 'fr_FR',
          name: 'fr_FR',
        },
        {
          value: 'en_US',
          name: 'en_US',
        },
        {
          value: 'es_AR',
          name: 'es_AR',
        }],
      },
      {
        id: 'country',
        name: 'País',
        values: [
          {
            value: 'AU',
            name: 'Australia',
          },
          {
            value: 'DE',
            name: 'Alemanhã',
          },
          {
            value: 'BR',
            name: 'Brasil',
          },
          {
            value: 'PT',
            name: 'Portugal',
          },
          {
            value: 'en_US',
            name: 'EUA',
          },
          {
            value: 'RU',
            name: 'Rússia',
          },
        ],
      },
      {
        id: 'timestamp',
        name: 'Data e Horário',
        validation: {
          primitiveType: 'STRING',
          entityType: 'DATE_TIME',
          pattern: 'yyyy-MM-ddTHH:mm:ss',
        },
      },
      {
        id: 'limit',
        name: 'Quantidade',
        validation: {
          primitiveType: 'INTEGER',
          min: 1,
          max: 50,
        },
      },
      {
        id: 'offset',
        name: 'Página',
        validation: {
          primitiveType: 'INTEGER',
        },
      }],
      isLoadingPlaylists: false,
    };
  });

  describe('render()', () => {
    it('renders the content correctly when there is data', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.setState({ filteredPlaylists: mocks.props.playlists });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the content correctly when data is loading', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.setProps({ isLoadingPlaylists: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the content correctly when there is no data', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.setState({ filteredPlaylists: [] });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call renderPlaylistGrid with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().renderPlaylistGrid = jest.fn();
      wrapper.setProps({ playlists: mocks.props.playlists });
      expect(wrapper.instance().renderPlaylistGrid).toHaveBeenCalledWith();
    });
  });

  describe('componentDidMount()', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it('should call setInterval with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().componentDidMount();
      expect(setInterval).toHaveBeenCalledWith(mocks.props.fetchPlayLists, REFRESH_INTERVAL);
    });

    it('should call fetchPlayLists with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().componentDidMount();
      expect(mocks.props.fetchPlayLists).toHaveBeenCalledWith();
    });

    it('should call fetchFiltersMetadata with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().componentDidMount();
      expect(mocks.props.fetchFiltersMetadata).toHaveBeenCalledWith();
    });

    it('should call setState with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().setState = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().setState).toHaveBeenCalledWith({ intervalId: expect.any(Number) });
    });

    it('should call fetchPlayLists after 30 seconds', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().componentDidMount();
      jest.advanceTimersByTime(30000);
      expect(mocks.props.fetchPlayLists).toHaveBeenCalledTimes(4);
    });
  });

  describe('componentWillReceiveProps()', () => {
    it('should call filterByText with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      const newPlaylists = cloneDeep(mocks.props.playlists);
      newPlaylists.name = 'changed name';

      wrapper.instance().filterByText = jest.fn(() => []);
      wrapper.instance().componentWillReceiveProps({ playlists: newPlaylists });
      expect(wrapper.instance().filterByText).toHaveBeenCalledWith(newPlaylists, wrapper.state('searchTerm'));
    });

    it('should call setState with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      const newPlaylists = cloneDeep(mocks.props.playlists);
      newPlaylists.name = 'changed name';

      wrapper.instance().setState = jest.fn();
      wrapper.instance().filterByText = jest.fn(() => newPlaylists);
      wrapper.instance().componentWillReceiveProps({ playlists: newPlaylists });
      expect(wrapper.instance().setState).toHaveBeenCalledWith({ filteredPlaylists: newPlaylists });
    });
  });

  describe('componentWillUnmount()', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it('should call clearInterval with expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().componentWillUnmount();
      expect(clearInterval).toHaveBeenCalledWith(wrapper.state('intervalId'));
    });
  });

  describe('filterByText()', () => {
    it('should call return the same array if searchTerm is empty', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      const returnedPlaylists = wrapper.instance().filterByText(mocks.props.playlists, '');
      expect(returnedPlaylists).toMatchSnapshot();
    });

    it('should call return the filtered array if searchTerm is not empty', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      const returnedPlaylists = wrapper.instance().filterByText(mocks.props.playlists, 'playlist name2');
      expect(returnedPlaylists).toMatchSnapshot();
    });
  });

  describe('onFiltersChange()', () => {
    it('should call fetchPlayLists with expected not empty parameters', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().onFiltersChange({ locale: 'pt_BR' });
      expect(mocks.props.fetchPlayLists).toHaveBeenCalledWith({ locale: 'pt_BR' });
    });

    it('should call fetchPlayLists with no empty parameters', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().onFiltersChange({});
      expect(mocks.props.fetchPlayLists).toHaveBeenCalledWith();
    });
  });

  describe('onSearchChange()', () => {
    it('should call filterByText if there are playlists', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().filterByText = jest.fn(() => []);
      wrapper.instance().onSearchChange('anything');
      expect(wrapper.instance().filterByText).toHaveBeenCalledWith(mocks.props.playlists, wrapper.state('searchTerm'));
    });

    it('should not call filterByText if there are playlists', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.setProps({ playlists: [] });
      wrapper.instance().filterByText = jest.fn(() => []);
      wrapper.instance().onSearchChange('anything');
      expect(wrapper.instance().filterByText).not.toHaveBeenCalled();
    });

    it('should call setState expected params', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.instance().setState = jest.fn();
      wrapper.instance().filterByText = jest.fn(() => []);
      wrapper.instance().onSearchChange('anything');
      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        searchTerm: 'anything',
        filteredPlaylists: [],
      });
    });
  });

  describe('renderPlaylistGrid()', () => {
    it('should return the expected content when the data is loading', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.setProps({ isLoadingPlaylists: true });
      const content = wrapper.instance().renderPlaylistGrid();
      expect(content).toMatchSnapshot();
    });

    it('should return the expected content when the data is empty', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.setState({ filteredPlaylists: [] });
      const content = wrapper.instance().renderPlaylistGrid();
      expect(content).toMatchSnapshot();
    });

    it('should return the expected content when the data is present', () => {
      const wrapper = shallow(<Playlists {...mocks.props} />);
      wrapper.setState({ filteredPlaylists: mocks.props.playlists });
      const content = wrapper.instance().renderPlaylistGrid();
      expect(content).toMatchSnapshot();
    });
  });
});
