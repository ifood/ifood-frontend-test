export const getFilterType = (filter) => {
  if (filter.values) {
    return { type: "dropdown" };
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
      return { type: "number" };
    }
  }
  return null;
};
