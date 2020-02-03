import React, { Component } from 'react';
import { Container } from '@material-ui/core';

import { getFeaturedPlaylists } from '../../services/services';

class ListPlaylists extends Component {
  componentDidMount() {
    this.listFeaturedPlaylists();
  }

  async listFeaturedPlaylists() {
    const data = await getFeaturedPlaylists();

    console.log('data', data);
  }

  render() {
    return (
      <Container>
        Content
      </Container>
    );
  }
}

export default ListPlaylists;
