import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 0;

  a {
    display: flex;
    align-items: center;

    background-color: #303030;
    border-radius: 0.7rem;
    color: #fff;
    padding: 1rem;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(0.8rem);
    }

    img {
      border-radius: 0.7rem;
      height: 7rem;
      width: 7rem;
    }

    div {
      flex: 1;
      margin-left: 1rem;

      strong {
        display: block;
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #c2c2c2;
        line-height: 1.3rem;
      }
    }
  }
`;
