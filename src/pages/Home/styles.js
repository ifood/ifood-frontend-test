import styled from 'styled-components';
import { gray } from '../../styles/colors';

export const Header = styled.div`
  justify-content: flex-start;
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const HeaderTitle = styled.h1`
  color: ${gray};
  font-weight: bold;
`;

export const HeaderLogo = styled.img`
  margin-left: 5px;
  margin-top: 5px;
`;
