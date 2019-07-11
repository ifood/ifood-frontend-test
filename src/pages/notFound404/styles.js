import styled from 'styled-components';
import { media } from 'assets/styles/global';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 50px;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    margin: 20px;
    text-align: center;
  `}

  .lost-message {
    margin-bottom: 16px;
  }
`;
