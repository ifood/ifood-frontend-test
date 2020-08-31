import React from 'react';

import Filter from '.';

import { playlistResponseMocks } from '../../services/utils/mocks/playlist.response';

export default {
    title: 'Components/Filter',
    component: Filter,
    argTypes: {
      backgroundColor: { control: 'color' },
      parameters: '?',
      playlists: playlistResponseMocks
    },
};

const Template = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  parameters: '?',
  playlists: playlistResponseMocks
};