import React from 'react';
import shortid from 'shortid';

const SingleOption = ({ name = '', value = '' }) => {
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
  id =  '',
  name = '',
  values = []
}) => {
  return (
    <select id={id} name={name} className="form-control">
      <Options values={values} />
    </select>
  );
}

export default Select;