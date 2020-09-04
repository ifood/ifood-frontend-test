import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { debounce } from 'throttle-debounce';
import { useIntl } from 'react-intl';
import PlaylistGrid from '../../component/PlaylistGrid';
import { useAuthorization } from '../../hooks';
import Filter from '../../component/Filter';
import Info from '../../component/Info';
import {
  LayoutContainer,
  Header,
  Content,
  Footer,
} from '../../component/Layout';
import {
  getFilterMetadata,
  getFeaturedPlayList,
} from '../../network/FeaturedPlayListNetwork';
import { parseObjectByMetatada } from '../../component/DynamicField/FieldMetadata';
import Loading from '../../component/Loading';

const SCREEN_STATE = {
  LOADING: Symbol('loading'),
  DONE: Symbol('done'),
  ERROR: Symbol('error'),
};
const DEBOUNCE_DELAY = 300;
const POLLING_CYCLE = 1000 * 30;

function filterPlaylist(playlists, filterText) {
  return playlists?.items?.filter(
    (item) =>
      filterText == null ||
      item?.name?.toLowerCase().includes(filterText.trim().toLowerCase())
  );
}

function FeaturedPlaylists() {
  const authorization = useAuthorization();
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState(null);
  const [screenState, setScreenState] = useState(SCREEN_STATE.LOADING);
  const [errorMessage, setError] = useState(null);
  const [filterText, setFilterText] = useState(null);
  const [filterMetadata, setFilterMetadata] = useState(null);
  const intl = useIntl();

  const handleResponseError = useMemo(
    () => (error) => {
      let errorResponse;
      switch (error?.status) {
        case 400:
        case 404:
        case 500:
        case 503:
        case 429:
          errorResponse = JSON.parse(error.response);
          setError(errorResponse?.error?.message);
          break;

        case 401:
        case 403:
          authorization.logout();
          break;

        default:
          break;
      }

      setScreenState(SCREEN_STATE.ERROR);
    },
    [authorization]
  );

  const loadData = useMemo(
    () => ({ silent = false } = {}) => {
      if (!silent) {
        setScreenState(SCREEN_STATE.LOADING);
      }
      getFeaturedPlayList(
        authorization.access_token,
        parseObjectByMetatada(filterMetadata, filter)
      )
        .then((response) => {
          setData(response);
          setScreenState(SCREEN_STATE.DONE);
        })
        .catch(handleResponseError);
    },
    // this hook shoud not depend on filterMetadata
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authorization, filter, handleResponseError]
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refresh = useMemo(
    () => () => {
      loadData({ silent: true });
    },
    [loadData]
  );

  useEffect(() => {
    getFilterMetadata().then(setFilterMetadata);
  }, []);

  useEffect(() => {
    const interval = setInterval(refresh, POLLING_CYCLE);

    return () => clearInterval(interval);
  }, [refresh]);

  const handleFilter = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  const handleFilterTextChange = useCallback(
    debounce(DEBOUNCE_DELAY, setFilterText),
    []
  );

  const filtered = useMemo(() => filterPlaylist(data?.playlists, filterText), [
    data,
    filterText,
  ]);

  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Filter
          filter={filter}
          metadata={filterMetadata}
          onFilter={handleFilter}
          onTextChange={handleFilterTextChange}
        />
        {screenState === SCREEN_STATE.LOADING && <Loading />}
        {screenState === SCREEN_STATE.DONE && (
          <PlaylistGrid title={data?.message} items={filtered} />
        )}
        {screenState === SCREEN_STATE.ERROR && (
          <Info
            icon="times"
            title={intl.formatMessage({ id: 'ops' })}
            info={errorMessage}
          />
        )}
      </Content>
      <Footer />
    </LayoutContainer>
  );
}

export default FeaturedPlaylists;
