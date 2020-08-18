import styled from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
  }

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
    width: 100%;
    border: 2px solid #fff;
  }

  svg {
    position: absolute;
    right: 0.3rem;
    bottom: 0.55rem;
    stroke: #aaa;
  }
`;
