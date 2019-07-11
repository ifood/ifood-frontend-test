import styled from 'styled-components';
import { media } from 'assets/styles/global';

export const PlaylistWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  padding-top: 50px;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto 40px;

  .error {
    background-color: #f44336;
  }
`;

export const PlaylistHeader = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 555px 25px 15px 25px/25px 5px 35px 555px;
  margin-top: 40px;
  padding: 32px;
  height: 230px;
  justify-content: center;

  ${media.tablet`
    margin: 20px 10px;
  `};
`;

export const PlaylistBody = styled.section`
  display: flex;
  margin-top: 40px;

  ${media.phone`
    flex-direction: column;
  `};

  .table {
    margin-bottom: 20px;
  }

  .results {
    width: 100%;
  }
`;
