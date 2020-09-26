import styled from 'styled-components'

import { colors } from 'styles'

export const Container = styled.div`
  display: flex;
  min-width: 200px;
  flex-direction: column;
  background-color: ${colors.grayDark};
  padding-bottom: 15px;
  @media (max-width: 800px) {
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
    overflow-y: scroll;
  }
`
