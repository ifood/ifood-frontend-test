import styled from 'styled-components';
import { media } from 'assets/styles/global';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1D976C, #93F9B9);

  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;

    ${media.phone`
      margin: 0 10px;
    `};

    h3, p {
      margin-bottom: 16px;

      ${media.phone`
        text-align: center;
      `};
    }
  }
`;
