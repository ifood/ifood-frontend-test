import styled from 'styled-components';
import { black, primary } from '../../styles/global';

export const StyledButton = styled.button`
  background: ${primary};
  color: ${black};
  font-size: 1rem;
  margin: 1rem 0;
  padding: 0.25rem 1rem;
  border: 2px solid ${primary};
  border-radius: 0.5rem;
  height: 2.5rem;
  min-width: 200px;
`;
