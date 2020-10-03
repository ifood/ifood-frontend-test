import React from "react";

import Head from "components/Head";
import Filters from "containers/Filters";
import PlaylistsList from "containers/PlaylistsList";

const Playlists = () => (
  <>
    <Head />
    <Filters />
    <PlaylistsList />
  </>
);

export default Playlists;
