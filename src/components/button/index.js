import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import * as S from './styles'

export default function Button ({ type, handleClick, template, children }) {
  return (
    <ThemeProvider theme={S.Themes[`${template}`]}>
      <S.Button
        type={type}
        onClick={() => handleClick()}>
        <S.Children>{children}</S.Children>
      </S.Button>
    </ThemeProvider>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  template: PropTypes.string,
  children: PropTypes.element
}

Button.defaultProps = {
  type: 'button',
  template: 'default',
  handleClick: () => {}
}
