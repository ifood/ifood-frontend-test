import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Filters from '../components/Filters';
import ListPlaylists from '../components/ListPlaylists';
import './Playlists.css';

const Playlists = () => (
  <>
    <Drawer variant="permanent">
      <Filters />
    </Drawer>
    <main className="content">
      <ListPlaylists />
    </main>
  </>
);

export default Playlists;
