import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));


  @media(min-width: 960px) {
    padding: 24px;
    grid-gap: 24px;
  }
`;

const EmptyState = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 100;
`;

export { Container, EmptyState };
