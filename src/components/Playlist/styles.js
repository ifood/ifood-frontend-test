import styled from 'styled-components';
import { gray, lightGray } from '../../styles/colors';

export const Container = styled.li`
  .info-playlist {
    margin-left: 10px;
  }

  @media only screen and (min-width: 992px) {
    .col-md-2 {
      max-width: 12% !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .name-info-playlist {
      font-size: 24px;
    }
  }
`;

export const Info = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: ${gray};
  margin-bottom: 0px;
`;

export const Name = styled.p`
  color: ${gray};
  font-weight: bold;
  font-size: 36px;
  margin: 0px;
`;

export const Owner = styled.p`
  color: ${lightGray};
  font-weight: bold;
  font-size: 12px;

  span {
    color: ${gray};
  }
`;
