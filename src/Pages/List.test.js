import React from 'react';
import { shallow } from 'enzyme';

import { getPlaylists } from '../services/spotifyServices';
import List from './List';

jest.mock('../services/spotifyServices');

describe('<List />', () => {
  it('should get list of playlists', () => {
    const list = shallow((
      <List />
    ));

    const spyCallPlaylistService = jest.spyOn(list.instance(), 'callPlaylistService');

    list.instance().componentDidMount();
    expect(spyCallPlaylistService).toBeCalled();
    expect(getPlaylists).toBeCalled();
  });
});
