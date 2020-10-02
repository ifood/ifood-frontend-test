/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useAuthContext } from '../../auth/AuthContext';
import {
  LayoutContainer,
  LayoutContent,
} from '../../component/containers/Containers';
import Header from '../../component/header/Header';
import PlaylistGrid from '../../component/playlist/PlaylistGrid';
import { CHAOTIC_REFRESH, VIEW_STATUS } from '../../Constants';
import FilterResource from '../../resources/FilterResource';
import PlaylistResource from '../../resources/PlaylistResource';
import Loading from '../loading/Loading';

function serialize(filter = {}) {
  return Object.keys(filter).reduce((values, key) => {
    if (typeof filter[key].toISOString === 'function') {
      return { ...values, [key]: filter[key].toISOString() };
    }

    return { ...values, [key]: filter[key] };
  }, {});
}

export default function Playlist() {
  const auth = useAuthContext();
  const [title, setTitle] = useState('');
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState(null);
  const [filter, setFilter] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [status, setStatus] = useState(VIEW_STATUS.LOADING);

  const handleError = useMemo(
    () => (error) => {
      switch (error?.status) {
        case 401:
        case 403:
          auth.logout();
          break;
        default:
          setErrorMessage(JSON.parse(error.response)?.error?.message);
          break;
      }
    },
    [auth],
  );

  const fetchData = useMemo(
    () => async ({ showLoading = true } = {}) => {
      try {
        if (showLoading) {
          setStatus(VIEW_STATUS.LOADING);
        }

        const playlistData = await PlaylistResource.fetchFeaturedPlaylists(
          auth.access_token,
          serialize(filter),
        );

        const filtersData = await FilterResource.fetchFilters();

        const {
          playlists: { items },
          message,
        } = playlistData;

        setData(items);
        setTitle(message);
        setFilters(filtersData.data?.filters);
        setErrorMessage(null);

        setStatus(VIEW_STATUS.DATA);
      } catch (error) {
        handleError(error);
      }
    },
    [filter],
  );

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = useMemo(
    () => () => {
      fetchData({ showLoading: false });
    },
    [fetchData],
  );

  useEffect(() => {
    refresh();
  }, [filter]);

  useEffect(() => {
    const interval = setInterval(refresh, CHAOTIC_REFRESH);

    return () => clearInterval(interval);
  }, [refresh]);

  const handleChangeFilter = useCallback(
    ({ field, value }) => {
      const filterData = { ...filter, [field]: value };

      if (value == null || value === '') {
        delete filterData[field];
      }

      setFilter(filterData);
    },
    [filter],
  );

  return (
    <LayoutContent>
      <Header />
      <LayoutContainer>
        {status === VIEW_STATUS.LOADING && <Loading />}
        {status === VIEW_STATUS.DATA && (
          <PlaylistGrid
            title={title}
            data={data}
            filters={filters}
            onChangeFilter={handleChangeFilter}
            filterData={filter}
            errorMessage={errorMessage}
          />
        )}
      </LayoutContainer>
    </LayoutContent>
  );
}
