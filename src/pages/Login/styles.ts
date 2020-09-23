import styled from "styled-components";
import { Button } from "../../assets/styles";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginLogoContainer = styled.section`
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  width: 100vw;
`;

export const LoginLogo = styled.img`
  width: 15%;
  margin: 0 auto;
`;

export const LoginButtonContainer = styled.div`
  width: 100vw;
  padding: 0 20px;

  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-direction: column;
`;

export const MessageBeforeLogin = styled.h2`
  text-align: center;
  font-weight: 100;
  font-size: 20px;
`;

export const LoginToContinue = styled.h2`
  font-size: 16px;
  text-align: center;
  font-weight: 100;
  margin-bottom: 20px;

`;

export const LoginButton = styled(Button)`
  width: 325px;
`;
