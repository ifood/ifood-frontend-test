import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

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
  const { playlists } = useSelector(({ playlist }) => playlist)

  return (
    <Wrapper>
      {playlists.map((playlist) => {
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
