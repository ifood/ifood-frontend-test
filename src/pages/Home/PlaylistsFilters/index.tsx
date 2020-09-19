import React, { useState, useEffect, memo } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import PlaylistsFiltersApi from '../../../services/playlistFilters';

import FilterField, { FilterFieldProps } from '../../../components/FilterField';
import Drawer from '../../../components/Drawer';
import Logo from '../../../components/Logo';

import Form from './styles';
import { useFeaturedPlaylist } from '../../../hooks/featuredPlaylists';

interface PlaylistsFiltersProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaylistsFilters: React.FC<PlaylistsFiltersProps> = ({ mobileOpen, setMobileOpen }) => {
  const [loading, setLoading] = useState(false);
  const [filtersField, setFiltersField] = useState([] as FilterFieldProps[]);

  const { filter, setFilter } = useFeaturedPlaylist();

  const getFilters = async () => {
    setLoading(true);

    try {
      const filtersData = await PlaylistsFiltersApi.get();
      setFiltersField(filtersData);
    } catch (error) {
      // show error
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (id: string, value: string | number) => {
    const newFilter = {
      ...filter,
      [id]: value,
    };

    setFilter(newFilter);
  };

  useEffect(() => {
    getFilters();
  }, []);

  return (
    <Drawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
      {loading && <LinearProgress />}
      <Form noValidate autoComplete="off">
        <Logo width="180px" color="red" />

        {filtersField?.map((filterField: FilterFieldProps) => (
          <FilterField
            key={filterField.id}
            {...filterField}
            onChange={(value) => handleChange(filterField.id, value)}
          />
        ))}
      </Form>
    </Drawer>
  );
};

export default memo(PlaylistsFilters);
