import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Filter from '../components/Filter';
import {
  operations as authOps,
  selectors as authSelectors,
} from '../ducks/auth';

interface IProps {
  signOut: () => void;
}

class Home extends PureComponent<IProps> {
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
  signOut: () => dispatch(authOps.signOut()),
});

export default connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Home);
