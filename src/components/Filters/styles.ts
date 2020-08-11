import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: stretch;
  align-self: center;
  margin-top: 40px;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  color: #fff;
  transition: background 0.5;
  padding: 8px 16px;
  font-size: 16px;

  &:focus {
    background: #171717;
  }

  &::placeholder {
    color: #fff;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

export const Select = styled.select`
  background: transparent;
  border: 0;
  color: #fff;
  transition: background 0.5;
  padding: 8px 16px;
  font-size: 16px;

  &:focus {
    background: #171717;
  }

  &::placeholder {
    color: #fff;
  }
`;
