import styled from 'styled-components'

import { colors } from 'styles'

export const Container = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  background-color: ${colors.grayDark};
  @media (max-width: 800px) {
    display: none;
  }
`
