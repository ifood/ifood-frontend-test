import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Card from 'playlist/components/playlist/card'

test('It should mount the component.', async () => {
  render(
    <Card
      item={{
        collaborative: false,
        description: 'Steady rain without any thunder.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX8ymr6UES7vc'
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX8ymr6UES7vc',
        id: '37i9dQZF1DX8ymr6UES7vc',
        images: [
          {
            height: null,
            url:
              'https://i.scdn.co/image/ab67706f00000003aba1f07094bd3e98cd0122de',
            width: null
          }
        ],
        name: 'Rain Sounds',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify'
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify'
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'MTYwMjcwMzk5NCwwMDAwMDAyMjAwMDAwMTc1Mjg5YTJjZjgwMDAwMDE3M2I4ZGU5Yjgx',
        tracks: {
          href:
            'https://api.spotify.com/v1/playlists/37i9dQZF1DX8ymr6UES7vc/tracks',
          total: 116
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX8ymr6UES7vc'
      }}
    />
  )

  expect(screen.getByText(/Total de músicas: /i)).toBeInTheDocument()
})
