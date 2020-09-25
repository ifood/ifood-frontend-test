import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { containedString } from 'utils'

import { Wrapper, Container, Image, Title } from './styles'

const PlaylistElement = ({ name, collaborative, image }) => (
  <Container>
    <Image src={image} alt={name} />
    <Title>{name}</Title>
    <p>
      {collaborative ? 'Colaborative Playlist' : 'Non collaborative playlist'}
    </p>
  </Container>
)

PlaylistElement.propTypes = {
  name: PropTypes.string,
  collaborative: PropTypes.bool,
  image: PropTypes.string,
}

PlaylistElement.defaultProps = {
  name: '',
  collaborative: false,
  image: '/',
}

const PlaylistProvider = () => {
  const { playlists, loading } = useSelector(({ playlist }) => playlist)
  const { currentFilters: { name } = {} } = useSelector(({ filter }) => filter)

  if (loading) return <h1>loading...</h1>

  return (
    <Wrapper>
      {playlists
        .filter((playlist) => containedString(playlist.name, name))
        .map((playlist) => {
          const { id, name, collaborative, image } = playlist

          return (
            <PlaylistElement
              key={id}
              name={name}
              collaborative={collaborative}
              image={image}
            />
          )
        })}
    </Wrapper>
  )
}

export { PlaylistElement }

export default PlaylistProvider
