export default {
  mockPlaylists: {
    "message": "Curta uma boa música para começar o dia!",
    "playlists": {
      "href": "https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=pt_br&timestamp=2019-01-10T11%3A52%3A46&offset=0&limit=1",
      "items": [
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6aTaZa0K6VA"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6aTaZa0K6VA",
          "id": "37i9dQZF1DX6aTaZa0K6VA",
          "images": [
            {
              "height": null,
              "url": "https://pl.scdn.co/images/pl/default/24ec259debe9dc7e790b1b70a13b2e6f5a369650",
              "width": null
            }
          ],
          "name": "Pop Up",
          "owner": {
            "display_name": "Spotify",
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify"
          },
          "primary_color": null,
          "public": null,
          "snapshot_id": "MTU0NzIzNjQyMywwMDAwMDE2ZTAwMDAwMTY4M2U3YTM4OTcwMDAwMDE2ODNhYjU3MjBi",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6aTaZa0K6VA/tracks",
            "total": 53
          },
          "type": "playlist",
          "uri": "spotify:user:spotify:playlist:37i9dQZF1DX6aTaZa0K6VA"
        }
      ],
      "limit": 1,
      "next": "https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=pt_br&timestamp=2019-01-10T11%3A52%3A46&offset=1&limit=1",
      "offset": 0,
      "previous": null,
      "total": 12
    }
  },

  mockPlaylistsItems: [
    {
      "collaborative": false,
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6aTaZa0K6VA"
      },
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6aTaZa0K6VA",
      "id": "37i9dQZF1DX6aTaZa0K6VA",
      "images": [
        {
          "height": null,
          "url": "https://pl.scdn.co/images/pl/default/24ec259debe9dc7e790b1b70a13b2e6f5a369650",
          "width": null
        }
      ],
      "name": "Pop Up",
      "owner": {
        "display_name": "Spotify",
        "external_urls": {
          "spotify": "https://open.spotify.com/user/spotify"
        },
        "href": "https://api.spotify.com/v1/users/spotify",
        "id": "spotify",
        "type": "user",
        "uri": "spotify:user:spotify"
      },
      "primary_color": null,
      "public": null,
      "snapshot_id": "MTU0NzIzNjQyMywwMDAwMDE2ZTAwMDAwMTY4M2U3YTM4OTcwMDAwMDE2ODNhYjU3MjBi",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6aTaZa0K6VA/tracks",
        "total": 53
      },
      "type": "playlist",
      "uri": "spotify:user:spotify:playlist:37i9dQZF1DX6aTaZa0K6VA"
    }
  ],

  mockFilters: [
    {
      "id": "country",
      "name": "País",
      "values": [
        {
          "value": "AU",
          "name": "Australia"
        },
        {
          "value": "DE",
          "name": "Alemanhã"
        },
        {
          "value": "BR",
          "name": "Brasil"
        },
        {
          "value": "PT",
          "name": "Portugal"
        },
        {
          "value": "en_US",
          "name": "EUA"
        },
        {
          "value": "RU",
          "name": "Rússia"
        }
      ]
    }
  ]
}