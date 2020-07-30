import styled from 'styled-components'
import usePlaylists, { PlaylistProvider } from '../contexts/PlaylistContext'
import Filter from '../components/Filter'
import Loader from '../components/Loader'
import { withContext } from '../hocs/withContext'
import { colors, mediaQueries } from '../assets/styles/default-style'
import { CALL_TO_ACTION_PLAYLIST_ITEM } from '../constants/pages'

const Playlists = () => {
  const { featuredPlaylists, loadingPlaylists } = usePlaylists()

  return (
    <PlaylistStyle>
      {loadingPlaylists ? (
        <Loader centered />
      ) : (
        <>
          <Filter />
          <div className="playlist">
            <h1>
              {featuredPlaylists.message}
            </h1>
            <ul className="playlist-list">
              {featuredPlaylists.playlists.items.map((playlist) => (
                <PlaylistItemStyle 
                  image={playlist.images.length ? playlist.images[0].url : './cd.png' }
                  key={playlist.id}
                >
                  <a 
                    target="_blank"
                    href={playlist.external_urls.spotify}
                    rel="noreferrer"
                  >
                    <span className="playlist-cta">{CALL_TO_ACTION_PLAYLIST_ITEM}</span>
                    <div className="playlist-item-wrapper">
                      {playlist.name ?
                        <h2>
                          {playlist.name}
                        </h2> : null
                      }
                      <br />
                      {playlist.owner && playlist.owner.display_name ?
                        <p>{`por ${playlist.owner.display_name}`}</p> : null
                      }
                    </div>
                  </a>
                </PlaylistItemStyle>
              ))}
            </ul>
          </div>
        </>
      )}
    </PlaylistStyle>
  )
}

const PlaylistItemStyle = styled.li`
  cursor: pointer;
  height: 400px;
  margin-bottom: 30px; 
  position: relative;
  width: 100%;

  .playlist-item-wrapper {
    bottom: 20px;
    left: 0;
    position: absolute;
    width: 90%;

    h2 {
      background-color: ${colors.pink};
      color: ${colors.purple};
      display: inline;
      line-height: 1.75;
    }

    p {
      background-color: ${colors.pink};
      color: ${colors.purple};
      display: inline;
      font-family: 'Kanit', sans-serif;
      line-height: 2;
      margin: 0;
      text-transform: lowercase;
    }
  }

  a {
    display: block;
    height: 100%;
    width: 100%;

    .playlist-cta {
      background-color: ${colors.purple};
      color: ${colors.pink};
      font-family: 'Kanit', sans-serif;
      font-size: 1rem;
      position: absolute;
      transition: all .3s ease-in-out;
      top: 20px;
      right: -10px;
      z-index: 0;

      &:after {
        background-color: ${colors.pink};
        content: '';
        height: 0;
        left: 0;
        position: absolute;
        top: 0;
        transition: all .3s ease-in-out;
        width: 100%;
        z-index: -1;
      }
    }

    &:hover {
      &:after {
        transform: skew(1deg, 1deg);
      }

      .playlist-cta {
        background-color: transparent;
        color: ${colors.purple};
      }

      .playlist-cta:after {
        height: 24px;
      }
    }

    &:after {
      background-image: url(${({image}) => image});
      background-position: center;
      background-size: cover;
      content: '';
      height: 100%;
      max-width: 300px;
      position: absolute;
      top: 0;
      right: 30px;
      transition: all .3s ease-in-out;
      width: 75%;
      z-index: -1;
    }

    @media (max-width: ${mediaQueries.mobile.max}px) {
      max-width: 350px;
      margin: 0 auto;
      position: relative;
    }
  }

  @media (min-width: 500px) {
    width: calc(100%/2);
  }
`

const PlaylistStyle = styled.div`
  margin: 50px auto;
  max-width: 800px;
  width: 100%;

  .playlist {
    margin-top: 50px;
    padding: 0 20px;

    h1 {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
      font-size: 4rem;
      letter-spacing: 2px;
      line-height: 1.2;
      margin-bottom: 30px;
      text-transform: uppercase;

      @media (max-width: ${mediaQueries.mobile.max}px) {
        font-size: 3rem;
      }
    }
  }

  .playlist-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export default withContext(PlaylistProvider, Playlists)
