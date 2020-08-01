import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Header ({ children }) {
  return (
    <S.Container>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}

Header.propTypes = {
  children: PropTypes.element
}
