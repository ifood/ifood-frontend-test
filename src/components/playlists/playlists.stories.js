import React from 'react';

import Playlists from '.';

import { playlistResponseMocks } from '../../services/utils/mocks/playlist.response';

export default {
  title: 'Components/Playlist',
  component: Playlists,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'Title of the Playlist Component',
    list: playlistResponseMocks.items
  },
};

const Template = (args) => <Playlists {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: playlistResponseMocks.items,
  title: 'Title of the Playlist Component',
};
