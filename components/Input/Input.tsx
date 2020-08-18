import React, { useState, useRef } from 'react';
import { debounce } from 'lodash';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  onChange: (filterName: string, value: string) => any;
  validation?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  placeholder,
  validation,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const delayedQuery = useRef(
    debounce((value: string) => {
      setInvalid(false);
      if (value === '') {
        onChange(id, value);
        return;
      }

      if (
        validation &&
        validation.primitiveType === 'INTEGER' &&
        validation.max &&
        validation.min
      ) {
        if (value >= validation.min && value <= validation.max) {
          onChange(id, value);
        } else {
          setInvalid(true);
          setErrorMessage(
            `O valor digitado deve estar entre ${validation.min} e ${validation.max}`,
          );
          console.log('invalid value', `${id}: ${value}`);
        }
      } else {
        onChange(id, value);
      }
    }, 500),
  ).current;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (id === 'name') {
      onChange(id, value);
      return;
    }
    delayedQuery(value);
  };

  return (
    <Container invalid={invalid}>
      <label>{label}</label>
      <input
        id={id}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        min={
          validation?.min && validation?.primitiveType === 'INTEGER'
            ? validation.min || 0
            : null
        }
        max={
          validation?.max && validation?.primitiveType === 'INTEGER'
            ? validation.max || 0
            : null
        }
        type={validation?.primitiveType === 'INTEGER' ? 'number' : 'text'}
        maxLength={validation?.max && validation.max.toString().length}
      />
      {invalid && (
        <Error title={errorMessage}>
          <FiAlertCircle size={20} color="#ff6363" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
