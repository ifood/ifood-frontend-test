import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { logout, authUser } from '../../helpers/auth';
import SpotifyApiService from '../../services/api/spotify';
import FilterApiService from '../../services/api/filter';
import useInterval from '../../utils/useInterval';

import Header from '../../components/Dashboard/Header';
import Filter from '../../components/Dashboard/Filter';
import Playlist from '../../components/Dashboard/Playlist';

import { Container, Content } from './styles';

function Dashboard() {
  const history = useHistory();
  const [playlists, setPlaylists] = useState([]);
  const [filters, _setFilters] = useState(null);
  const filtersRef = useRef(filters);
  const [filtersLabelValue, setFiltersLabelValue] = useState(null);
  const [loading, setLoading] = useState(true);

  const setFilters = (data) => {
    filtersRef.current = data;
    _setFilters(data);
  };

  const getFilterService = useCallback(() => {
    const { getFilter } = FilterApiService();

    getFilter()
      .then((response) => {
        setFiltersLabelValue(response);
      })
      .catch(() => {
        logout();
        history.push('/login');
      });
  }, [history]);

  const getPlaylistsService = useCallback(() => {
    const { getFeaturedPlaylists } = SpotifyApiService();

    getFeaturedPlaylists(filtersRef.current)
      .then((response) => {
        let data = response;

        if (filtersRef.current && filtersRef.current.searchValue) {
          data = data.filter(({ name }) =>
            name
              .toLocaleLowerCase()
              .includes(filtersRef.current.searchValue.toLocaleLowerCase()),
          );
        }

        setPlaylists(data);
        setLoading(false);
      })
      .catch(() => {
        logout();
        history.push('/login');
      });
  }, [history]);

  useEffect(() => {
    if (!authUser()) history.push('/login');

    getFilterService();
    getPlaylistsService();
  }, [history, getFilterService, getPlaylistsService]);

  useInterval(() => {
    getPlaylistsService();
  }, 30000);

  return (
    <Container>
      <Header />
      <Filter
        filtersLabelValue={filtersLabelValue}
        playlists={playlists}
        setPlaylists={setPlaylists}
        setFilters={setFilters}
        getPlaylistsService={getPlaylistsService}
      />
      <Content empty={loading || !playlists.length}>
        <div className="content-wrapper">
          <h2 className="content-caption">Playlists recomendadas</h2>
          <div className="content-items">
            {loading && <div>Carregando...</div>}
            {!loading && !playlists.length && (
              <div>Nenhuma playlist encontrada</div>
            )}
            {!loading &&
              playlists.map((playlist) => (
                <Playlist key={playlist.id} item={playlist} />
              ))}
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Dashboard;
