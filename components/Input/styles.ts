import styled from 'styled-components';

import Tooltip from '../Tooltip/Tooltip';

interface ContainerProps {
  invalid: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

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
    border: 2px solid;
    border-color: ${props => (props.invalid ? 'red' : 'white')};
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
    margin: 0;
    margin-left: 16px;
    cursor: pointer;
  }

  span {
    background: #ff6363;
    color: #fff;
    &::before {
      border-color: #ff6363 transparent;
    }
  }
`;
