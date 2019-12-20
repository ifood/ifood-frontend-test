import mockAxios from 'axios'

import { getPlaylists } from '.'

import playlistsMock from '../../__mocks__/playlists.json'

describe('Spotify service', () => {
  it('should return playlists payload', async () => {
    const data = { data: playlistsMock }

    mockAxios.get.mockResolvedValue(data)

    const response = await getPlaylists()

    expect(response.data).toEqual(playlistsMock)
  })
})
