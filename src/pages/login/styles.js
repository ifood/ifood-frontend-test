import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`

export const Spinner = styled.img`
  width: 30px;
  animation: ${rotate360} 2s linear infinite;
`
