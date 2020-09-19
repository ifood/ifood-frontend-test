import React, { memo } from 'react';

import { PlaylistItem } from '../../services/spotify';

const Playlist: React.FC<PlaylistItem> = ({ name }) => (
  <div>
    {name}
  </div>
);

export default memo(Playlist);
