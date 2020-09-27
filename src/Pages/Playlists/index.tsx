import React from "react";

import { FeaturedPlaylistProvider } from "../../Hooks/playlistsHook";

import LayoutPage from "../../Components/LayoutPage";
import Search from "./Search";
import Lists from "./Lists";
import PlaylistFilters from "./Filters";

import { Container, Main } from "./styles";

const Playlists: React.FC = () => {
  return (
    <LayoutPage>
      <FeaturedPlaylistProvider>
        <Container>
          <PlaylistFilters />
          <Main>
            <Search />
            <Lists />
            <h1>Playlists</h1>
          </Main>
        </Container>
      </FeaturedPlaylistProvider>
    </LayoutPage>
  );
};

export default Playlists;
