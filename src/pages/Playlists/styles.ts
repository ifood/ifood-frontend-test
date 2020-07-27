import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 32px;
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
