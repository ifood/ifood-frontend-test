import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 32px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 350px auto;
    grid-column-gap: 24px;
  }
`;

export const FilterBox = styled.div`
  background-color: #333;
`;

export const ListContainer = styled.div`
  background-color: #d32323;
`;
