import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showTitle {
    from {
      opacity: 0;
      -webkit-transform: translateY(-200px);
      transform: translateY(-200px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const Title = styled.h1`
  margin-top: 40px;
  font-weight: 700;
  ${keyframes}
  animation: showTitle 1000ms;

  strong {
    color: var(--primary);
  }
`

export { Title }
