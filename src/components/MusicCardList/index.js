import React from 'react'

import { useFeaturedMusic } from '~/contexts'

import { Container, Row, Col } from '~/components/Bootstrap'
import { FontAwesomeIcon, faPlayCircle } from '~/components/Fontawesome'

import Loading from '~/components/Loading'

import {
  Card,
  Wrapper,
  Link,
  Image,
  Details,
  Name,
  Description,
} from './styles'

export default function MusicCardList() {
  const { loading, filterPlaylistName, playlistSearchName } = useFeaturedMusic()

  return (
    <Container>
      {!!loading ? (
        <Loading />
      ) : (
        <Row>
          <Col>
            <Card>
              {!!filterPlaylistName(playlistSearchName) &&
                (filterPlaylistName(playlistSearchName).length > 0 ? (
                  filterPlaylistName(playlistSearchName).map((item, key) => (
                    <Wrapper key={key}>
                      <Link
                        href={item.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.images.map((image, key) => (
                          <Image key={key} src={image.url} />
                        ))}

                        <Details className="details-row">
                          <FontAwesomeIcon icon={faPlayCircle} size="3x" />

                          <Name>{item.name}</Name>

                          <Description>{item.description}</Description>
                        </Details>
                      </Link>
                    </Wrapper>
                  ))
                ) : (
                  <Description className="playlist-not-found">
                    Não foi encontrado nenhuma playlist.
                  </Description>
                ))}
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
}
