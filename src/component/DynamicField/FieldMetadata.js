import { formatDate, getLanguageName } from '../../core/l10n/L10n';

const SUPORTED_TYPE = {
  SELECT: Symbol('select'),
  DATE_TIME: Symbol('date_time'),
  NUMBER: Symbol('number'),
};

/**
 * TODO: This converter is not as dynamic as it should be
 */
const SPECIFIC_FIELD_CONVERTER = {
  locale: ({ name }) => getLanguageName(name),
};

const selectValuesMapper = ({ id, values }) => {
  return values.map((item) => {
    const formatter = SPECIFIC_FIELD_CONVERTER[id];
    let text = item.name;
    if (formatter != null) {
      const formatedText = formatter(item);
      if (formatedText != null) {
        text = formatedText;
      }
    }
    return {
      key: item.value,
      text,
      value: item.value,
    };
  });
};

const FIELD_FORMATTER = {
  [SUPORTED_TYPE.SELECT]: ({ fieldMetadata, value }) => {
    return selectValuesMapper(fieldMetadata).find(
      (item) => item?.value === value
    ).text;
  },
  [SUPORTED_TYPE.DATE_TIME]: ({ value }) =>
    value != null ? formatDate(value, 'Pp') : null,
};

const FIELD_SERIALIZER = {
  [SUPORTED_TYPE.DATE_TIME]: ({ value }) =>
    value != null ? value.toISOString() : null,
};

function getComponentType(metadata) {
  const { values, validation } = metadata;

  if (values != null) {
    return SUPORTED_TYPE.SELECT;
  }
  if (validation?.primitiveType === 'INTEGER') {
    return SUPORTED_TYPE.NUMBER;
  }
  if (validation?.entityType === 'DATE_TIME') {
    return SUPORTED_TYPE.DATE_TIME;
  }
  return null;
}

function getFieldFormatter(fieldMetadata) {
  const type = getComponentType(fieldMetadata);
  return FIELD_FORMATTER[type];
}

function getFieldSerializer(fieldMetadata) {
  const type = getComponentType(fieldMetadata);
  return FIELD_SERIALIZER[type];
}

function parseObjectByMetatada(metadata, object) {
  if (metadata == null || object == null) {
    return null;
  }
  return Object.keys(object).reduce((json, field) => {
    const fieldMeatada = metadata.find((item) => item.id === field);
    const serializer = getFieldSerializer(fieldMeatada);
    let value = object[field];
    if (serializer != null) {
      value = serializer({ value, fieldMeatada });
    }
    return {
      ...json,
      [field]: value,
    };
  }, {});
}

export {
  SUPORTED_TYPE,
  getFieldFormatter,
  getComponentType,
  parseObjectByMetatada,
  selectValuesMapper,
};
