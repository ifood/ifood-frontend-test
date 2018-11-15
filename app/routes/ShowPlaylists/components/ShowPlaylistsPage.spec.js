/* eslint-disable import/namespace */
import React from 'react';
import { shallow } from 'enzyme';
import ShowPlaylistsPage from './ShowPlaylistsPage';
import * as api from '../modules/ShowPlaylistsAPI';

jest.mock('Helpers/fetchWrapper', () => { });
jest.mock('../modules/ShowPlaylistsAPI');

function render(props) {
  const defaultProps = {
    token: '',
    error: false,
    intl: { formatMessage: () => '' }
  };

  return shallow(<ShowPlaylistsPage {...{ ...defaultProps, ...props }} />);
}

const mockFilters = {
  'filters': [
    {
      'id': 'locale',
      'name': 'Locale',
      'values': [
        {
          'value': 'en_AU',
          'name': 'en_AU'
        },
        {
          'value': 'de_DE',
          'name': 'de_DE '
        },
        {
          'value': 'pt_BR',
          'name': 'pt_BR'
        },
        {
          'value': 'fr_FR',
          'name': 'fr_FR'
        },
        {
          'value': 'en_US',
          'name': 'en_US'
        },
        {
          'value': 'es_AR',
          'name': 'es_AR'
        }
      ]
    },
    {
      'id': 'country',
      'name': 'País',
      'values': [
        {
          'value': 'AU',
          'name': 'Australia'
        },
        {
          'value': 'DE',
          'name': 'Alemanhã'
        },
        {
          'value': 'BR',
          'name': 'Brasil'
        },
        {
          'value': 'PT',
          'name': 'Portugal'
        },
        {
          'value': 'en_US',
          'name': 'EUA'
        },
        {
          'value': 'RU',
          'name': 'Rússia'
        }
      ]
    },
    {
      'id': 'timestamp',
      'name': 'Data e Horário',
      'validation': {
        'primitiveType': 'STRING',
        'entityType': 'DATE_TIME',
        'pattern': 'yyyy-MM-ddTHH:mm:ss'
      }
    },
    {
      'id': 'limit',
      'name': 'Quantidade',
      'validation': {
        'primitiveType': 'INTEGER',
        'min': 1,
        'max': 50
      }
    },
    {
      'id': 'offset',
      'name': 'Página',
      'validation': {
        'primitiveType': 'INTEGER'
      }
    }
  ]
};

const mockResponsePlaylists = {
  'message': 'Monday morning music, coming right up!',
  'playlists': {
    'href': 'https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-05-18T06:44:32&offset=0&limit=2',
    'items': [{
      'collaborative': false,
      'external_urls': {
        'spotify': 'http://open.spotify.com/user/spotify/playlist/6ftJBzU2LLQcaKefMi7ee7'
      },
      'href': 'https://api.spotify.com/v1/users/spotify/playlists/6ftJBzU2LLQcaKefMi7ee7',
      'id': '6ftJBzU2LLQcaKefMi7ee7',
      'images': [{
        'height': 300,
        'url': 'https://i.scdn.co/image/7bd33c65ebd1e45975bbcbbf513bafe272f033c7',
        'width': 300
      }],
      'name': 'Monday Morning Mood',
      'owner': {
        'external_urls': {
          'spotify': 'http://open.spotify.com/user/spotify'
        },
        'href': 'https://api.spotify.com/v1/users/spotify',
        'id': 'spotify',
        'type': 'user',
        'uri': 'spotify:user:spotify'
      },
      'public': null,
      'snapshot_id': 'WwGvSIVUkUvGvqjgj/bQHlRycYmJ2TkoIxYfoalWlmIZT6TvsgvGMgtQ2dGbkrAW',
      'tracks': {
        'href': 'https://api.spotify.com/v1/users/spotify/playlists/6ftJBzU2LLQcaKefMi7ee7/tracks',
        'total': 245
      },
      'type': 'playlist',
      'uri': 'spotify:user:spotify:playlist:6ftJBzU2LLQcaKefMi7ee7'
    }, {
      'collaborative': false,
      'external_urls': {
        'spotify': 'http://open.spotify.com/user/spotify__sverige/playlist/4uOEx4OUrkoGNZoIlWMUbO'
      },
      'href': 'https://api.spotify.com/v1/users/spotify__sverige/playlists/4uOEx4OUrkoGNZoIlWMUbO',
      'id': '4uOEx4OUrkoGNZoIlWMUbO',
      'images': [{
        'height': 300,
        'url': 'https://i.scdn.co/image/24aa1d1b491dd529b9c03392f350740ed73438d8',
        'width': 300
      }],
      'name': 'Upp och hoppa!',
      'owner': {
        'external_urls': {
          'spotify': 'http://open.spotify.com/user/spotify__sverige'
        },
        'href': 'https://api.spotify.com/v1/users/spotify__sverige',
        'id': 'spotify__sverige',
        'type': 'user',
        'uri': 'spotify:user:spotify__sverige'
      },
      'public': null,
      'snapshot_id': '0j9Rcbt2KtCXEXKtKy/tnSL5r4byjDBOIVY1dn4S6GV73EEUgNuK2hU+QyDuNnXz',
      'tracks': {
        'href': 'https://api.spotify.com/v1/users/spotify__sverige/playlists/4uOEx4OUrkoGNZoIlWMUbO/tracks',
        'total': 38
      },
      'type': 'playlist',
      'uri': 'spotify:user:spotify__sverige:playlist:4uOEx4OUrkoGNZoIlWMUbO'
    }],
    'limit': 2,
    'next': 'https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-05-18T06:44:32&offset=2&limit=2',
    'offset': 0,
    'previous': null,
    'total': 12
  }
};

function fakeFilterPromise() {
  return Promise.resolve(mockFilters);
}

function fakePlaylistsPromise() {
  return Promise.resolve(mockResponsePlaylists);
}

function fakeRejectFilter() {
  return Promise.reject();
}

function fakeRejectPlaylists() {
  return Promise.reject();
}

describe('Routes/ShowPlaylists/components/ShowPlaylistsPage', () => {
  test('should mount filter and the initial playlists list on didMount', async () => {
    api.getFilters = () => fakeFilterPromise();
    api.getPlaylists = () => fakePlaylistsPromise();
    const wrapper = render();
    const data = await Promise.all([api.getFilters(), api.getPlaylists()]);
    wrapper.update();
    // doing a quick and dirty check
    expect(wrapper.state('filters')[0].id).toEqual(data[0].filters[0].id);
  });

  test('should create an empty array in state for filters and playlists in case of error on didMount', async () => {
    api.getFilters = () => fakeRejectFilter();
    api.getPlaylists = () => fakeRejectPlaylists();
    const wrapper = render();
    try {
      await Promise.all([api.getFilters(), api.getPlaylists()]);
    } catch (e) {
      expect(wrapper.state('filters').length).toEqual(0);
      expect(wrapper.state('playlists').length).toEqual(0);
    }
  });

  test('should fetch a new playlists lists and setup state on getPlaylists', async () => {
    api.getPlaylists = () => fakePlaylistsPromise();
    api.getFilters = () => fakeFilterPromise();
    const wrapper = render();
    await wrapper.instance().getPlaylists();
    wrapper.update();
    // doing a quick and dirty check
    expect(wrapper.state('playlists')[0].id).toEqual(mockResponsePlaylists.playlists.items[0].id);
  });
});
