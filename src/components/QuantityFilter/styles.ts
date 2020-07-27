import styled from 'styled-components';
import { Slider } from '@material-ui/core';

export const Container = styled(Slider)`
  margin-top: 12px;

  &.MuiSlider-root {
    color: #d23232;

    .MuiSlider-thumb:hover {
      box-shadow: 0px 0px 0px 8px #d2323266;
    }
  }
`;
