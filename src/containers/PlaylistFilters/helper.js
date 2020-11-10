export const PAGE_SIZE = 12;

export const getFilterType = (filter) => {
  if (filter.values) {
    return { type: "select" };
  }
  if (filter.validation) {
    const { primitiveType, entityType } = filter.validation;
    if (primitiveType === "STRING") {
      if (entityType === "DATE_TIME") {
        return { type: "datetime" };
      }
      return { type: "text" };
    }
    if (primitiveType === "INTEGER") {
      let defaultValue = 1;
      if (filter.id === "limit") {
        defaultValue = PAGE_SIZE;
      } else if (filter.id === "offset") {
        defaultValue = 0;
      }
      return { type: "number", default: defaultValue };
    }
  }
  return null;
};

export const getInitialState = (filters) => {
  const initialValues = {};
  for (let i = 0; i < filters.length; i++) {
    const { default: defaultValue } = getFilterType(filters[i]);
    initialValues[filters[i].id] = defaultValue || null;
  }
  return initialValues;
};

export const transformSubmitValues = (values) => {
  const transformedValues = { ...values };

  for (const key of Object.keys(transformedValues)) {
    if (
      Array.isArray(values[key]) &&
      values[key][0] &&
      typeof values[key][0] === "object" &&
      values[key][0].id
    ) {
      transformedValues[key] = values[key][0].id;
    }
  }
  return transformedValues;
};

// workaround because the filters API is returning an invalid country code for the USA
export const fixInvalidCountryCodes = (filters) =>
  filters.map((filter) => {
    if (filter.id === "country" && Array.isArray(filter.values)) {
      return {
        ...filter,
        values: filter.values.map((item) => ({
          ...item,
          value: item.value.split("_").pop(),
        })),
      };
    }
    return filter;
  });
