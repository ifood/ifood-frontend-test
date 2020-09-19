import React, {
  useState,
  useEffect,
  memo,
  useCallback,
} from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import { useSnackbar } from 'notistack';

import PlaylistsFiltersApi from '../../../services/playlistFilters';

import FilterField, { FilterFieldProps } from '../../../components/FilterField';
import Drawer from '../../../components/Drawer';
import Logo from '../../../components/Logo';

import { useFeaturedPlaylist } from '../../../hooks/featuredPlaylists';

import { Form, EmptyState } from './styles';

interface PlaylistsFiltersProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaylistsFilters: React.FC<PlaylistsFiltersProps> = ({ mobileOpen, setMobileOpen }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  const [filtersField, setFiltersField] = useState([] as FilterFieldProps[]);

  const { filter, setFilter } = useFeaturedPlaylist();

  const getFilters = useCallback(async () => {
    setLoading(true);

    try {
      const filtersData = await PlaylistsFiltersApi.get();
      setFiltersField(filtersData);
    } catch (_) {
      enqueueSnackbar('Ops! Não conseguimos buscar os filtros', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  }, [enqueueSnackbar]);

  const handleChange = (id: string, value: string | number) => {
    const newFilter = {
      ...filter,
      [id]: value,
    };

    setFilter(newFilter);
  };

  const getEmptyState = () => {
    if (loading || filtersField?.length) {
      return null;
    }

    return (
      <EmptyState>
        Nenhum filtro encontrado.
      </EmptyState>
    );
  };

  const mapFiltersField = () => (
    filtersField?.map((filterField: FilterFieldProps) => (
      <FilterField
        key={filterField.id}
        {...filterField}
        onChange={(value) => handleChange(filterField.id, value)}
      />
    ))
  );

  useEffect(() => {
    getFilters();
  }, [getFilters]);

  return (
    <Drawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
      {loading && <LinearProgress />}
      <Form noValidate autoComplete="off">
        <Logo width="180px" color="red" />

        {getEmptyState()}

        {mapFiltersField()}
      </Form>
    </Drawer>
  );
};

export default memo(PlaylistsFilters);
