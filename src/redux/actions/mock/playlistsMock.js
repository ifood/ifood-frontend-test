export const playlistsMock = [{
  message: 'Editor\'s picks',
  playlists: {
    href: 'https://api.spotify.com/v1/browse/featured-playlists?timestamp=2020-09-12T08%3A09%3A00&offset=0&limit=1',
    items: [
      {
        collaborative: false,
        description: 'It\'s the day after and the last thing you need is loud noises.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWUGsgkESc7qP'
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWUGsgkESc7qP',
        id: '37i9dQZF1DWUGsgkESc7qP',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000003b0cdd83e7f214cb6d884f0dd',
            width: null
          }
        ],
        name: 'Hangover Friendly',
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
        'public': null,
        snapshot_id: 'MTYwMzM2NzgxNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWUGsgkESc7qP/tracks',
          total: 100
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWUGsgkESc7qP'
      }
    ]
  }
}]
