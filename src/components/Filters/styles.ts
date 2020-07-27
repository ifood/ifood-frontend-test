import styled from 'styled-components';
import {
  Button as MUButton,
  TextField,
  Checkbox as MUCheckbox,
  Slider,
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

export const QuantitySlider = styled(Slider)`
  margin-top: 12px;

  &.MuiSlider-root {
    color: #d23232;

    .MuiSlider-thumb:hover {
      box-shadow: 0px 0px 0px 8px #d2323266;
    }
  }
`;

export const Button = styled(MUButton)`
  &.MuiButton-contained {
    background-color: #d23232;
    color: #f5f5f5;
    margin-top: 16px;
  }
`;
