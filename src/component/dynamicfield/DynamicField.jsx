import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';
import { COMPONENT_TYPES } from '../../Constants';

function getComponentType({ values, validation }) {
  if (values != null) {
    return COMPONENT_TYPES.SELECT;
  }

  if (validation?.primitiveType === 'INTEGER') {
    return COMPONENT_TYPES.NUMBER;
  }

  if (validation?.entityType === 'DATE_TIME') {
    return COMPONENT_TYPES.DATE;
  }

  return null;
}

function mapperOptions({ id, values }) {
  return values.map((value) => {
    return (
      <MenuItem id={id} value={value.value}>
        {value.name}
      </MenuItem>
    );
  });
}

function DynamicField(props) {
  const { dynamicData, value = '', onChange, ...rest } = props;

  if (dynamicData == null) {
    return null;
  }

  function handleChange(data) {
    if (typeof onChange === 'function') {
      onChange(data);
    }
  }

  const handleChangeInput = (field, validation) => (element) => {
    const elementValue = element?.target?.value;

    if (validation != null) {
      const { min, max } = validation;

      if (Number(elementValue) < min || Number(elementValue) > max) {
        return;
      }
    }

    handleChange({
      field,
      value: elementValue,
    });
  };

  const handleChangeDate = (field) => (newValue) => {
    handleChange({ field, value: newValue });
  };

  function renderComponentByData(data) {
    const { values, name, id, validation } = data;

    const componentType = getComponentType(data);

    switch (componentType) {
      case COMPONENT_TYPES.SELECT:
        return (
          <TextField
            id={id}
            label={name}
            value={value}
            onChange={handleChangeInput(id)}
            variant="filled"
            select
            {...rest}>
            {mapperOptions({ id, values })}
          </TextField>
        );
      case COMPONENT_TYPES.DATE:
        return (
          <DateTimePicker
            label={name}
            value={value || new Date()}
            onChange={handleChangeDate(id)}
            variant="inline"
            ampm={false}
            {...rest}
          />
        );
      case COMPONENT_TYPES.NUMBER:
        return (
          <TextField
            id={id}
            label={name}
            type="number"
            value={value}
            onChange={handleChangeInput(id, validation)}
            {...rest}
          />
        );
      default:
        return <></>;
    }
  }

  return renderComponentByData(dynamicData);
}

DynamicField.propTypes = {
  dynamicData: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func,
};

export default React.memo(DynamicField);
