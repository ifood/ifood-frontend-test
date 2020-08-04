import styled, { keyframes } from 'styled-components'

import Icon from '../icon'

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 9999;
`

export const Content = styled.div``

export const IconDisc = styled(Icon)`
  animation: ${rotation} 3s linear infinite;
  fill: ${props => props.theme.palette.green};
  height: 28px;
  width: 28px;
`
