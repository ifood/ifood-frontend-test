import styled from 'styled-components';
import colors from 'common/colors';

export const Header = styled.header`
  padding-top: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  padding: 0 20px;
  text-align: center;

  strong {
    color: ${colors.GREEN};
  }

  span {
    color: ${colors.RED};
  }
`;
