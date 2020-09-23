import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Wrapper, Container, Image, Title } from './styles'

const PlaylistElement = ({ name, collaborative, image, link }) => (
  <Container>
    <Image src={image.url} alt={name} />
    <Title>{name}</Title>
    <p>
      {collaborative ? 'Colaborative Playlist' : 'Non collaborative playlist'}
    </p>
    <a href={link}>Ver detalhes {'>'}</a>
  </Container>
)

PlaylistElement.propTypes = {
  name: PropTypes.string,
  collaborative: PropTypes.bool,
  image: PropTypes.objectOf({
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string,
  }),
  link: PropTypes.string,
}

PlaylistElement.defaultProps = {
  name: '',
  collaborative: false,
  image: {
    height: 0,
    width: 0,
    url: '/',
  },
  link: '',
}

const PlaylistProvider = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  return (
    <Wrapper>
      {playlists.map((playlist) => {
        const { id, name, collaborative, image, link } = playlist

        return (
          <PlaylistElement
            key={id}
            name={name}
            collaborative={collaborative}
            image={image}
            link={link}
          />
        )
      })}
    </Wrapper>
  )
}

export { PlaylistElement }

export default PlaylistProvider
