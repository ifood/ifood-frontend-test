import React from "react";

import { GlobalStyle } from "./assets/styles/GlobalStyles";

import FeaturedPlaylits from "./components/FeaturedPlaylits";
import { PlaylistsProvider } from "./context/Playlists";
import { FilterProvider } from "./context/Filter";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <FilterProvider>
        <PlaylistsProvider>
          <Header />

          <FeaturedPlaylits />
        </PlaylistsProvider>
      </FilterProvider>
    </div>
  );
};

export default App;
