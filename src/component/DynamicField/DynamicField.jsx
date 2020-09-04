import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { useIntl } from 'react-intl';
import Field from '../Field';
import {
  getComponentType,
  SUPORTED_TYPE,
  selectValuesMapper,
} from './FieldMetadata';
import { getLocale } from '../../core/l10n/L10n';

function DynamicField({ metadata, value = '', onChange }) {
  const intl = useIntl();

  if (metadata == null) {
    return null;
  }

  function handleChange(data) {
    if (onChange != null) {
      onChange(data);
    }
  }

  const handleChangeSelect = (field) => (e, { value: newValue }) => {
    handleChange({ field, value: newValue });
  };

  const handleChangeInput = (field) => (e) => {
    handleChange({
      field,
      value: e?.target?.value,
    });
  };

  const handleChangeDate = (field) => (newValue) => {
    handleChange({ field, value: newValue });
  };

  function getComponentByMetadata(fieldMetadata) {
    const { values, name, id, validation } = fieldMetadata;
    const type = getComponentType(fieldMetadata);

    switch (type) {
      case SUPORTED_TYPE.SELECT:
        return [
          Select,
          {
            fluid: true,
            options: selectValuesMapper({ id, values }),
            placeholder: name,
            value,
            onChange: handleChangeSelect(id),
          },
        ];
      case SUPORTED_TYPE.NUMBER:
        return [
          'input',
          {
            id,
            placeholder: name,
            type: 'number',
            min: validation?.min,
            max: validation?.max,
            value,
            onChange: handleChangeInput(id),
          },
        ];
      case SUPORTED_TYPE.DATE_TIME:
        return [
          DatePicker,
          {
            id,
            wrapperClassName: 'datepicker--fluid',
            placeholderText: intl.formatMessage({ id: 'datetime.placeholder' }),
            selected: value,
            onChange: handleChangeDate(id),
            dateFormat: 'Pp',
            timeInputLabel: intl.formatMessage({ id: 'time' }),
            showTimeInput: true,
            locale: getLocale(),
          },
        ];
      default:
        return [];
    }
  }

  const [Component, componentProps] = getComponentByMetadata(metadata, value);

  if (Component != null) {
    return (
      <Field label={metadata.name} fieldId={metadata.id}>
        <Component {...componentProps} />
      </Field>
    );
  }
  return null;
}

DynamicField.propTypes = {
  metadata: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func,
};

export default React.memo(DynamicField);
