import React, { Component } from 'react';
import './App.css';
import PlaylistCounter from './components/playlist-counter/playlist-counter';
import TotalTracks from './components/total-tracks/total-tracks';
import Filter from './components/filter/filter';
import Playlist from './components/playlist/playlist';
import { URL_ME, URL_FEATURED_PLAYLIST, URL_HEROKU, TOKEN_LOCAL_STORAGE,
  URL_AUTHORIZE, INTERVAL, SPOTIFY_API_ERROR_MESSAGE } from './constants';
import logo from './images/SpotifoodIcon.jpg';
import Axios from 'axios';

class App extends Component {
  localeTemp = '';
  countryTemp = '';
  datetimeTemp = '';
  limitTemp = '';
  offsetTemp = '';

  constructor() {
    super();
    this.state = {
      filterString: '',
      intervalId: null,
      filters: {
        locale: '',
        country: '',
        datetime: '',
        limit: '',
        offset: ''
      }
    }
  }

  // Unmount cycle life
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  // Method to call Spotify API with filter applied
  callSpotifyPlaylistService = (filtersTemp) => {
    if (!filtersTemp) { // This check is for refresh page
      filtersTemp = this.state.filters;
    }

    let accessToken = localStorage.getItem(TOKEN_LOCAL_STORAGE); // Get the token from local storage
    if (accessToken) {
      // Mount the url filter
      const urlFilterFinal = this.buildFilterUrl(filtersTemp);

      // Get the new Playlist using the filter fields
      this.getPlaylistFromSpotify(urlFilterFinal, accessToken);
     }
  }

   // Method to build the filter url for spotify api
  buildFilterUrl(filtersTemp) {
    let urlFilter = URL_FEATURED_PLAYLIST;
    let hasAtLeastOne = false;

    if (filtersTemp.country) {
      let ctry = "";
      if (filtersTemp.country === "en_US") { // This is a bug in mocky API
        ctry = "US";
      } else {
        ctry = filtersTemp.country;
      }
      urlFilter = urlFilter + "?country=" + ctry;
      hasAtLeastOne = true;
    }

    if (filtersTemp.locale) {
      if (hasAtLeastOne) {
        urlFilter = urlFilter + "&locale=" + filtersTemp.locale;
      } else {
        urlFilter = urlFilter + "?locale=" + filtersTemp.locale;
      }
      hasAtLeastOne = true;
    }

    if (filtersTemp.datetime) {
      let pattern = ":";
      const properlyTimestamp = filtersTemp.datetime.replace(pattern, "%3A");
      if (hasAtLeastOne) {
        urlFilter = urlFilter + "&timestamp=" + properlyTimestamp + "%3A00";
      } else {
        urlFilter = urlFilter + "?timestamp=" + properlyTimestamp + "%3A00";
      }
      hasAtLeastOne = true;
    }

    if (filtersTemp.limit && parseInt(filtersTemp.limit, 10) >= 1 && parseInt(filtersTemp.limit, 10) <= 50) {
      if (hasAtLeastOne) {
        urlFilter = urlFilter + "&limit=" + filtersTemp.limit;
      } else {
        urlFilter = urlFilter + "?limit=" + filtersTemp.limit;
      }
      hasAtLeastOne = true;
    }

    if (filtersTemp.offset && parseInt(filtersTemp.offset, 10) >= 1) {
      if (hasAtLeastOne) {
        urlFilter = urlFilter + "&offset=" + filtersTemp.offset;
      } else {
        urlFilter = urlFilter + "?offset=" + filtersTemp.offset;
      }
    }
    return urlFilter;
  }

  // Method to refresh page after 30 seconds
  refreshPage = () => {
    const intervalId = setInterval(this.callSpotifyPlaylistService, INTERVAL);
    this.setState({
      intervalId,
    });
  }

  // Method called when the user change some information on filter
  filterList = (event) => {
    const field = {
      [event.target.name]: event.target.value,
    };

    if (field.locale) {
      this.localeTemp = field.locale;
    } else if (field.country) {
      this.countryTemp = field.country;
    } else if (field.datetime || field.datetime === "") {
      this.datetimeTemp = field.datetime;
    } else if (field.limit) {
      if (parseInt(field.limit, 10) < 1 || parseInt(field.limit, 10) > 50) {
        this.limitTemp = "";
      } else {
        this.limitTemp = field.limit;
      }
    } else {
      if (parseInt(field.offset, 10) < 1) {
        this.offsetTemp = "";
      } else {
        this.offsetTemp = field.offset;
      }
    }

    this.setState({
      filters: {
        locale: this.localeTemp ? this.localeTemp : '',
        country: this.countryTemp ? this.countryTemp : '',
        datetime: this.datetimeTemp ? this.datetimeTemp : '',
        limit: this.limitTemp ? this.limitTemp : '',
        offset: this.offsetTemp ? this.offsetTemp : ''
      }
    });

    const filtersTemp = {
      locale: this.localeTemp ? this.localeTemp : '',
      country: this.countryTemp ? this.countryTemp : '',
      datetime: this.datetimeTemp ? this.datetimeTemp : '',
      limit: this.limitTemp ? this.limitTemp : '',
      offset: this.offsetTemp ? this.offsetTemp : ''
    };

    this.callSpotifyPlaylistService(filtersTemp);
  }

  // Method to call Spotify Login in case the user is not logged already
  openSpotifyLogin() {
      let url = URL_AUTHORIZE;
          url += '?client_id=' + encodeURIComponent(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
          url += '&response_type=token';
          url += '&redirect_uri=' + encodeURIComponent(URL_HEROKU);
      window.location = url;
  }

  getUserNameInformationFromSpotify(accessToken) {
    Axios.get(URL_ME, {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response =>
        this.setState({
        user: {
          name: response.data.display_name
          }
        })
    )
    .catch(error => {
        console.log(SPOTIFY_API_ERROR_MESSAGE, error)
    });
  }

  getPlaylistFromSpotify(url, accessToken) {
    Axios.get(url, {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(playlistData => {
        if (!playlistData.error) {
        let playlists = playlistData.data.playlists.items;
          this.setState({
            playlists: playlists.map(item => {
              return {
                name: item.name,
                imageUrl: item.images[0].url,
                numberOfTracks: item.tracks.total,
                owner: item.owner.display_name
              }
            })
          })
        } else {
          this.setState({
            playlists: []
          })
        }
      })
      .catch(error => {
        this.setState({
            playlists: []
          })
           console.log(SPOTIFY_API_ERROR_MESSAGE, error)
      });
  }

  // Method called before Render the page
  componentDidMount() {
    const url = window.location.hash;
    if (url) { // Check if the access token is on url
      const access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]; // Get only the access token from url
      localStorage.setItem(TOKEN_LOCAL_STORAGE, access_token); // Save the token on local storage
      window.location.href = '/'; // Clean the URL to not be exposed to user (access token)
    }

    let accessToken = localStorage.getItem(TOKEN_LOCAL_STORAGE); // Check if already have a token into local storage
    if (!accessToken) {
      return;
    }

    // Call this API to get user name information
    this.getUserNameInformationFromSpotify(accessToken);

    // Get all Feature Playlists without filter
    this.getPlaylistFromSpotify(URL_FEATURED_PLAYLIST, accessToken);

    // Start the an interval of 30 seconds to refresh the playlist
    this.refreshPage();
  }

  // Method to render the page
  render() {
    // If there is no user and playlist, return empty array
    let playlistToShow = this.state.user && this.state.playlists ?
      this.state.playlists.filter(playlist => {
        // Here I apply the filter for Playlist name
        let matchesPlaylist = playlist.name.toLowerCase()
        .includes(this.state.filterString.toLocaleLowerCase());
        return matchesPlaylist;
      }) : []

    return (
      <div className="App">
        {
          this.state.user ?
            <div>
              <img src={logo} alt="Spotifood"></img>
              <h2>User logged in: <span style={{color: 'green', fontWeight: 'bold'}}>{this.state.user.name}</span></h2>
              <PlaylistCounter playlists={playlistToShow} />
              <TotalTracks playlists={playlistToShow} />
              <Filter onTextChange={text => this.setState({ filterString: text })}
                onChangeFilters={this.filterList}
                filterValues={this.state.filters} />
              {
                playlistToShow.length > 0 ?
                  playlistToShow.map((playlist, i) => <Playlist key={i} playlist={playlist} index={i} />)
                  : <div style={{ color: 'red', fontWeight: 'bold', marginTop: '50px' }}>No Playlist</div>
              }
            </div> : <button onClick={() => {
                this.openSpotifyLogin();
            }
            }
              style={{ padding: '', fontSize: '50px', marginTop: '20px' }}>Sign in with Spotify</button>
        }
      </div>
    );
  }

}

export default App;