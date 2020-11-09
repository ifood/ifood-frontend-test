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
