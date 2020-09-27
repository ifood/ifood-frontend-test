import styled from 'styled-components';

import { colors, spacing, borderRadius } from '../../styles/theme';

export const Wrapper = styled.div`
  background-color: ${colors.base.white};
  padding: ${spacing.s3};
  border-radius: ${borderRadius};
  box-shadow: 0 0 15px 1px ${colors.muted.m1};
`;
