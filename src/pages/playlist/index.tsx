import React, { useState, useEffect } from 'react';
import { getFilterData } from 'services/api';
import { Filter } from 'containers/filter';

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
      <h1>Playlist</h1>
      <Filter item={filterData} />
    </>
  );
};
