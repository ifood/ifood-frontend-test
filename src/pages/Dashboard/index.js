import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { logout, authUser } from '../../helpers/auth';
import SpotifyApiService from '../../services/spotify';
import useInterval from '../../utils/useInterval';

import Header from '../../components/Dashboard/Header';
import Filter from '../../components/Dashboard/Filter';
import Playlist from '../../components/Dashboard/Playlist';

import { Container, Content } from './styles';

function Dashboard() {
  const history = useHistory();
  const [playlists, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlaylistsService = useCallback(() => {
    const { getFeaturedPlaylists } = SpotifyApiService();

    getFeaturedPlaylists()
      .then((data) => {
        setPlaylist(data);
        setLoading(false);
      })
      .catch(() => {
        logout();
        history.push('/login');
      });
  }, []);

  useEffect(() => {
    if (!authUser()) history.push('/login');

    getPlaylistsService();
  }, [history, getPlaylistsService]);

  useInterval(() => {
    getPlaylistsService();
  }, 30000);

  return (
    <Container>
      <Header />
      <Filter />
      <Content loading={loading.toString()}>
        <div className="content-wrapper">
          <h2 className="content-caption">Playlists recomendadas</h2>
          <div className="content-items">
            {loading ? (
              <div>Carregando...</div>
            ) : (
              playlists.map((playlist) => (
                <Playlist key={playlist.id} item={playlist} />
              ))
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Dashboard;
