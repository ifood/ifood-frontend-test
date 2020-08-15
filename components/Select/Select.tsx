import React from 'react';
import { Container } from './styles';

type SelectOption = {
  name: string;
  value: string;
};

interface SelectProps {
  id: string;
  options: SelectOption[];
  onChange: (filterName: string, value: string) => any;
  name: string;
}

const Select: React.FC<SelectProps> = ({ id, options, name, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onChange(id, value);
  };

  return (
    <Container>
      <label>{name}: </label>
      <select name={`filter_${name}`} onChange={handleChange}>
        <option value="" />
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
