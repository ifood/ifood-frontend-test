import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import Skeleton from './components/skeleton'

import { containedString } from 'utils'

import {
  Wrapper,
  Container,
  Image,
  Title,
  Description,
  NotFound,
} from './styles'

const PlaylistElement = ({ name, description, image }) => (
  <Container>
    <Image src={image} alt={name} />
    <Title>{name}</Title>
    <Description>{ReactHtmlParser(description)}</Description>
  </Container>
)

PlaylistElement.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

PlaylistElement.defaultProps = {
  name: '',
  description: '',
  image: '/',
}

const PlaylistProvider = () => {
  const { playlists, loading } = useSelector(({ playlist }) => playlist)
  const { currentFilters: { name } = {} } = useSelector(({ filter }) => filter)

  const filteredPlaylist = playlists.filter((playlist) =>
    containedString(playlist.name, name)
  )

  if (!filteredPlaylist.length && !loading)
    return <NotFound>No results found for {`"${name}"`}</NotFound>

  return (
    <Wrapper>
      {!loading ? (
        filteredPlaylist.map((playlist) => (
          <PlaylistElement
            key={playlist.id}
            name={playlist.name}
            description={playlist.description}
            image={playlist.image}
          />
        ))
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Wrapper>
  )
}

export { PlaylistElement }

export default PlaylistProvider
