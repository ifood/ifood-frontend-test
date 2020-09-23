import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showFoodLovers {
    from {
      opacity: 0;
      -webkit-transform: translateX(-200px);
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
  width: ${(props) => (props.small ? '17%' : '20%')};
  ${keyframes}
  animation: showFoodLovers 1200ms;

  @media (max-width: 768px) {
    display: none;

    &.foodlover-man {
      margin: 0 auto;
      width: 60%;
      display: block;
    }
  }
`

export { Container, Image }
