import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 36px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #010101;
  color: #ffffff;

  text-align: center;
`;

const MusicalPhrase = styled.div`
  margin-top: 74px;
  font-size: 24px;
  font-weight: 100;
`;

const LoginToContinue = styled.div`
  font-size: 18px;
  margin: 16px 0 56px;
`;

export { Container, MusicalPhrase, LoginToContinue };
