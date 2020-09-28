export const selectAllPlaylists = (payload) =>
  payload?.items?.map((playlist) => ({
    id: playlist.id,
    name: playlist.name,
    image: playlist.images[0]?.url,
    author: playlist.owner.spotify,
    link: playlist.external_urls?.spotify,
    description: playlist.description,
    collaborative: playlist.collaborative,
  }))
