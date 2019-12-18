import axios from 'axios'

import { getPlaylists } from '.'

import playlistsMock from '../../__mocks__/playlists.json'

jest.mock('axios')

describe('Spotify service', () => {
  xit('should return playlists payload', async () => {
    const data = { data: playlistsMock }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))

    const response = await getPlaylists()

    expect(response.data).toHaveProperty('filters')
  })
})
