import styled from 'styled-components';
import colors from 'common/colors';
import breakpoints from 'common/breakpoints';

export const Wrapper = styled.div`
  background: ${colors.RED};
  padding: 140px 20px;
  margin-top: -120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Header = styled.header`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ff00004f;

  span {
    font-weight: 600;
  }
`;

export const Footer = styled.footer`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;

  a {
    width: 100%;
    font-weight: 600;
    text-align: center;
    color: ${colors.RED};
    text-decoration: none;
    &:hover {
      color: ${colors.GRAY_LIGHT};
    }
  }

  @media (${breakpoints.LARGE}) {
    cursor: pointer;
  }
`;
