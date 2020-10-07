import React from 'react';

import { Filter } from 'containers/filter';
import { CardList } from 'containers/cardlist';
import { PlaylistStore } from 'store/play-list-store';

export const Playlist: React.FC = () => {
  return (
    <>
      <PlaylistStore>
        <Filter />
        <CardList />
      </PlaylistStore>
    </>
  );
};
