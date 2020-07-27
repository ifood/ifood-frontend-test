import styled from 'styled-components';
import {
  Button as MUButton,
  TextField,
  Accordion as MUAccordion,
} from '@material-ui/core';

export const Container = styled.aside`
  padding: 16px;
  width: 100%;
  background-color: #333;
  border-radius: 8px;
`;

export const Filter = styled.div`
  margin-top: 16px;
  width: 100%;
`;

export const TextInput = styled(TextField)`
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

export const Accordion = styled(MUAccordion)`
  margin-top: 16px;

  &.MuiPaper-root {
    color: #f5f5f5;
    background-color: #4d4d4d;
  }
`;

export const FiltersContainer = styled.div`
  width: 100%;
`;

export const Button = styled(MUButton)`
  &.MuiButton-contained {
    background-color: #d23232;
    color: #f5f5f5;
    margin-top: 16px;
  }
`;
