import React, { InputHTMLAttributes } from 'react'; //eslint-disable-line
import * as S from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  value: string | number;
  validation?: any;
  heigth?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<IInput> = ({ id, type, value, validation, heigth, onChange, ...rest }) => {
  if (validation && type === 'number') {
    return (
      <S.Input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        min={validation.min}
        max={validation.max}
        heigth={heigth}
        {...rest}
      />
    );
  }

  if (type === 'number') {
    return <S.Input id={id} type={type} heigth={heigth} onChange={onChange} min="0" value={value} {...rest} />;
  }

  return <S.Input id={id} heigth={heigth} onChange={onChange} value={value} {...rest} />;
};
