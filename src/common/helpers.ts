export function filterPlaylistByName(name: string, currentPlaylist: Array<string>) {
  if (!name) {
    return [];
  }
  return currentPlaylist.filter((e: any) => e.name.toLowerCase().includes(name.toLowerCase()));
}
