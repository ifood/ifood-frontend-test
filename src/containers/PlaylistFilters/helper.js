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
      return { type: "number", default: 1 };
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
