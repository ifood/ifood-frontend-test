import React from 'react';
import FieldContainer from './FieldContainer';
import Select from './Select';
import Input from './Input';

const DynamicFields = ({
  fields = [],
  onChange,
  formData = {}
 }) => {
  if (!fields.length) return null;
  return fields.map(field => {
    const filterItem = field.values ?
      <Select
        values={field.values}
        id={field.id}
        name={field.id}
        onChange={onChange}
        selectedValue={formData[field.id]}
      /> :
      <Input
        validation={field.validation}
        type={field.validation.primitiveType}
        id={field.id}
        name={field.id}
        onChange={onChange}
        value={formData[field.id]}
        placeholder={field.validation.pattern || field.name}
      />;
    return (
      <FieldContainer name={field.name} key={field.id}>
        { filterItem }
      </FieldContainer>
    )
  });
}

export default DynamicFields;