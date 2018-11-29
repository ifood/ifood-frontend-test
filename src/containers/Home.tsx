import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import Filter from '../components/Filter';
import {
  operations as authOps,
  selectors as authSelectors,
} from '../ducks/auth';
import { operations as filterOps } from '../ducks/filter';
import { operations as playlistOps } from '../ducks/playlist';

interface IProps {
  token: string;
  getFilterConfig: () => Dispatch;
  listFeaturedPlaylists: (token: string) => Dispatch;
  signOut: () => Dispatch;
}

class Home extends PureComponent<IProps> {
  public componentDidMount() {
    this.props.getFilterConfig();
    this.props.listFeaturedPlaylists(this.props.token);
  }

  public render() {
    return (
      <div>
        <Filter onSignOut={this.handleSignOut} />
        <h1>Hi, I'm the list component</h1>
      </div>
    );
  }

  private handleSignOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = state => ({
  token: authSelectors.getToken(state),
});

const mapDispatchToProps = dispatch => ({
  getFilterConfig: () => dispatch(filterOps.getConfig()),
  listFeaturedPlaylists: (token: string) =>
    dispatch(playlistOps.listFeaturedPlaylists(token)),
  signOut: () => dispatch(authOps.signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
