import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  padding: 24px;
`;

export default Container;
