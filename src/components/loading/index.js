import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Loading ({ isLoading }) {
  return (
    <>
      {isLoading &&
        <S.Container role="loading">
          <S.Content>
            <S.IconDisc name='icon-disc'/>
          </S.Content>
        </S.Container>
      }
    </>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool
}

Loading.defaultProps = {
  isLoading: false
}
