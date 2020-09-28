import styled from 'styled-components';

import { colors, spacing } from '../../styles/theme';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  background-color: ${colors.base.light};
`;

export const Logo = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  display: block;
  margin: ${spacing.s3} auto ${spacing.s4};
`;
