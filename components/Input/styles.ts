import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-left: 1rem;
    @media (max-width: 900px) {
      margin-left: 0;
      margin-top: 1rem;
    }
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
  }
`;
