import 'react-datepicker/dist/react-datepicker.css';

import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  > button {
    background-color: ${props => props.theme.colors.second};
    margin-top: 15px;
    border: none;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    color: ${props => props.theme.colors.white};
font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.2s;

&:hover{
  background-color: ${props => props.theme.colors.third};
}

  }

  @media (min-width: 500px) {
    flex-direction: row;

    > button {
      margin-top: 0;
      margin-left: 1rem;
      width: calc(100% / 6);
    }
  }
`;

export const FormItem = styled.div`
  width: 100%;

  & + div {
    margin-top: 1rem;
  }

  .react-select__control {
    border-radius: 4px;
    border: 2px solid ${props => props.theme.colors.third};
    height: 40px;
    width: 100%;

    .react-select__value-container {
      padding: 0 0.5rem;

      .react-select__placeholder {
        color: ${props => props.theme.colors.gray};
        font-size: 15px;
      }

      input {
        color: ${props => props.theme.colors.gray};
        font-size: 15px;
      }
    }
  }

  .react-select__menu {
    .react-select__option {
      color: ${props => props.theme.colors.gray};
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  > input, .react-datepicker-wrapper input {
    border: 2px solid ${props => props.theme.colors.third};
    border-radius: 4px;
    font-size: 15px;
    height: 40px;
    padding: 0 0.5rem;
    width: 100%;

    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
  }

  @media (min-width: 500px) {
    width: calc(100% / 6);

    & + div {
      margin-top: 0;
      margin-left: 1rem;
    }
  }
`;
