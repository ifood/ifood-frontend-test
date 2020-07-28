import usePlaylists, { PlaylistProvider } from '../contexts/PlaylistContext'
import Filter from '../components/Filter'
import { withContext } from '../hocs/withContext'

const Playlists = () => {
  const { featuredPlaylists, loadingPlaylists } = usePlaylists()

  return (
    <div>
      {loadingPlaylists ? (
        <p>loading</p>
      ) : (
        <div>
          <Filter />
          <h1>{featuredPlaylists.message}</h1>
          <ul>
            {featuredPlaylists.playlists.items.map((playlist) => (
              <li key={playlist.id}>
                <p>{playlist.name}</p>
                <img loading="lazy" src={playlist.images[0].url} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default withContext(PlaylistProvider, Playlists)
