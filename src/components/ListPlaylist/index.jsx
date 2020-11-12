/* eslint-disable react/prefer-stateless-function */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Component } from 'react';
import * as playlistsActions from '../../store/playlists/actions';

import Playlist from '../Playlist';

import NotFound from './styles';

class ListPlaylist extends Component {
  render() {
    const { playlists } = this.props;

    const data = playlists[0];

    if (data !== undefined) {
      return data.length > 0 ? (
        <>
          {data.map(item => (
            <Playlist key={item.id} playlist={item} />
          ))}
        </>
      ) : (
        <NotFound>
          <h2>No results found!</h2>
          <p>
            Please make sure your words are spelled correctly or use less of
            different keywords.
          </p>
        </NotFound>
      );
    }
    return (
      <div className="text-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(playlistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaylist);
