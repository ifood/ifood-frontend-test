import React from 'react';
import FieldContainer from '../shared/FieldContainer';
import Select from '../shared/Select';
import Input from '../shared/Input';

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
        name={field.id}
        onChange={onChange}
        selectedValue={formData[field.id]}
      /> :
      <Input
        validation={field.validation}
        type={field.validation.primitiveType}
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