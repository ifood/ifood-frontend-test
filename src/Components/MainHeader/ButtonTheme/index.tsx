import React from "react";

import { Container, ThemeSelector, ToggleLabel } from "./styles";

interface IButtonProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const ButtonTheme: React.FC<IButtonProps> = ({labelLeft, labelRight, checked, onChange}) => (
  <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ThemeSelector checked={checked} uncheckedIcon={false} checkedIcon={false} onChange={onChange} /> 
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

export default ButtonTheme;
