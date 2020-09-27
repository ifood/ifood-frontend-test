import React from "react";
import LayoutPage from "../../Components/LayoutPage";

import { Container } from "./styles";

const Playlists: React.FC = () => {
  return (
    <LayoutPage>
      <Container>
        <h1>Playlists</h1>
      </Container>
    </LayoutPage>
  );
};

export default Playlists;

import React, { useState } from 'react';

import { FeaturedPlaylistProvider } from '../../hooks/featuredPlaylists';

import PlaylistsFilters from './PlaylistsFilters';
import PlaylistsSearch from './PlaylistsSearch';
import PlaylistList from './PlaylistList';

import { Container, Main } from './styles';

const Home = () => {
  const [mobileOpenDrawer, setMobileOpenDrawer] = useState(false);

  return (
    <FeaturedPlaylistProvider>
      <Container>
        <PlaylistsFilters
          mobileOpen={mobileOpenDrawer}
          setMobileOpen={setMobileOpenDrawer}
        />
        <Main>
          <PlaylistsSearch setMobileOpen={setMobileOpenDrawer} />
          <PlaylistList />
        </Main>
      </Container>
    </FeaturedPlaylistProvider>
  );
};

export default Home;
