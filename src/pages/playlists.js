import styled from 'styled-components'
import usePlaylists, { PlaylistProvider } from '../contexts/PlaylistContext'
import Filter from '../components/Filter'
import Loader from '../components/Loader'
import { withContext } from '../hocs/withContext'

const Playlists = () => {
  const { featuredPlaylists, loadingPlaylists } = usePlaylists()

  return (
    <PlaylistStyle className="playlist">
      {loadingPlaylists ? (
        <Loader centered />
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
    </PlaylistStyle>
  )
}

const PlaylistStyle = styled.div`
  margin: 50px auto;
  max-width: 800px;
  width: 100%;
`

export default withContext(PlaylistProvider, Playlists)
