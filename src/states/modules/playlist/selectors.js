export const selectAllPlaylists = (payload) =>
  payload?.items?.map((playlist) => ({
    id: playlist.id,
    name: playlist.name,
    image: playlist.images[0],
    author: playlist.owner.spotify,
    link: playlist.href,
    description: playlist.description,
    collaborative: playlist.collaborative,
  }))
