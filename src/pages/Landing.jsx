import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

/* Components */
import Header from '../components/Header';
import Footer from '../components/Footer';

/* Page Components */
import FeaturedPlaylists from './FeaturedPlaylists';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={FeaturedPlaylists} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(Landing);
