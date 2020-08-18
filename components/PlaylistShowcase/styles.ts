import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  a {
    width: 100%;
    height: auto;
    transition: transform ease 0.3s;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    &:hover {
      transform: scale(1.1);
      z-index: 2;

      div {
        opacity: 1;
      }

      img {
        filter: blur(2.5px);
      }
    }
    @media (max-width: 900px) {
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
    }
  }
`;

export const ShowcaseTitle = styled.h1`
  color: #fff;
  font-size: 5rem;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 3rem;
  }
`;

export const Description = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  opacity: 0;
  transition: opacity ease 0.3s;

  p,
  h3 {
    color: #fff;
    text-align: center;
  }
  p {
    width: 80%;
    margin-top: 1rem;
  }
  @media (max-width: 900px) {
    h3 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
