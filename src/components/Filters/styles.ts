import styled from 'styled-components';
import { TextField, Checkbox as MUCheckbox, Slider } from '@material-ui/core';

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

export const ValuesContainer = styled.div`
  margin-top: 12px;
`;

export const ValueField = styled.div`
  margin: 8px 0;
`;

export const Checkbox = styled(MUCheckbox)`
  &.MuiCheckbox-colorSecondary.Mui-checked {
    color: #d23232 !important;
  }
`;

export const DateTimePicker = styled(TextField)`
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

export const QuantitySlider = styled(Slider)``;
