import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Playlists from './playlists';
import Filters from '../../components/filters-playlist/filters-playlist.js';
import List from '../../components/list-playlist/list-playlist.js';
import Header from '../header/header';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import axios from "axios";
import playlistDataMock from '../../__mocks__/playlistDataMock';

configure({ adapter: new EnzymeAdapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Playlists />)
});

it('renders Playlists without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Playlists />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Filters without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filters />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders List without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('initial state should be', () => {
  expect(wrapper.state()).toEqual({
    filters: undefined,
    playlistItems: undefined,
    playlists: [],
    limits: [],
    params: {},
    itemsByPage: undefined,
    nameSearch: '',
    offset: undefined,
    alert: false,
    alertMessage: ''
  })
})

it('call componentDidMount method', () => {
  jest.spyOn(Playlists.prototype, 'componentDidMount');
  shallow(<Playlists />);
  expect(Playlists.prototype.componentDidMount).toHaveBeenCalled();
  Playlists.prototype.componentDidMount.mockRestore();
});

it('call getToken method', () => {
  jest.spyOn(Playlists.prototype, 'getToken');
  shallow(<Playlists />);
  expect(Playlists.prototype.getToken).toHaveBeenCalled();
  Playlists.prototype.getToken.mockRestore();
});

it('Should accept playlists and items props', () => {
  const wrapper = shallow(<List items={playlistDataMock.mockPlaylistsItems} playlists={playlistDataMock.mockPlaylists} />);
  expect(wrapper.instance().props.playlists).toBe(playlistDataMock.mockPlaylists);
  expect(wrapper.instance().props.items).toBe(playlistDataMock.mockPlaylistsItems);
});

it('Should accept filters props', () => {
  const wrapper = shallow(<Filters filters={playlistDataMock.mockFilters} />);
  expect(wrapper.instance().props.filters).toBe(playlistDataMock.mockFilters);
});

it('should fetch a list of playlists', () => {
  const instance = wrapper.instance();
  expect(wrapper.state('playlists')).toEqual(expect.arrayContaining([]));
  instance.getPlaylists();
  const getSpy = jest.spyOn(axios, 'get');
  expect(getSpy).toBeCalled();
});

it('getPlaylists should fetch a list of playlists', () => {
  const instance = wrapper.instance();
  instance.getPlaylists();
  const getSpy = jest.spyOn(axios, 'get');
  expect(getSpy).toBeCalled();
});

it('getFilters should fetch a list of filters', () => {
  const instance = wrapper.instance();
  instance.getFilters();
  const getSpy = jest.spyOn(axios, 'get');
  expect(getSpy).toBeCalled();
});


