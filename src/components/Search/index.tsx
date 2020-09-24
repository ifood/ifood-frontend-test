import React, { FormEvent, useCallback, useState } from 'react';
import Filters from '../Filters';

import { usePlaylist } from '../../hooks/playlists';

import * as S from './styles';

const Search: React.FC = () => {
  const [playlist, setPlaylist] = useState('');

  const { filterByName } = usePlaylist();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      filterByName(playlist);
    },
    [filterByName, playlist],
  );

  return (
    <S.Container>
      <Filters />
      <S.FormSearch onSubmit={handleSubmit}>
        <S.SearchBar>
          <input
            type="text"
            placeholder="Playlist"
            onChange={e => setPlaylist(e.target.value)}
          />
          <button type="submit">Search</button>
        </S.SearchBar>
      </S.FormSearch>
    </S.Container>
  );
};

export default Search;
