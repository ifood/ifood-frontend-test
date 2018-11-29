import React, { PureComponent } from 'react';
import { IPlaylist } from '../api/spotify';

interface IProps {
  playlists: IPlaylist[];
}

export default class List extends PureComponent<IProps> {
  public render() {
    return this.props.playlists.map(p => (
      <div key={p.id}>
        <img src={p.images[0].url} />
        <div>{p.name}</div>
      </div>
    ));
  }
}
