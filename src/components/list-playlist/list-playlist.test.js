import * as React from 'react';
import * as ReactDOM from 'react-dom';
import List from './list-playlist';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import playlistDataMock from '../../__mocks__/playlistDataMock';

configure({ adapter: new EnzymeAdapter() });

let wrapper;
let baseProps = {};

beforeEach(() => {
  baseProps = {
    items: playlistDataMock.mockPlaylistsItems,
    limits: [0, 1, 2, 3, 4, 5],
    setLimit: jest.fn(),
    playlists: playlistDataMock.mockPlaylists
  };
  wrapper = shallow(<List {...baseProps} />)
});

it('renders List without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('change input name and call setNameSearch props', () => {
  wrapper.find('#limit').simulate('change', { target: { value: 0 } });
  expect(baseProps.setLimit).toHaveBeenCalledTimes(1);
});



