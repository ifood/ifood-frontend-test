import React from 'react';
import { Redirect } from 'react-router-dom';
import { authUser } from '../../helpers/auth';

import Header from '../../components/Dashboard/Header';
import Filter from '../../components/Dashboard/Filter';
import Playlist from '../../components/Dashboard/Playlist';

import { Container, Content } from './styles';

const playlists = [
  {
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWXZo3QlWdchi',
    },
    description:
      'O melhor do rock acústico nacional e internacional para curtir e relaxar.',
    id: '37i9dQZFg1DgWT0d3wigiTss',
    images: [
      {
        url: 'https://i.scdn.co/image/ab67706f00000003cc12e168aa503c85e0266c3d',
      },
    ],
    name: 'Rock Acústico',
  },
];

function Dashboard() {
  if (!authUser()) return <Redirect to="/login" />;

  return (
    <Container>
      <Header />
      <Filter />
      <Content>
        <div className="content-wrapper">
          <h2 className="content-caption">Playlists recomendadas</h2>
          <div className="content-items">
            {playlists.map((playlist) => (
              <Playlist key={playlist.id} item={playlist} />
            ))}
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Dashboard;
