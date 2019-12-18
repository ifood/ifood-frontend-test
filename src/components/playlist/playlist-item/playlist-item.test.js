import React from 'react'
import { render } from '@testing-library/react'
import { PlaylistItem } from '.'

describe('PlaylistItem', () => {
  let component

  beforeEach(() => {
    const playlist = {
      description:
        'A calm and relaxing Christmas piano soundtrack for the Holidays',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXbPHTEEyQ6Hv'
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbPHTEEyQ6Hv',
      id: '37i9dQZF1DXbPHTEEyQ6Hv',
      images: [
        {
          height: null,
          url:
            'https://i.scdn.co/image/ab67706f0000000299748689e4c7392f05545a1a',
          width: null
        }
      ],
      name: 'Christmas Peaceful Piano',
      snapshot_id:
        'MTU3NjU3OTU3OCwwMDAwMDA0OTAwMDAwMTZmMTM3NzM5MjIwMDAwMDE2ZDE1NTZjYWY1',
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DXbPHTEEyQ6Hv'
    }

    component = render(<PlaylistItem playlist={playlist} />)
  })

  it('should render component correctly', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })

  it('should find playlist description text', () => {
    const { getByText } = component
    const linkElement = getByText(/A calm and relaxing Christmas/i)
    expect(linkElement).toBeInTheDocument()
  })
})
