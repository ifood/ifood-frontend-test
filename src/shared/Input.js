import React from 'react';

const TYPE = {
  STRING: 'text',
  INTEGER: 'number',
}

const Input = ({
  id =  '',
  name = '',
  validation = {}
}) => {
  return <input
    className="form-control"
    id={id}
    type={TYPE[validation.primitiveType]}
    name={name}
  />
}

export default Input;