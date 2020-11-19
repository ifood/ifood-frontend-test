import styled from 'styled-components';

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.75rem;
  }
  input {
    font-size: 1rem;
    height: 2.5rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-radius: 2px;
    outline: none;
    border: 1px solid #dde2e5;
    transition: border-color 0.1s linear;
    :focus {
      border-color: #979a9c;
    }
  }
`;
