import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Container = styled(TextField)`
  .MuiFormLabel-root,
  .MuiInputBase-root {
    color: #fff;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #d23232;
  }

  .MuiInputBase-root.Mui-focused::after {
    border-color: #d23232;
  }
`;
