import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import Skeleton from './components/skeleton'

import { toggleSidebar } from 'states/modules/filter'

import { containedString } from 'utils'

import {
  Wrapper,
  Container,
  Image,
  Title,
  Description,
  NotFound,
} from './styles'

const PlaylistElement = ({ name, description, image, hide, onClick }) => (
  <Container hide={hide} data-testid='playlist-container' onClick={onClick}>
    <Image src={image} alt={name} />
    <Title>{name}</Title>
    <Description>{ReactHtmlParser(description)}</Description>
  </Container>
)

PlaylistElement.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  hide: PropTypes.bool,
  onClick: PropTypes.func,
}

PlaylistElement.defaultProps = {
  name: '',
  description: '',
  image: '/',
  hide: false,
  onClick: () => null,
}

const PlaylistProvider = () => {
  const dispatch = useDispatch()

  const { playlists, loading, error } = useSelector(({ playlist }) => playlist)
  const { currentFilters: { name } = {}, hide } = useSelector(
    ({ filter }) => filter
  )

  const handleHideSidebar = () => {
    if (!hide) {
      dispatch(toggleSidebar())
    }
  }

  const handleClickPlaylist = (playlistLink) => {
    window.location.replace(playlistLink)
  }

  const filteredPlaylist = playlists.filter((playlist) =>
    containedString(playlist.name, name)
  )

  if (error) return <NotFound>No results found.</NotFound>

  if (!filteredPlaylist.length && !loading && name)
    return <NotFound>No results found for {`"${name}"`}</NotFound>

  return (
    <Wrapper onClick={handleHideSidebar}>
      {!loading ? (
        filteredPlaylist.map((playlist) => (
          <PlaylistElement
            key={playlist.id}
            name={playlist.name}
            description={playlist.description}
            image={playlist.image}
            hide={hide}
            onClick={() => handleClickPlaylist(playlist.link)}
          />
        ))
      ) : (
        <Skeleton />
      )}
    </Wrapper>
  )
}

export { PlaylistElement, PlaylistProvider }

export default PlaylistProvider
