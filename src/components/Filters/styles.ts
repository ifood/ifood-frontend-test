import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: stretch;
  align-self: center;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 16px;

    input {
      margin-bottom: 8px;
      border: 0;
      border-bottom: 1px #fff solid;
      width: 100%;
    }

    select {
      margin-bottom: 8px;
      border: 0;
      border-bottom: 1px #fff solid;
    }
  }
`;

export const Input = styled.input`
  background: transparent;
  color: #fff;
  transition: background 0.5;
  padding: 8px 16px;
  font-size: 16px;
  border: 0;
  border-right: 1px #fff solid;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:last-child {
    border-right: 0;
  }

  &:focus {
    background: #171717;
  }

  &::placeholder {
    color: #fff;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

export const Select = styled.select`
  background: transparent;
  border: 0;
  border-radius: 0;
  border-right: 1px #fff solid;
  color: #fff;
  transition: background 0.5;
  padding: 8px 16px;
  font-size: 16px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:last-child {
    border-right: 0;
  }

  &:focus {
    background: #171717;
  }

  &::placeholder {
    color: #fff;
  }
`;
