import styled, { css } from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;

  label {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  input {
    border: none;
    border-radius: 0.2rem;
    height: 2rem;
    padding: 1rem 0.25rem;
    min-width: 120px;
    cursor: pointer;
  }
`;
