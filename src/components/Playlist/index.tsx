import React, { memo } from 'react';

const Playlist: React.FC<any> = ({ name }) => (
  <div>
    {name}
  </div>
);

export default memo(Playlist);
