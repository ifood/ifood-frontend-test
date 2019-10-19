import React from 'react';
import shortid from 'shortid';

const SingleOption = ({ value = '', name = '' }) => {
  return <option value={value}>{name}</option>
}

const Options = ({ values = [] }) => {
  return values.map(v =>
    <SingleOption
      key={shortid()}
      name={v.name}
      value={v.value}
    />
  );
}

const Select = ({
  selectedValue = '',
  name = '',
  values = [],
  initialValue = 'Selecione...',
  onChange = () => {}
}) => {
  return (
    <select name={name} className="form-control" onChange={onChange} value={selectedValue}>
      <SingleOption value="" name={initialValue} />
      <Options values={values} />
    </select>
  );
}

export default Select;