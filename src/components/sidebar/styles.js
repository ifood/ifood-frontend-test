import styled, { keyframes } from 'styled-components'

import { colors } from 'styles'

const slide = keyframes`
  from { width: 0 }
  to { width: 400px }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grayDark};
  @media (max-width: 800px) {
    animation-name: ${slide};
    animation-duration: 1s;
    display: ${(props) => (props.hide ? 'none' : 'inline')};
    width: 400px;
    overflow-y: scroll;
  }
`
