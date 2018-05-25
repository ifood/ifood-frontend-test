export const getPlaylists = jest.fn(() => Promise.resolve({
  data: {
    playlists: {
      items: [],
    },
  },
}));
