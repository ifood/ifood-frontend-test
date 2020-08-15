import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  a {
    width: 300px;
    height: 300px;
    transition: transform ease 0.3s;
    &:hover {
      transform: scale(1.1);
      z-index: 2;
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
    font-size: 3rem;
  }
`;
