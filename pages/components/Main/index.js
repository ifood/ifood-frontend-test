import React from 'react';
import './style.sass';
import IndexStore from '../../index.store';
import Header from './components/Header';
import Filters from './components/Filters';
import List from './components/List';
// import SpotifyService from '../../../services/spotify.service';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = IndexStore.getState();
    this.state.enableBack = false;
  }

  componentDidMount() {
    IndexStore.on('change', () => {
      this.setState(IndexStore.getState());
    });
    IndexStore.on('change-filter-status', (filterStatus) => {
      if (filterStatus) {
        setTimeout(() => this.setState({ enableBack: true }), 1000);
      }
    });
  }

  handleFilter() {
    const { enableBack } = this.state;
    if (enableBack) {
      IndexStore.filterStatus = false;
      this.setState({ enableBack: false });
    }
  }

  render() {
    const className = ['main'];
    const { spotifyStatus } = this.state;
    const { filterStatus } = this.state;
    className.push(spotifyStatus === 'CONNECTED' ? 'main--show' : 'main--hidden');
    className.push(filterStatus ? 'main--filtering' : 'main--no-filtering');
    return (
      <div className={className.join(' ')}>
        <div className="main__slider">
          <div className="main__slider__left">
            <Filters />
          </div>
          <div className="main__slider__center" onClick={this.handleFilter} onKeyPress={this.handleFilter}>
            <Header />
            <List />
          </div>
        </div>
      </div>
    );
  }
}
