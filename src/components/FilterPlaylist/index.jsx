/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
import { Component } from 'react';
import axios from 'axios';
import { Button, FormControl, Collapse, Form, Alert } from 'react-bootstrap';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { gray } from '../../styles/colors';

import * as playlistsActions from '../../store/playlists/actions';

import api from '../../services/api';
import checkParams from '../../utils/checkParams';

import {
  Container,
  SearchForm,
  FilterTitle,
  FilterForm,
  FilterButton,
} from './styles';

class FilterPlaylist extends Component {
  state = {
    search: '',
    datePicker: '',
    localeFilters: [],
    countryFilters: [],
    openFilterOptions: false,
    filterApplied: false,
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://www.mocky.io/v2/5a25fade2e0000213aa90776',
    );

    this.setState({
      localeFilters: response.data.filters[0].values,
      countryFilters: response.data.filters[1].values,
    });
  }

  handleApplyFilter = e => {
    e.preventDefault();

    const { datePicker } = this.state;
    const { callbackFromParent } = this.props;

    const country = this.country.value === 'empty' ? null : this.country.value;
    const locale = this.locale.value === 'empty' ? null : this.locale.value;
    const timestamp = datePicker === '' ? null : datePicker;
    const limit = this.limit.value === '' ? null : this.limit.value;
    const offset = this.offset.value === '' ? null : this.offset.value;

    const data = {
      country,
      locale,
      timestamp,
      limit,
      offset,
    };

    const params = checkParams(data);

    api
      .get('browse/featured-playlists', {
        params,
      })
      .then(dataParam => {
        this.props.listPlaylists(dataParam.data.playlists.items);
      })
      .catch(error => {
        if (error.response.status === 401) {
          setInterval(() => {
            window.location.replace(process.env.REACT_APP_REDIRECT_URL);
          }, 3000);
        }
      });

    this.setState({
      openFilterOptions: false,
      filterApplied: true,
    });

    return callbackFromParent({
      filterApplied: true,
    });
  };

  resetFilters = e => {
    e.preventDefault();

    const { callbackFromParent } = this.props;

    api
      .get('browse/featured-playlists')
      .then(data => {
        this.props.listPlaylists(data.data.playlists.items);
      })
      .catch(error => {
        if (error.response.status === 401) {
          setInterval(() => {
            window.location.replace(process.env.REACT_APP_REDIRECT_URL);
          }, 3000);
        }
      });

    this.setState({
      filterApplied: false,
    });

    return callbackFromParent({
      filterApplied: false,
    });
  };

  closeModal = () => {
    this.setState({
      filterApplied: false,
    });
  };

  handleNewSearch = async e => {
    if (e.keyCode !== 13) return;

    const { callbackFromParent } = this.props;
    const response = await api.get('browse/featured-playlists');

    if (response.status === 401) {
      setInterval(() => {
        window.location.replace(process.env.REACT_APP_REDIRECT_URL);
      }, 3000);
    } else {
      const playlists = response.data.playlists.items;

      const { search } = this.state;

      const filteredPlaylist = playlists.filter(playlist => {
        if (playlist.name.toLowerCase().includes(search)) {
          return playlist;
        }
        return null;
      });

      this.props.searchPlaylists(filteredPlaylist);

      this.setState({
        openFilterOptions: false,
        filterApplied: true,
        search: '',
      });

      return callbackFromParent({
        filterApplied: true,
      });
    }
  };

  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  handleDatePickerChange = date => {
    this.setState({
      datePicker: moment(date.target.value, 'YYYY-MM-DD HH:mm').format(),
    });
  };

  render() {
    const {
      search,
      openFilterOptions,
      localeFilters,
      countryFilters,
      filterApplied,
    } = this.state;

    return (
      <Container className="col-12">
        <div className="row">
          <div className="col-md-6 mb-3">
            <SearchForm>
              <FormControl
                placeholder="Search a playlist ... (Press Enter to Search)"
                aria-label="Search"
                value={search}
                onChange={this.handleSearchChange}
                onKeyDown={this.handleNewSearch}
              />
            </SearchForm>
          </div>
          <div className="col-md-6 mb-3">
            <FilterButton
              onClick={() =>
                this.setState({ openFilterOptions: !openFilterOptions })
              }
              aria-controls="collapse-filter-options"
              aria-expanded={openFilterOptions}
            >
              Filter Options
            </FilterButton>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <Collapse in={openFilterOptions}>
              <div className="collapse-filter-options">
                <FilterTitle>Filters Options</FilterTitle>
                <div>
                  <FilterForm
                    onSubmit={this.handleApplyFilter}
                    className="col-12"
                  >
                    <Form.Row>
                      <Form.Group
                        controlId="locale"
                        style={{ marginRight: 20 }}
                      >
                        <Form.Label
                          style={{
                            color: gray,
                            fontWeight: 'bold',
                          }}
                        >
                          Locale
                        </Form.Label>
                        <FormControl
                          as="select"
                          name="locale"
                          ref={c => (this.locale = c)}
                        >
                          <option value="empty">Choose...</option>
                          {localeFilters.map(item => (
                            <option key={item.value} value={item.value}>
                              {item.name}
                            </option>
                          ))}
                        </FormControl>
                      </Form.Group>
                      <Form.Group controlId="country">
                        <Form.Label
                          style={{
                            color: gray,
                            fontWeight: 'bold',
                          }}
                        >
                          Country
                        </Form.Label>
                        <FormControl
                          as="select"
                          name="country"
                          ref={c => (this.country = c)}
                        >
                          <option value="empty">Choose...</option>
                          {countryFilters.map(item => (
                            <option key={item.value} value={item.value}>
                              {item.name}
                            </option>
                          ))}
                        </FormControl>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group controlId="timestamp">
                        <Form.Label
                          style={{
                            color: gray,
                            fontWeight: 'bold',
                          }}
                        >
                          Timestamp
                        </Form.Label>
                        <FormControl
                          as="input"
                          placeholder="2014-10-23T07:00:00"
                          type="datetime-local"
                          name="timestamp"
                          ref={c => (this.timestamp = c)}
                          onChange={this.handleDatePickerChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group controlId="limit" style={{ marginRight: 20 }}>
                        <Form.Label
                          style={{
                            color: gray,
                            fontWeight: 'bold',
                          }}
                        >
                          Limit
                        </Form.Label>
                        <FormControl
                          as="input"
                          name="limit"
                          type="number"
                          placeholder="5"
                          min="1"
                          max="50"
                          ref={c => (this.limit = c)}
                        />
                      </Form.Group>
                      <Form.Group controlId="offset">
                        <Form.Label
                          style={{
                            color: gray,
                            fontWeight: 'bold',
                          }}
                        >
                          Offset
                        </Form.Label>
                        <FormControl
                          as="input"
                          name="offset"
                          type="number"
                          placeholder="5"
                          min="1"
                          max="50"
                          ref={c => (this.offset = c)}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                      Apply
                    </Button>
                  </FilterForm>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="col-12">
            <Alert
              dismissible
              show={filterApplied}
              onClose={this.closeModal}
              variant="success"
              style={{ justifyContent: 'center' }}
            >
              <Alert.Heading>Filters applied!</Alert.Heading>
              <hr />
              <div className="d-flex justify-content-start">
                <Button onClick={this.resetFilters} variant="outline-success">
                  Remove Filters
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(playlistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlaylist);
