import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Filters = styled.div`
    padding: 20px;
`;

export const LogInButton = styled.button`
  width: 300px;
  align-self: center;
  border-radius: 30px;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-weight: 500;
  background: #24d15e;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, "#24d15e")}
  }
`
