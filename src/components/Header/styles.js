import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showHeader {
    from {
      opacity: 0;
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const HeaderContent = styled.header`
  position: relative;
  z-index: 10;

  .container-fluid {
    padding: 0;
  }
`

const Wrapper = styled.section`
  padding: 30px;
  width: 100%;
  height: 80px;
  background: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    ${keyframes}
    animation: showHeader 800ms;
  }
`

export { HeaderContent, Wrapper }
