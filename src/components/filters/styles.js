import styled from 'styled-components';
import { media } from 'assets/styles/global';

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 260px;
  padding-right: 30px;

  ${media.phone`
    padding: 0 15px;
  `};

  ${media.tablet`
    padding: 20px 10px;
  `};

  & > h4 {
    margin-bottom: 20px;
  }

  .form-control {
    margin-bottom: 20px;
  }
`;
