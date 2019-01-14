import axios from 'axios';
import { formatDate } from '../../utils/formatDate.js';
import React, { Component, Fragment } from 'react';
import Filters from '../../components/filters-playlist/filters-playlist.js';
import List from '../../components/list-playlist/list-playlist.js';
import Header from '../header/header';
import env from '../../utils/env';
import {
  Alert,
  Container,
  Row,
  Col
} from 'reactstrap';

class Playlists extends Component {

  constructor(props) {
    super(props);
    this.getPlaylists = this.getPlaylists.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.setItemsByPage = this.setItemsByPage.bind(this);
    this.setNameSearch = this.setNameSearch.bind(this);
    this.searchList = this.searchList.bind(this);

    this.state = {
      filters: undefined,
      playlistItems: undefined,
      playlists: [],
      limits: [],
      params: {},
      itemsByPage: undefined,
      nameSearch: '',
      offset: undefined,
      alert: false,
      alertMessage: ''
    };
  }

  componentDidMount() {
    document.title = "SpotiFood - Playlists"
    document.documentElement.lang = 'pt-BR';
    this.getToken();

    this.playlistInterval = setInterval(() => {
      this.getPlaylists();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.playlistInterval);
  }

  getToken() {
    const url = window.location.hash;
    if (url) {
      const access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
      localStorage.setItem('token', access_token);
    }
    if (localStorage.getItem('token')) {
      this.getFilters();
      this.getPlaylists();
    } else {
      window.location = env.redirectURL;
    }
  }

  getFilters() {
    this.setState({ alert: false, alertMessage: '' });
    axios.get(`${env.filterURL}/v2/5a25fade2e0000213aa90776`)
      .then((response) => {
        this.setState({ filters: response.data.filters });
      })
      .catch((error) => {
        this.setState({ alert: true, alertMessage: 'Tivemos um problema buscando alguns dados, tente novamente mais tarde, estamos trabalhando para melhorar nossos serviços!' });
      });
  }

  getLimit() {
    const limits = [];
    if (this.state.playlists) {
      for (let index = 1; index <= this.state.playlists.playlists.total; index++) {
        limits.push(index);
      }
      this.setState({ limits });
    }
  }

  setFilters(params) {
    this.setState({ params: params }, () => {
      this.getPlaylists();
    });
  }

  setItemsByPage(itemsByPage) {
    this.setState({ itemsByPage }, () => {
      this.getPlaylists();
    });
  }

  setNameSearch(name) {
    this.setState({ name }, () => {
      this.searchList();
    });
  }

  searchList() {
    const newList = this.state.playlists.playlists.items.filter(value =>
      value.name.toLowerCase().includes(this.state.name.toLowerCase())
    );

    this.setState({ playlistItems: newList });
  }

  getPlaylists() {
    this.setState({ alert: false, alertMessage: '' });
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.get(`${env.spotifyURL}/v1/browse/featured-playlists`, {
      params: {
        timestamp: formatDate(new Date()),
        limit: this.state.itemsByPage,
        offset: this.state.offset,
        ...this.state.params
      }
    })
      .then((response) => {
        this.setState({ playlists: response.data });
        this.setState({ playlistItems: response.data.playlists.items });
        this.getLimit();
        if (this.state.name)
          this.searchList();
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          localStorage.clear();
          window.location = env.redirectURL;
        } else {
          this.setState({ alert: true, alertMessage: 'Tivemos um problema buscando as playlists, tente novamente mais tarde, estamos trabalhando para melhorar nossos serviços!' });
        }
      });
  }

  render() {
    return (
      <Fragment>
        <Header />
        {
          this.state.alert
          &&
          <Container>
            <Row>
              <Col>
                <Alert color="danger">
                  {this.state.alertMessage}
                </Alert>
              </Col>
            </Row>
          </Container>
        }
        <Container>
          <Row>
            <Col><Filters filters={this.state.filters} setFilters={this.setFilters} setNameSearch={this.setNameSearch} /></Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col><List items={this.state.playlistItems} limits={this.state.limits} setLimit={this.setItemsByPage} playlists={this.state.playlists} /></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Playlists;