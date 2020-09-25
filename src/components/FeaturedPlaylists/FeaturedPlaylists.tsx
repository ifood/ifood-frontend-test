import React, { useCallback, useMemo, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import debounce from 'lodash/debounce';
import { Filter } from '../Filter/Filter';
import { Playlists } from '../Playlists/Playlists';
import { useFeaturedPlaylists, FeaturedPlaylistsParams } from '../../hooks/useFeaturedPlaylists';
import { useStyles } from './FeaturedPlaylists.jss';

export const FeaturedPlaylists: React.FC = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [params, setParams] = useState<FeaturedPlaylistsParams>({});
  const { featuredPlaylists, isLoading, isSuccess, isError } = useFeaturedPlaylists(params);

  const playlists = useMemo(() => {
    if (!featuredPlaylists) {
      return [];
    }
    if (!search) {
      return featuredPlaylists;
    }
    const normalizedSearch = search.toLowerCase();
    return featuredPlaylists.filter((featuredPlaylist) =>
      featuredPlaylist.name.toLowerCase().includes(normalizedSearch)
    );
  }, [featuredPlaylists, search]);

  const handleFilter = useCallback((filters: Record<string, string>) => {
    setParams(filters);
  }, []);

  const handleSearch = useMemo(() => {
    return debounce((text: string) => setSearch(text), 400);
  }, []);

  return (
    <>
      <Filter onFilter={handleFilter} onSearch={handleSearch} />

      {isLoading && (
        <div className={classes.indicator}>
          <CircularProgress color="primary" />
        </div>
      )}

      {isError && (
        <div className={classes.indicator}>
          <Typography>Não foi possível carregar as playlists.</Typography>
        </div>
      )}

      {isSuccess && playlists.length === 0 && (
        <div className={classes.indicator}>
          <Typography>Nenhuma playlist encontrada.</Typography>
        </div>
      )}

      {isSuccess && playlists.length > 0 && <Playlists playlists={playlists} />}
    </>
  );
};
