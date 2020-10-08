import React, { SelectHTMLAttributes } from 'react'; //eslint-disable-line
import * as S from './styles';

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  options: Array<{ name: string; value: string }>;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export const Select: React.FC<ISelect> = ({ value, options, onChange, ...rest }) => {
  return (
    <S.Select value={value} onChange={onChange} {...rest}>
      {options.map(({ value, name }) => (
        <option value={value}>{name}</option>
      ))}
    </S.Select>
  );
};
