import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showSearch {
    from {
      opacity: 0;
      -webkit-transform: translateX(500px);
      transform: translateX(500px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes iconSearch {
    from {
      opacity: 0;
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  margin-top: 40px;

  svg {
    position: absolute;
    top: 15px;
    left: 25px;
    color: var(--primary);
    ${keyframes}
    animation: showSearch 800ms;
  }

  .icon-right {
    left: unset;
    right: 25px;
    display: none;
    animation: iconSearch 800ms;
    cursor: pointer;

    &.active {
      display: block;
    }
  }

  input {
    padding: 25px 40px;
    box-shadow: 0.2rem 0.2rem 0.2rem 0 var(--blue-rgba);
    ${keyframes}
    animation: showSearch 800ms;

    &:focus {
      border-color: var(--blue-rgba) !important;
      box-shadow: 0 0 0 0.2rem var(--blue-rgba) !important;
    }
  }

  @media (max-width: 992px) {
    .col {
      margin-bottom: 20px;
    }
  }
`

const Button = styled.button`
  padding: 15px 25px 15px 25px;
  width: 100%;
  color: var(--white);
  border-radius: 6px;
  background: var(--secondary);
  ${keyframes}
  animation: showSearch 1000ms;

  &:hover {
    background: var(--hover);
  }
`

const Text = styled.p`
  margin: 5px 0 0;
  color: var(--text);
  font-size: 13px;
`

export { Wrapper, Button, Text }
