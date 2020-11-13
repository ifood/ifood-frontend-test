import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

export const AppProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {children}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
}

export const mockFormikProps = {
  errors: {},
  values: {},
  handleChange: () => {},
  handleBlur: () => {},
  setFieldValue: () => {},
  setFieldTouched: () => {},
}

export const imageLink =
  'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b'

export const card = {
  id: 'test',
  name: 'test',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
  },
  images: [
    {
      url: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
    },
  ],
}

export const cardList = (number = 6) => {
  const list = []

  for (let i = 0; i < number; i++) {
    const id = card.id + i

    list.push({ ...card, id })
  }

  return list
}

export const advancedFilter = [
  {
    id: 'locale',
    name: 'Locale',
    values: [
      {
        value: 'en_AU',
        name: 'en_AU',
      },
      {
        value: 'de_DE',
        name: 'de_DE ',
      },
      {
        value: 'pt_BR',
        name: 'pt_BR',
      },
      {
        value: 'fr_FR',
        name: 'fr_FR',
      },
      {
        value: 'en_US',
        name: 'en_US',
      },
      {
        value: 'es_AR',
        name: 'es_AR',
      },
    ],
  },
  {
    id: 'country',
    name: 'País',
    values: [
      {
        value: 'AU',
        name: 'Australia',
      },
      {
        value: 'DE',
        name: 'Alemanhã',
      },
      {
        value: 'BR',
        name: 'Brasil',
      },
      {
        value: 'PT',
        name: 'Portugal',
      },
      {
        value: 'en_US',
        name: 'EUA',
      },
      {
        value: 'RU',
        name: 'Rússia',
      },
    ],
  },
  {
    id: 'timestamp',
    name: 'Data e Horário',
    validation: {
      primitiveType: 'STRING',
      entityType: 'DATE_TIME',
      pattern: 'yyyy-MM-ddTHH:mm:ss',
    },
  },
  {
    id: 'limit',
    name: 'Quantidade',
    validation: {
      primitiveType: 'INTEGER',
      min: 1,
      max: 50,
    },
  },
  {
    id: 'offset',
    name: 'Página',
    validation: {
      primitiveType: 'INTEGER',
    },
  },
]

export const playlists = {
  message: 'New Music Friday!',
  playlists: {
    href:
      'https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2020-11-13T12%3A49%3A08&offset=0&limit=2',
    items: [
      {
        collaborative: false,
        description: 'Äntligen fredag! Ny musik! Happy New Music Friday!',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXcecv7ESbOPu',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXcecv7ESbOPu',
        id: '37i9dQZF1DXcecv7ESbOPu',
        images: [
          {
            height: null,
            url:
              'https://i.scdn.co/image/ab67706f00000003af9685b5d3616954b050da98',
            width: null,
          },
        ],
        name: 'New Music Friday Sweden',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'MTYwNTI1NTg3MCwwMDAwMDJiNDAwMDAwMTc1YzBiNGI5ZWIwMDAwMDE3NWJjOWJlMDkz',
        tracks: {
          href:
            'https://api.spotify.com/v1/playlists/37i9dQZF1DXcecv7ESbOPu/tracks',
          total: 103,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DXcecv7ESbOPu',
      },
      {
        collaborative: false,
        description: 'Håll det 100.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWXfgo3OOonqa',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWXfgo3OOonqa',
        id: '37i9dQZF1DWXfgo3OOonqa',
        images: [
          {
            height: null,
            url:
              'https://i.scdn.co/image/ab67706f000000037c1acd9201741549440e0b4c',
            width: null,
          },
        ],
        name: '100',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'MTYwNTIyNDE1NywwMDAwMDViMTAwMDAwMTc1YmVkMGQyYjIwMDAwMDE3NWJkNTkzZTA0',
        tracks: {
          href:
            'https://api.spotify.com/v1/playlists/37i9dQZF1DWXfgo3OOonqa/tracks',
          total: 81,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWXfgo3OOonqa',
      },
    ],
    limit: 2,
    next:
      'https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2020-11-13T12%3A49%3A08&offset=2&limit=2',
    offset: 0,
    previous: null,
    total: 12,
  },
}
