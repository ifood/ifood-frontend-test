import styled from 'styled-components';
import { shade } from "polished";

export const Container = styled.button`
  width: 300px;
  align-self: center;
  border-radius: 30px;
  border: 0;
  padding: 15px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #ffffff;
  font-weight: 500;
  background: #24d15e;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, "#24d15e")};
    transform: scale(1.05);
  }
`;
