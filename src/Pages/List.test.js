import React from 'react';
import { shallow } from 'enzyme';

import { getPlaylists } from '../services/spotifyServices';
import { RawList } from './List';

jest.mock('../services/spotifyServices');

describe('<List />', () => {
  it('should get a list of playlists and set interval to get more after third seconds', () => {
    const list = shallow((
      <RawList />
    ));

    list.instance().componentDidMount();
    list.update();

    expect(list.state().intervalId).toBeDefined();
    expect(getPlaylists).toBeCalled();
  });
});
