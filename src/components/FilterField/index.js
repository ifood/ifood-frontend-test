import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'baseui/form-control';

import FormSelect from '../FormSelect';
import FormInteger from '../FormInteger';
import FormDatepicker from '../FormDatepicker';

const FilterField = ({ field, value, onChange }) => {
  const fieldsTypes = {
    locale: FormSelect,
    country: FormSelect,
    timestamp: FormDatepicker,
    limit: FormInteger,
    offset: FormInteger,
  };

  const CustomField = fieldsTypes[field.id];

  return (
    <FormControl label={() => field.name}>
      <CustomField
        id={field.id}
        options={field.values}
        validation={field.validation}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

FilterField.propTypes = {
  field: PropTypes.oneOfType([PropTypes.object]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FilterField.defaultProps = {
  value: '',
};

export default FilterField;
