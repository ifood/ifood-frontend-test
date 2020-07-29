import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import Background from './background'

export default function CardFeatured ({ playlists }) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Featured Playlists</S.Title>
        <S.WrapperCard>
          {playlists.items && playlists.items.map(item => (
            <S.Card key={item.id}>
              <S.LinkSpotify href={item.external_urls.spotify} target='_blank'>
                <Background
                  bg={item.images[0].url}
                  title={item.name}
                />
              </S.LinkSpotify>
              <S.Description>{item.description}</S.Description>
            </S.Card>
          ))}
        </S.WrapperCard>
      </S.Content>
    </S.Container>
  )
}

CardFeatured.propTypes = {
  playlists: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string
      }))
    }))
  }).isRequired
}
