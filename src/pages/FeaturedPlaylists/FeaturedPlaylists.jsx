import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Select from 'react-dropdown-select';
import {
  fetchFilters,
  fetchPlaylists,
  setFilterValue,
  resetFilters,
  getFeaturedPlaylistsStore,
} from './module';

import { getUserInformation, reset } from '../../modules/authentication';

import FeaturedPlaylists from '../../components/FeaturedPlaylists';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistNameFilter: '',
    };

    this.buildFilterComponent = this.buildFilterComponent.bind(this);
    this.buildInputFilterComponent = this.buildInputFilterComponent.bind(this);
    this.buildDropdownFilterComponent = this.buildDropdownFilterComponent.bind(this);
    this.buildDateFilterComponent = this.buildDateFilterComponent.bind(this);
    this.handleResetFilters = this.handleResetFilters.bind(this);
    this.handleGoToPlaylist = this.handleGoToPlaylist.bind(this);
    this.fetchPlaylists = this.fetchPlaylists.bind(this);
    this.filterPlaylistByName = this.filterPlaylistByName.bind(this);
    this.handleFilterPlaylistByName = this.handleFilterPlaylistByName.bind(this);
  }

  componentWillMount() {
    this.scheduledSpotifyPlaylistFetcher = setInterval(
      () => this.props.getPlaylists(),
      30000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.scheduledSpotifyPlaylistFetcher);
  }

  async componentDidMount() {
    await this.props.getFilters();
    await this.props.getUserInfo();
    await fetchPlaylists();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.featuredPlaylists.selectedFilters !== prevProps.featuredPlaylists.selectedFilters) {
      await this.fetchPlaylists();
    }
  }

  async fetchPlaylists() {
    await this.props.getPlaylists();
  }

  handleFilterValueChange(filterName, filterValue) {
    this.props.setFilter(filterName, filterValue);
  }

  buildInputFilterComponent(filter) {
    return (
      <div className="col-lg-2 filter-field-container" key={`playlist-filter-${filter.id}`}>
        <FormControl
          onChange={ev => this.handleFilterValueChange(filter.id, ev.target.value)}
          placeholder={filter.name}
          value={this.props.featuredPlaylists.selectedFilters[filter.id] || ''}
        />
      </div>
    );
  }

  buildDropdownFilterComponent(filter) {
    const selectedValues = this.props.featuredPlaylists.selectedFilters;

    return (
      <div className="col-lg-2 filter-field-container" key={`playlist-filter-${filter.id}`}>
        <Select
          values={filter.values.filter(opt => opt.value === selectedValues[filter.id]) || []}
          options={filter.values}
          onChange={value => this.handleFilterValueChange(filter.id, value[0] ? value[0].value : '')}
          className="filter-dropdown"
          labelField="name"
          valueField="value"
          color="black"
          placeholder={filter.name}
          searchable={false}
        />
      </div>
    );
  }

  buildDateFilterComponent(filter) {
    return (
      <div className="col-lg-2 filter-field-container" key={`playlist-filter-${filter.id}`}>
        <input
          type="date"
          placeholder={filter.name}
          className="filter-field-date"
          onChange={ev => this.handleFilterValueChange(filter.id, moment(ev.target.value).toISOString())}
        />
      </div>
    );
  }

  buildNumberFilterComponent(filter) {
    return (
      <div className="col-lg-2 filter-field-container" key={`playlist-filter-${filter.id}`}>
        <input
          type="number"
          className="filter-field-number"
          placeholder={filter.name}
          onChange={ev => this.handleFilterValueChange(filter.id, ev.target.value)}
        />
      </div>
    );
  }

  buildFilterComponent(filter) {
    let componentBuilderFn = this.buildInputFilterComponent;

    if (filter.values) {
      componentBuilderFn = this.buildDropdownFilterComponent;
    } else if (filter.validation && filter.validation.entityType === 'DATE_TIME') {
      componentBuilderFn = this.buildDateFilterComponent;
    } else if (filter.validation && filter.validation.primitiveType === 'INTEGER') {
      componentBuilderFn = this.buildNumberFilterComponent;
    }

    const component = componentBuilderFn.call(this, filter);
    return component;
  }

  handleFilterPlaylistByName(ev) {
    this.setState({ playlistNameFilter: ev.target.value });
  }

  handleResetFilters() {
    this.props.clearFilters();
  }

  handleGoToPlaylist(playlistUrl) {
    window.open(playlistUrl);
  }

  filterPlaylistByName() {
    const { featuredPlaylists } = this.props;
    const { playlistNameFilter } = this.state;

    const filteredPlaylist = (featuredPlaylists.playlists.length) ? featuredPlaylists.playlists.filter(
      p => p.name.toLowerCase().includes(playlistNameFilter.toLowerCase())
    ) : [];
    return filteredPlaylist;
  }

  render() {
    const { filters } = this.props.featuredPlaylists;
    const filteredPlaylists = this.filterPlaylistByName();

    return (
      <div>
        <div className="page-container">
          <div className="landing-filter">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 order-lg-1">
                  <h3 className="page-highlight">
                    Encontre playlists no spotify para acompanhar seu pedido iFood
                  </h3>
                  <p className="page-highlight-text">
                    Seu momento iFood muito mais prazeroso
                  </p>
                </div>
              </div>
              <div className="row filter-container">
                {
                  filters.map(f => this.buildFilterComponent(f))
                }
                <div className="col-lg-2 filter-field-container" key="playlist-filter-name">
                  <FormControl
                    onChange={this.handleFilterPlaylistByName}
                    placeholder="Nome"
                    value={this.state.playlistNameFilter}
                  />
                </div>
                <div className="col-lg-2">
                  <Button
                    variant="success"
                    className="reset-filters"
                    onClick={this.handleResetFilters}
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="container playlist-listing">
            <FeaturedPlaylists
              filters={filters}
              playlists={filteredPlaylists}
              handleGoToPlaylist={this.handleGoToPlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
  featuredPlaylists: getFeaturedPlaylistsStore(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getFilters: fetchFilters,
  getPlaylists: fetchPlaylists,
  getUserInfo: getUserInformation,
  resetApplication: reset,
  setFilter: setFilterValue,
  clearFilters: resetFilters,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
