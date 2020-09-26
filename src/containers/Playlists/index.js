import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';

import FormInput from '../../components/FormInput';
import { useStateValue } from '../../stores';

const Playlists = () => {
  const [{ data }, refetchPlaylists] = useAxios('/featured-playlists', {
    manual: true,
  });
  const [{ filters }] = useStateValue();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const updatePlaylists = async () => {
      await refetchPlaylists({ params: filters });
    };
    updatePlaylists();

    const interval = setInterval(updatePlaylists, 30000);
    return () => clearInterval(interval);
  }, [refetchPlaylists, filters]);

  const handleSearchInput = ({ value }) => setSearch(value);

  const getPlaylistsFiltered = () => {
    return data.playlists.items.filter((item) => {
      return item.name.toLowerCase().search(search.toLowerCase()) > -1;
    });
  };

  return (
    <>
      <p>
        <strong>Playlists:</strong>
      </p>

      <FormInput
        id="search"
        value={search}
        placeholder="Search playlist"
        onChange={handleSearchInput}
      />

      {data && (
        <ul>
          {getPlaylistsFiltered().map((playlist) => (
            <li key={playlist.id}>{playlist.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Playlists;
