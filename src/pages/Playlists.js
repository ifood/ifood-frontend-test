import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Filters from '../components/Filters/Filters';


class Playlists extends Component {
  render() {
    return (
      <Drawer variant="permanent">
        <Filters />
      </Drawer>
    );
  }
}

export default Playlists;
