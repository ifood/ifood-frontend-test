import React, { useState, useEffect } from 'react';
import { getFilterData } from 'services/api-mocky';

import { Filter } from 'containers/filter';
import { CardList } from 'containers/cardlist';
import { PlaylistStore } from 'store/play-list-store';

export const Playlist: React.FC = () => {
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    getFilterData().then((res) => setFilterData(res));
  }, []);

  if (!filterData) {
    return null;
  }

  return (
    <>
      <PlaylistStore>
        <Filter item={filterData} />
        <CardList />
      </PlaylistStore>
    </>
  );
};
