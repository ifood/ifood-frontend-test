import styled from 'styled-components';

import { Checkbox as MUCheckbox } from '@material-ui/core';

export const Container = styled.div``;

export const ValueField = styled.div`
  margin: 8px 0;
`;

export const Checkbox = styled(MUCheckbox)`
  &.MuiCheckbox-colorSecondary.Mui-checked {
    color: #d23232 !important;
  }
`;
