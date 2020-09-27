import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'baseui/form-control';

import FormSelect from '../FormSelect';
import FormInput from '../FormInput';
import FormInteger from '../FormInteger';
import FormDatepicker from '../FormDatepicker';

const FilterField = ({ field, onChange }) => {
  const fieldsTypes = {
    locale: FormSelect,
    country: FormSelect,
    timestamp: FormDatepicker,
    limit: FormInteger,
    offset: FormInteger,

    default: FormInput,
  };

  const CustomField = fieldsTypes[field.id] || fieldsTypes.default;

  return (
    <FormControl label={() => field.name}>
      <CustomField
        id={field.id}
        options={field.values}
        min={field.validation && field.validation.min}
        max={field.validation && field.validation.max}
        debounceTime={450}
        onChange={onChange}
      />
    </FormControl>
  );
};

FilterField.propTypes = {
  field: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterField;
