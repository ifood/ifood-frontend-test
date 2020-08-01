import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import Background from './background'
import Pagination from './pagination'

export default function CardFeatured ({ title, playlists, searchies, onSubmit }) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title} Featured Playlists </S.Title>
        <Pagination
          totalItems={playlists.total}
          limit={searchies.limit}
          onSubmitPagination={onSubmit}/>
        <S.WrapperCard>
          {playlists.items && playlists.items.map(item => (
            <S.Card key={item.id}>
              <S.LinkSpotify href={item.external_urls.spotify} target='_blank'>
                <Background
                  bg={item.images[0].url}
                  title={item.name}/>
              </S.LinkSpotify>
              <S.TitleItem>{item.name}</S.TitleItem>
            </S.Card>
          ))}
        </S.WrapperCard>
      </S.Content>
    </S.Container>
  )
}

CardFeatured.propTypes = {
  title: PropTypes.string,
  playlists: PropTypes.shape({
    total: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string
      }))
    }))
  }).isRequired,
  searchies: PropTypes.shape({
    limit: PropTypes.number
  }),
  onSubmit: PropTypes.func.isRequired
}
