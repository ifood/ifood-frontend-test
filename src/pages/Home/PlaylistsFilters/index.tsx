import React, { useState, useEffect, memo } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import PlaylistsFiltersApi from '../../../services/playlistFilters';

import FilterField, { FilterFieldProps } from '../../../components/FilterField';
import Drawer from '../../../components/Drawer';

import { Form } from './styles';

interface PlaylistsFiltersProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaylistsFilters: React.FC<PlaylistsFiltersProps> = ({ mobileOpen, setMobileOpen }) => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState([] as FilterFieldProps[]);

  const getFilters = async () => {
    setLoading(true);

    try {
      const filtersData = await PlaylistsFiltersApi.get();
      setFilters(filtersData);
    } catch (error) {
      // show error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilters();
  }, []);

  return (
    <Drawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
      {loading && <LinearProgress />}
      <Form noValidate autoComplete="off">
        {filters?.map((filter: FilterFieldProps) => (
          <FilterField key={filter.id} {...filter} value={undefined} />
        ))}
      </Form>
    </Drawer>
  );
};

export default memo(PlaylistsFilters);
