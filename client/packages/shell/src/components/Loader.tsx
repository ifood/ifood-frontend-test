import React, { memo, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

const Spinner = styled.section`
  content: '';
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  z-index: 1;
  border-style: solid;
  margin: 20px;
  border-width: 3px;
  border-color: transparent;
  border-top-color: ${({ theme }) => theme.shell.color.primary};
  border-left-color: ${({ theme }) => theme.shell.color.primary};
  animation-name: ${spin};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

function Loader(): ReactElement {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  )
}

export default memo(Loader)