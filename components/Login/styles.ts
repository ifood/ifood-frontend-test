import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #ff6363;
    font-size: 5rem;
  }

  button {
    background: #ff6363;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-weight: bold;
    margin-top: 30px;
  }
`;
