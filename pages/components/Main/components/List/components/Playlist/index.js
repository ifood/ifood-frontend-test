import './style.sass';
import React from 'react';

export default class Component extends React.Component {
  render() {
    const { playlist } = this.props;
    if (!playlist) return null;
    const style = { backgroundImage: `url("${playlist.images[0].url}")` };
    return (
      <div className="playlist">
        <div className="playlist__flip">
          <div className="playlist__flip__front">
            <div className="playlist__cover" style={style} />
          </div>
          <div className="playlist__flip__back">
            <div>
              <h2>{playlist.name}</h2>
            </div>
            <div>
              <p>
                Created by
                {' '}
                {playlist.owner.display_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
