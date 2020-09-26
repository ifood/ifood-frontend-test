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

const PlaylistElement = ({ name, description, image, hidden }) => (
  <Container hidden={hidden}>
    <Image src={image} alt={name} />
    <Title>{name}</Title>
    <Description>{ReactHtmlParser(description)}</Description>
  </Container>
)

PlaylistElement.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  hidden: PropTypes.bool,
}

PlaylistElement.defaultProps = {
  name: '',
  description: '',
  image: '/',
  hidden: false,
}

const PlaylistProvider = () => {
  const dispatch = useDispatch()
  const { playlists, loading } = useSelector(({ playlist }) => playlist)
  const { currentFilters: { name } = {}, hidden } = useSelector(
    ({ filter }) => filter
  )

  const handleHideSidebar = () => {
    if (!hidden) {
      dispatch(toggleSidebar())
    }
  }

  const filteredPlaylist = playlists.filter((playlist) =>
    containedString(playlist.name, name)
  )

  if (!filteredPlaylist.length && !loading)
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
            hidden={hidden}
          />
        ))
      ) : (
        <Skeleton />
      )}
    </Wrapper>
  )
}

export { PlaylistElement }

export default PlaylistProvider
