import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import Filter from '../components/Filter';
import {
  operations as authOps,
  selectors as authSelectors,
} from '../ducks/auth';
import { operations as filterOps } from '../ducks/filter';

interface IProps {
  getFilterConfig: () => Dispatch;
  signOut: () => Dispatch;
}

class Home extends PureComponent<IProps> {
  public componentDidMount() {
    this.props.getFilterConfig();
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

const mapDispatchToProps = dispatch => ({
  getFilterConfig: () => dispatch(filterOps.getConfig()),
  signOut: () => dispatch(authOps.signOut()),
});

export default connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Home);
