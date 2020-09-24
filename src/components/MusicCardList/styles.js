import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showListMusic {
    from {
      opacity: 0;
      -webkit-transform: translateY(500px);
      transform: translateY(500px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const Card = styled.div`
  margin-top: 25px;
`

const Wrapper = styled.div`
  padding: 10px;
  max-width: 33.333%;
  display: inline-block;
  vertical-align: top;
  ${keyframes}
  animation: showListMusic 1300ms;

  @media (max-width: 992px) {
    max-width: 49.333%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const Link = styled.a`
  position: relative;
  padding: 5px;
  background: var(--white);
  box-shadow: 0.2rem 0.2rem 0.2rem 0 var(--blue-rgba);
  border-radius: 6px;
  display: block;

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 6px;
    background: var(--black-rgba);
    z-index: 1;
    display: none;
  }

  .details-row {
    display: none;

    svg {
      path {
        fill: var(--primary);
      }
    }
  }

  &:hover {
    &:after,
    .details-row {
      display: block;
    }
  }

  @media (max-width: 768px) {
    &:after,
    .details-row {
      display: block;
    }
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 6px;
`

const Details = styled.div`
  position: absolute;
  left: 0;
  bottom: 20px;
  padding: 15px;
  width: 100%;
  text-align: center;
  display: none;
  z-index: 2;
`

const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: none;
`

const Description = styled.p`
  margin-top: 5px;
  color: var(--white);
  font-size: 1rem;

  &.playlist-not-found {
    margin: 0;
    color: var(--primary);
  }
`

export { Card, Wrapper, Link, Image, Details, Name, Description }
