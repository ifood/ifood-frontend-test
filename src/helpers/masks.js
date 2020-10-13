const masks = {
  STRING(value) {
    return value.replace(/\D/g, "");
  },
  INTEGER(value) {
    return value.replace(/[^0-9]/g, "");
  },
  DATE_TIME(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4}).(\d{2})(\d)/, "$1-$2-3")
      .replace(/(\d{4}).(\d{2}).(\d{2})(\d)/, "$1-$2-$3T$4")
      .replace(/(\d{4}).(\d{2}).(\d{2}).(\d{2})(\d)/, "$1-$2-$3T$4:$5")
      .replace(
        /(\d{4}).(\d{2}).(\d{2}).(\d{2}).(\d{2})(\d)/,
        "$1-$2-$3T$4:$5:$6"
      )
      .replace(
        /(\d{4}).(\d{2}).(\d{2}).(\d{2}).(\d{2}).(\d{2})\d+/,
        "$1-$2-$3T$4:$5:$6"
      );
  },
};

const getMask = (key) => masks[key] || ((value) => value);

const handleInputMask = (event, mask, entityType) => {
  const { target } = event;

  if (mask && !entityType) target.value = getMask(mask)(target.value);
  if (entityType) target.value = getMask(entityType)(target.value);
};

export const MASK_TYPES = {
  STRING: "STRING",
  INTEGER: "INTEGER",
  DATE_TIME: "DATE_TIME",
};

export { handleInputMask };
