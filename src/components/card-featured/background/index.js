import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Background ({ bg, title }) {
  return (
    <S.Container>
      <S.Content bg={bg}>
        <S.Shadow>
          <S.IconPlay />
          <S.Title>{title}</S.Title>
        </S.Shadow>
      </S.Content>
    </S.Container>
  )
}

Background.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
