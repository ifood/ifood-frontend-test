import styled from 'styled-components';

export const Toggler = styled.button`
  background: #ff6363;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 10px;
  font-weight: bold;
  margin: 1rem 0;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  transition: all ease 0.2s;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
