import styled from 'styled-components';
import { media } from 'assets/styles/global';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.tablet`
    justify-content: center;
  `};

  .card {
    width: 300px;
    margin: 0 5px 10px 5px;

    ${media.phone`
      width: 100%;
      margin: 0 15px 15px 15px;
    `};
  }

  .card-image {
    height: 300px;
  }

  .title {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 280px;
    white-space: nowrap;

    ${media.phone`
      width: 100%;
    `};
  }

  .no-results-msg {
    text-align: center;
    margin: 20px;
  }
`;
