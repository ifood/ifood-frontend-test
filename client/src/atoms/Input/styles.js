import styled from "styled-components";
import { gray, white } from "../../assets/_colors";

export const StyledInput = styled.input`
  background: ${white.primary};
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 25px;
  width: 100%;
  font-family: 'Inconsolata';
  padding: 8px;

  &::placeholder {
    color ${gray.trout};
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${gray.mono};
  background: ${white.primary};
  box-sizing: border-box;
  border-radius: 8px;
  width: 280px;
  height: 48px;
  outline: none;

  > svg {
    display: flex;
    margin: auto 8px auto 0;
  }
`;
