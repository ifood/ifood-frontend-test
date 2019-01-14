import playlistDataMock from './playlistDataMock'

export default {
  get: jest.fn(() => Promise.resolve({ data: playlistDataMock.mockPlaylists })),
  defaults: { headers: { common: [{ Authorization: 'teste' }] } }
};